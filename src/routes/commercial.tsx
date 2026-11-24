import { commercialFaqs } from "@/content/faqs";
import { createFileRoute } from "@tanstack/react-router";
import Commercial from "@/pages/Commercial";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/commercial")({
  staticData: { sitemap: true, sitemapLastmod: "2026-11-24" },
  head: () => pageHead("/commercial/", "Commercial Cleaning & Janitorial San Antonio | TNT Domestics", "Commercial janitorial service in San Antonio, TX for offices, clinics and multi-tenant buildings: nightly cleaning, day porter, floor care. Request a quote.", { faqs: commercialFaqs, service: "Commercial Cleaning & Janitorial Services" }),
  component: Commercial,
});
