import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const s = (max: number) => z.string().trim().max(max);

const payloadSchema = z.object({
  event_id: s(100).min(1),
  service: s(40).min(1),
  service_label: s(100),
  property_type: s(60).min(1),
  approx_size: s(60).min(1),
  frequency: s(60).min(1),
  preferred_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  time_window: s(60).min(1),
  full_name: s(120).min(2),
  first_name: s(60),
  last_name: s(80),
  company: s(120),
  phone: s(30).min(7),
  email: z.string().trim().email().max(255),
  address: s(200).min(3),
  city: s(80).min(2),
  zip: z.string().regex(/^\d{5}$/),
  notes: s(2000),
  sms_consent: z.boolean(),
  page_url: s(1000),
  referrer: s(1000),
  submitted_at: s(40),
  utm_source: s(200), utm_medium: s(200), utm_campaign: s(200), utm_term: s(200), utm_content: s(200),
  gclid: s(300), fbclid: s(300), _fbp: s(200), _fbc: s(300),
});

export type BookingPayload = z.infer<typeof payloadSchema>;
type CrmStatus = "sent" | "failed" | "not_configured";

async function attemptEmail(label: string, send: Promise<unknown>) {
  try {
    await send;
  } catch (error) {
    console.error(`${label} failed`, error);
  }
}

/** Alerts management without blocking a saved request; customers are contacted personally. */
export async function sendBookingEmails(data: BookingPayload, crm: CrmStatus) {
  const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
  await attemptEmail("Management quote alert", sendTemplateEmail("new-booking", "management@tntdomestics.com", {
    templateData: { ...data, crm_status: crm },
    idempotencyKey: `new-booking-${data.event_id}`,
    replyTo: data.email,
  }));
}

/** Forwards a booking request to the CRM catch hook (Zapier / Make / GoHighLevel). */
export const submitBooking = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => payloadSchema.parse(d))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    // 1. Backup copy first, so a CRM outage never loses a lead.
    const { data: row, error: dbError } = await supabaseAdmin
      .from("booking_requests")
      .insert({
        event_id: data.event_id, service: data.service, full_name: data.full_name, email: data.email,
        phone: data.phone, preferred_date: data.preferred_date, city: data.city, zip: data.zip, payload: data,
      })
      .select("id")
      .single();
    if (dbError) console.error("Booking backup insert failed", dbError.message);

    // 2. Forward to the CRM catch hook.
    let crm: CrmStatus = "not_configured";
    const url = process.env["CRM_WEBHOOK_URL"] || process.env["VITE_CRM_WEBHOOK_URL"];
    if (url) {
      try {
        const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
        crm = res.ok ? "sent" : "failed";
        if (!res.ok) console.error("CRM webhook failed", res.status);
      } catch (e) {
        crm = "failed";
        console.error("CRM webhook error", e);
      }
    } else {
      console.error("Booking not forwarded: CRM_WEBHOOK_URL is not set");
    }
    if (row) await supabaseAdmin.from("booking_requests").update({ crm_status: crm }).eq("id", row.id);

    // 3. Alert management; the customer is contacted personally.
    try {
      await sendBookingEmails(data, crm);
    } catch (e) {
      console.error("Quote email setup failed", e);
    }

    if (!row && crm !== "sent") return { ok: false as const, reason: "not_saved" };
    return { ok: true as const };
  });
