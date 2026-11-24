import { describe, it, expect } from "vitest";
import { validateBooking } from "@/components/BookingForm";
import { splitName } from "@/lib/booking";

const ok = {
  service: "residential", property_type: "Estate", approx_size: "5000 sq ft", frequency: "Weekly", preferred_date: "2026-12-01", time_window: "Flexible",
  full_name: "Jane Q Doe", company: "", phone: "830-500-5791", email: "jane@example.com", address: "1 Main St", city: "San Antonio", zip: "78209", notes: "", sms_consent: false, website: "",
};

describe("booking form", () => {
  it("accepts a complete request", () => expect(validateBooking(ok, "2026-11-24")).toEqual({}));
  it("rejects past preferred dates", () => expect(validateBooking({ ...ok, preferred_date: "2026-11-23" }, "2026-11-24").preferred_date).toBeTruthy());
  it("requires a 5-digit ZIP", () => expect(validateBooking({ ...ok, zip: "7820" }, "2026-11-24").zip).toBeTruthy());
  it("rejects unknown services", () => expect(validateBooking({ ...ok, service: "pool" }, "2026-11-24").service).toBeTruthy());
  it("splits first and last name", () => expect(splitName(" Jane Q Doe ")).toEqual({ first_name: "Jane", last_name: "Q Doe" }));
});
