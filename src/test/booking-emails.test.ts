import { beforeEach, describe, expect, it, vi } from "vitest";
import { sendBookingEmails, type BookingPayload } from "@/lib/booking.functions";
import { TEMPLATES } from "@/lib/email-templates/registry";

const mocks = vi.hoisted(() => ({ sendTemplateEmail: vi.fn() }));
vi.mock("@/lib/email-templates/send-email", () => ({ sendTemplateEmail: mocks.sendTemplateEmail }));

const data = {
  event_id: "quote-123",
  service_label: "Luxury Residential Cleaning",
  full_name: "Jane Doe",
  email: "jane@example.com",
} as BookingPayload;

describe("quote request emails", () => {
  beforeEach(() => {
    mocks.sendTemplateEmail.mockReset();
    mocks.sendTemplateEmail.mockResolvedValue({ sent: true });
  });

  it("alerts management without sending a customer confirmation", async () => {
    await sendBookingEmails(data, "sent");

    expect(mocks.sendTemplateEmail).toHaveBeenCalledTimes(1);
    expect(mocks.sendTemplateEmail).toHaveBeenCalledWith("new-booking", "management@tntdomestics.com", expect.objectContaining({
      idempotencyKey: "new-booking-quote-123",
      replyTo: "jane@example.com",
      templateData: expect.objectContaining({ crm_status: "sent" }),
    }));
    expect(mocks.sendTemplateEmail).not.toHaveBeenCalledWith("quote-confirmation", expect.anything(), expect.anything());
  });

  it("registers only the management quote alert", () => {
    expect(TEMPLATES["new-booking"]?.to).toBe("management@tntdomestics.com");
    expect(TEMPLATES["quote-confirmation"]).toBeUndefined();
  });
});
