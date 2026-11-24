export const SITE_URL = "https://tntdomestics.com";
export const SITE_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/adyVOw87h7dJofGVOZSlwtrswfF3/social-images/social-1784696072387-Screenshot_2026-07-21_at_11.52.00_PM.webp";
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
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/** FAQPage JSON-LD for plain-text FAQs (only pages the owner asked for). */
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    }),
  };
}
