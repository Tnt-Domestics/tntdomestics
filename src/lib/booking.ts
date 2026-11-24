export const SERVICES = [
  { value: "commercial", label: "Commercial Cleaning" },
  { value: "government", label: "Government Facility Cleaning" },
  { value: "residential", label: "Luxury Residential Cleaning" },
  { value: "deep", label: "Deep Cleaning" },
  { value: "post-construction", label: "Post-Construction Cleaning" },
  { value: "move", label: "Move-In / Move-Out Cleaning" },
  { value: "aviation", label: "Private Aircraft Cleaning" },
  { value: "other", label: "Other" },
] as const;

export type ServiceValue = (typeof SERVICES)[number]["value"];

export const serviceLabel = (v: string) => SERVICES.find((s) => s.value === v)?.label ?? v;

export const isService = (v: unknown): v is ServiceValue =>
  typeof v === "string" && SERVICES.some((s) => s.value === v);

export function splitName(full: string) {
  const parts = full.trim().split(/\s+/);
  const first_name = parts.shift() ?? "";
  return { first_name, last_name: parts.join(" ") };
}

export const ATTRIBUTION_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"] as const;
const STORE = "tnt_attribution";

/** Capture UTM/click IDs from the landing URL into sessionStorage (first value per key in the session wins). */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  let stored: Record<string, string> = {};
  try { stored = JSON.parse(sessionStorage.getItem(STORE) || "{}"); } catch { /* ignore */ }
  let changed = false;
  for (const k of ATTRIBUTION_KEYS) {
    const v = params.get(k);
    if (v && !stored[k]) { stored[k] = v; changed = true; }
  }
  if (changed) sessionStorage.setItem(STORE, JSON.stringify(stored));
}

export function readAttribution(): Record<string, string> {
  try { return JSON.parse(sessionStorage.getItem(STORE) || "{}"); } catch { return {}; }
}

export function readCookie(name: string) {
  const row = document.cookie.split("; ").find((c) => c.startsWith(name + "="));
  return row ? decodeURIComponent(row.slice(name.length + 1)) : "";
}

/** Today's date in the visitor's local time as YYYY-MM-DD. */
export function todayISO(d = new Date()) {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
