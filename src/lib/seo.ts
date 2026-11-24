export const SITE_URL = "https://tntdomestics.com";
export const SITE_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/adyVOw87h7dJofGVOZSlwtrswfF3/social-images/social-1784696072387-Screenshot_2026-07-21_at_11.52.00_PM.webp";
export const QUOTE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSemUJYe9Q7JpF1QUXErmiZZlWcX05tLbqDhauOG6T1iGSfqBA/viewform";
export const EMAIL = "management@tntdomestics.com";
export const PHONE = "830-500-5791";

/** Per-page head tags. `path` must start and end with "/" (site uses trailing slashes). */
export function pageHead(path: string, title: string, description: string) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: SITE_IMAGE },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SITE_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
