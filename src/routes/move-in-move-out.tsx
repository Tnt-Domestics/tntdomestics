import { createFileRoute } from "@tanstack/react-router";
import ContentPage from "@/components/ContentPage";
import { pageHead } from "@/lib/seo";
import { moveFaqs } from "@/content/faqs";
import hero from "@/assets/residential-1.jpg";

export const Route = createFileRoute("/move-in-move-out")({
  head: () => pageHead("/move-in-move-out/", "Move-In & Move-Out Cleaning San Antonio | TNT Domestics", "Move-in and move-out cleaning in San Antonio, TX for homeowners, renters, landlords and property managers. Deep, inspection-ready cleaning. Request a quote."),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="Move-In / Move-Out"
      heroImage={hero}
      heroImageAlt="Spotless empty kitchen ready for move-in"
      h1="Move-In & Move-Out Cleaning in San Antonio"
      answer="TNT Domestics provides deep, inspection-ready move-in and move-out cleaning in San Antonio for homeowners, renters, landlords and property managers. We clean inside cabinets and appliances, bathrooms, floors, baseboards and fixtures so the property is ready for a walk-through, a listing or new occupants."
      listHeadline="What a Move Clean Covers"
      items={[
        { title: "Inside cabinets and drawers" },
        { title: "Inside oven and refrigerator" },
        { title: "Baseboards, doors and trim" },
        { title: "Vents, fans and light fixtures" },
        { title: "Closets and shelving" },
        { title: "Bathrooms and floors, top to bottom" },
      ]}
      faqs={moveFaqs}
    />
  );
}
