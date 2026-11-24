import { residentialFaqs } from "@/content/faqs";
import { createFileRoute } from "@tanstack/react-router";
import Residential from "@/pages/Residential";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/residential")({
  staticData: { sitemap: true, sitemapLastmod: "2026-11-24" },
  head: () => pageHead("/residential/", "Luxury House Cleaning & Housekeeping San Antonio | TNT Domestics", "Discreet luxury house cleaning in San Antonio, TX: recurring housekeeping, deep cleaning and fine-finish care by background-checked, NDA-bound crews.", { faqs: residentialFaqs, service: "Luxury House Cleaning & Estate Housekeeping" }),
  component: Residential,
});
