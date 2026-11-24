import { aviationFaqs } from "@/content/faqs";
import { createFileRoute } from "@tanstack/react-router";
import PrivateJet from "@/pages/PrivateJet";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/private-jet-cleaning")({
  staticData: { sitemap: false },
  head: () => ({
    ...pageHead("/private-jet-cleaning/", "Private Jet & Aviation Cleaning | TNT Domestics", "Aircraft interior detailing, cabin sanitization, exterior wash and post-charter turnaround across Texas, California & Hawaii.", { faqs: aviationFaqs, service: "Private Jet & Aircraft Cleaning" }),
    links: [{ rel: "canonical", href: "https://tntdomestics.com/aviation/" }],
  }),
  component: PrivateJet,
});
