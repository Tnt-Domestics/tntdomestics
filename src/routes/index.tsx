import { homeFaqs } from "@/content/faqs";
import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true, sitemapLastmod: "2026-11-24" },
  head: () => pageHead("/", "Luxury Cleaning, Estate & Commercial Services | TNT Domestics", "Premium residential, estate, commercial, government, post-construction and aircraft cleaning. Serving San Antonio, Austin, California and Hawaii.", { faqs: homeFaqs }),
  component: Index,
});
