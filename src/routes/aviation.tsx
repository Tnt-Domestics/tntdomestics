import { createFileRoute } from "@tanstack/react-router";
import PrivateJet from "@/pages/PrivateJet";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/aviation")({
  head: () => pageHead("/aviation/", "Private Jet & Aircraft Cleaning San Antonio | TNT Domestics", "Private jet interior detailing, cabin sanitization and exterior wash for aircraft owners, charter operators and flight departments in San Antonio and Texas."),
  component: PrivateJet,
});
