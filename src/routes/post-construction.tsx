import { createFileRoute } from "@tanstack/react-router";
import ConstructionPost from "@/pages/ConstructionPost";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/post-construction")({
  head: () => pageHead("/post-construction/", "Post-Construction Cleaning San Antonio | Builders & GCs", "Post-construction cleaning in San Antonio for builders and general contractors: rough, final and touch-up cleans, HEPA dust removal, punch lists."),
  component: ConstructionPost,
});
