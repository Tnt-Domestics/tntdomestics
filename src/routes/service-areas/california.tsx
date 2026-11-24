import { createFileRoute } from "@tanstack/react-router";
import ContentPage from "@/components/ContentPage";
import NeighborhoodList from "@/components/NeighborhoodList";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/residential-2.jpg";

export const Route = createFileRoute("/service-areas/california")({
  head: () => pageHead("/service-areas/california/", "Estate Housekeeping Atherton, Beverly Hills, Newport & La Jolla", "Contracted luxury estate cleaning in Atherton, Hillsborough, Woodside, Beverly Hills, Bel Air, Malibu, Newport Beach, Rancho Santa Fe and La Jolla, California."),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="California"
      heroImage={hero}
      heroImageAlt="Spa-like primary bathroom in a California estate"
      h1="Luxury Estate Cleaning in California"
      answer="TNT Domestics, a San Antonio-based estate cleaning company, runs contracted housekeeping programs for luxury properties in California, from the Peninsula estates of Atherton and Woodside to coastal homes in Malibu, Newport Beach and La Jolla. Each program is set up under a written agreement with a dedicated crew."
      listEyebrow="California Programs"
      listHeadline="Contracted Estate Housekeeping"
      items={[
        { title: "Full-estate programs", description: "Main house, guest houses, pool houses and staff quarters." },
        { title: "Coastal-home care", description: "Salt-air film removal on glass, metals and outdoor living areas." },
        { title: "Collection-safe detailing", description: "Careful dusting around art, wine rooms and display pieces." },
        { title: "Low-VOC products", description: "Non-toxic options for families and sensitive environments." },
        { title: "Seasonal-residence service", description: "Opening, closing and pre-arrival preparation." },
        { title: "Household-manager coordination", description: "One point of contact and written service logs." },
      ]}
      faqs={[
        { q: "Is TNT Domestics active in California?", a: "Yes. We run contracted estate programs in the Bay Area Peninsula, Los Angeles, Orange County and San Diego County." },
        { q: "Do you work with estate and household managers?", a: "Yes. Most California programs are coordinated through a house manager or family office, with written logs after each visit." },
        { q: "Can you prepare a seasonal home before we arrive?", a: "Yes. We offer pre-arrival cleans, linen preparation and closing service when you leave." },
      ]}
    >
      <NeighborhoodList
        headline="California Communities We Serve"
        areas={[
          { name: "Atherton, Hillsborough & Woodside", blurb: "Large Peninsula estates on wooded lots, often with multiple structures and household staff." },
          { name: "Beverly Hills & Bel Air", blurb: "Architectural landmark homes where discretion, NDAs and finish-specific care come first." },
          { name: "Malibu", blurb: "Oceanfront homes where salt air demands frequent glass, metal and deck care." },
          { name: "Newport Beach", blurb: "Harbor and bluff-top residences, including second homes needing turnover service." },
          { name: "Rancho Santa Fe & La Jolla", blurb: "Spanish Revival estates and coastal homes across San Diego County." },
        ]}
      />
    </ContentPage>
  );
}
