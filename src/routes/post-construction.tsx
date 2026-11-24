import { createFileRoute } from "@tanstack/react-router";
import ConstructionPost from "@/pages/ConstructionPost";

export const Route = createFileRoute("/post-construction")({
  head: () => ({
    meta: [
      { title: "Post-Construction Cleaning | TNT Domestics" },
      { name: "description", content: "Rough, final and touch-up post-construction cleaning for new builds and renovations across Texas, California & Hawaii." },
      { property: "og:title", content: "Post-Construction Cleaning | TNT Domestics" },
      { property: "og:description", content: "Rough, final and touch-up post-construction cleaning for new builds and renovations across Texas, California & Hawaii." },
    ],
  }),
  component: ConstructionPost,
});
