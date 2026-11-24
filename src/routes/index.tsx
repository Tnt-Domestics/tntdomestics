import { homeFaqs } from "@/content/faqs";
import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { pageHead } from "@/lib/seo";
import thumbnailAsset from "@/assets/homepage-thumbnail.jpg.asset.json";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true, sitemapLastmod: "2026-11-24" },
  head: () => {
    const head = pageHead("/", "Luxury Cleaning, Estate & Commercial Services | TNT Domestics", "Premium residential, estate, commercial, government, post-construction and aircraft cleaning. Serving San Antonio, Austin, California and Hawaii.", { faqs: homeFaqs });
    const imageUrl = `https://tntdomestics.com${thumbnailAsset.url}`;
    return {
      ...head,
      meta: [
        ...head.meta,
        { property: "og:image", content: imageUrl },
        { name: "twitter:image", content: imageUrl },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "TNT Domestics homepage — luxury house cleaning and estate housekeeping in San Antonio and Austin" },
      ],
    };
  },
  component: Index,
});
