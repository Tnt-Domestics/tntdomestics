import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => pageHead("/", "Luxury Home & Estate Cleaning San Antonio & Austin | TNT Domestics", "White-glove estate housekeeping for Alamo Heights, Olmos Park, The Dominion, West Lake Hills and luxury homes in California & Hawaii. Discreet, NDA-bound crews."),
  component: Index,
});
