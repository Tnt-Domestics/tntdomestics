import { createFileRoute } from "@tanstack/react-router";
import Residential from "@/pages/Residential";

export const Route = createFileRoute("/residential")({
  head: () => ({
    meta: [
      { title: "Luxury Residential Cleaning | TNT Domestics" },
      { name: "description", content: "Discreet, detailed cleaning for estates, penthouses and luxury homes across Texas, California & Hawaii." },
      { property: "og:title", content: "Luxury Residential Cleaning | TNT Domestics" },
      { property: "og:description", content: "Discreet, detailed cleaning for estates, penthouses and luxury homes across Texas, California & Hawaii." },
    ],
  }),
  component: Residential,
});
