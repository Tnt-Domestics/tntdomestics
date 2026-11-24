import { aviationFaqs } from "@/content/faqs";
import { createFileRoute } from "@tanstack/react-router";
import PrivateJet from "@/pages/PrivateJet";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/aviation")({
  staticData: { sitemap: true, sitemapLastmod: "2026-11-24" },
  head: () => pageHead("/aviation/", "Private Jet & Aircraft Cleaning San Antonio | TNT Domestics", "Private jet interior detailing, cabin sanitization and exterior wash for aircraft owners, charter operators and flight departments in San Antonio and Texas.", { faqs: aviationFaqs, service: "Private Jet & Aircraft Cleaning" }),
  component: PrivateJet,
});
