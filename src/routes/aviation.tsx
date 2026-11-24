import { createFileRoute } from "@tanstack/react-router";
import PrivateJet from "@/pages/PrivateJet";

export const Route = createFileRoute("/aviation")({
  head: () => ({
    meta: [
      { title: "Private Jet & Aviation Cleaning | TNT Domestics" },
      { name: "description", content: "Aircraft interior detailing, cabin sanitization, exterior wash and post-charter turnaround across Texas, California & Hawaii." },
      { property: "og:title", content: "Private Jet & Aviation Cleaning | TNT Domestics" },
      { property: "og:description", content: "Aircraft interior detailing, cabin sanitization, exterior wash and post-charter turnaround across Texas, California & Hawaii." },
    ],
  }),
  component: PrivateJet,
});
