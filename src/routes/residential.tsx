import { createFileRoute } from "@tanstack/react-router";
import Residential from "@/pages/Residential";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/residential")({
  head: () => pageHead("/residential/", "Luxury House Cleaning & Housekeeping San Antonio | TNT Domestics", "Discreet luxury house cleaning in San Antonio, TX: recurring housekeeping, deep cleaning and fine-finish care by background-checked, NDA-bound crews."),
  component: Residential,
});
