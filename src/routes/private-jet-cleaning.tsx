import { createFileRoute } from "@tanstack/react-router";
import PrivateJet from "@/pages/PrivateJet";

export const Route = createFileRoute("/private-jet-cleaning")({
  head: () => ({
    meta: [
      { title: "Private Jet & Aviation Cleaning | TNT Domestics" },
      { name: "description", content: "Aircraft interior detailing, cabin sanitization, exterior wash and post-charter turnaround across Texas, California & Hawaii." },
    ],
    links: [{ rel: "canonical", href: "https://tntdomestics.com/aviation" }],
  }),
  component: PrivateJet,
});
