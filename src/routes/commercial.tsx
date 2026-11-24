import { createFileRoute } from "@tanstack/react-router";
import Commercial from "@/pages/Commercial";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Government & Commercial Cleaning | TNT Domestics" },
      { name: "description", content: "Compliance-ready janitorial and sanitizing services for government facilities and commercial environments. MBE/WBE/HUB certified." },
      { property: "og:title", content: "Government & Commercial Cleaning | TNT Domestics" },
      { property: "og:description", content: "Compliance-ready janitorial and sanitizing services for government facilities and commercial environments. MBE/WBE/HUB certified." },
    ],
  }),
  component: Commercial,
});
