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

/** Forwards a booking request to the CRM catch hook (Zapier / Make / GoHighLevel). */
export const submitBooking = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => payloadSchema.parse(d))
  .handler(async ({ data }) => {
    const url = process.env["VITE_CRM_WEBHOOK_URL"];
    if (!url) {
      console.error("Booking not forwarded: VITE_CRM_WEBHOOK_URL is not set");
      return { ok: false as const, reason: "not_configured" };
    }
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        console.error("CRM webhook failed", res.status);
        return { ok: false as const, reason: "webhook_failed" };
      }
    } catch (e) {
      console.error("CRM webhook error", e);
      return { ok: false as const, reason: "webhook_failed" };
    }
    return { ok: true as const };
  });
