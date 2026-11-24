import { createFileRoute } from "@tanstack/react-router";
import ContentPage from "@/components/ContentPage";
import NeighborhoodList from "@/components/NeighborhoodList";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/residential-1.jpg";

export const Route = createFileRoute("/service-areas/austin")({
  head: () => pageHead("/service-areas/austin/", "Luxury House Cleaning West Lake Hills, Tarrytown & Barton Creek", "Estate housekeeping in West Lake Hills, Rollingwood, Tarrytown, Old Enfield, Pemberton Heights, Barton Creek, Lakeway and Spanish Oaks, Austin TX."),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="Austin, Texas"
      heroImage={hero}
      heroImageAlt="Modern luxury kitchen in an Austin home"
      h1="Luxury House Cleaning in West Lake Hills, Tarrytown & Barton Creek"
      answer="TNT Domestics brings the estate housekeeping we built in San Antonio to Austin's finest neighborhoods, from contemporary hillside homes in West Lake Hills to classic Tarrytown residences. Crews are background-checked, NDA-bound and assigned to your home for continuity."
      listEyebrow="Austin Services"
      listHeadline="Housekeeping for Austin Homes"
      items={[
        { title: "Modern-finish care", description: "Streak-free glass walls, polished concrete, quartz and matte fixtures." },
        { title: "Recurring housekeeping", description: "Programs scheduled around busy professional and family calendars." },
        { title: "Lake-house turnovers", description: "Guest-ready cleaning for Lakeway and Lake Travis properties." },
        { title: "Allergen-conscious cleaning", description: "HEPA vacuuming and fragrance-free products for cedar season." },
        { title: "Post-renovation cleans", description: "Dust removal after remodels in older central-Austin homes." },
        { title: "Event preparation", description: "Pre-party polish and next-morning recovery." },
      ]}
      faqs={[
        { q: "Do you clean homes with large glass walls in West Lake Hills?", a: "Yes. We use streak-free methods and safe access equipment for floor-to-ceiling glass, and note any exterior glass scope in your agreement." },
        { q: "Can you help with cedar-season allergens?", a: "Yes. We offer HEPA vacuuming, high-dust removal and fragrance-free products for allergy-sensitive households." },
        { q: "Do you service lake homes in Lakeway and Spanish Oaks?", a: "Yes. We provide recurring cleaning and guest turnovers for lake and second homes around Lake Travis." },
      ]}
    >
      <NeighborhoodList
        headline="Austin Neighborhoods We Serve"
        areas={[
          { name: "West Lake Hills & Rollingwood", blurb: "Contemporary hillside homes with glass, stone and expansive views; we focus on finish-safe products and spotless glass." },
          { name: "Tarrytown & Old Enfield", blurb: "Established central-Austin homes mixing original character with modern renovations." },
          { name: "Pemberton Heights", blurb: "Historic estates near the Lake Austin corridor that call for careful, consistent detailing." },
          { name: "Barton Creek", blurb: "Gated golf-course estates with large entertaining areas, cleaned on a schedule set with your household." },
          { name: "Lakeway & Spanish Oaks", blurb: "Lake and Hill Country homes, including second homes that need opening, closing and guest turnovers." },
        ]}
      />
    </ContentPage>
  );
}
