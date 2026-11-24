import { createFileRoute } from "@tanstack/react-router";
import ContentPage from "@/components/ContentPage";
import NeighborhoodList from "@/components/NeighborhoodList";
import StandardsList from "@/components/StandardsList";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/residential-4.jpg";

const faqs = [
  {
    "q": "Do you clean homes in Alamo Heights and Olmos Park?",
    "a": "Yes. Alamo Heights, Olmos Park, Terrell Hills and Monte Vista are core service areas for our San Antonio residential team."
  },
  {
    "q": "Can your team access gated communities like The Dominion?",
    "a": "Yes. We register crew members with your community's gate as required and follow your home's alarm and entry instructions."
  },
  {
    "q": "Do you service second homes in Boerne and the Hill Country?",
    "a": "Yes. We serve Fair Oaks Ranch and Cordillera Ranch, including recurring upkeep and preparation before you arrive."
  }
];

export const Route = createFileRoute("/service-areas/san-antonio")({
  staticData: { sitemap: true, sitemapLastmod: "2026-11-24" },
  head: () => ({
    ...pageHead("/service-areas/san-antonio/", "Luxury House Cleaning Alamo Heights, Olmos Park & The Dominion", "Estate housekeeping in Alamo Heights, Olmos Park, Terrell Hills, Monte Vista, The Dominion, Shavano Park and Cordillera Ranch. Background-checked, NDA-bound crews.", { faqs }),
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      ctaLabel="Schedule a Consultation"
      eyebrow="San Antonio, Texas"
      heroImage={hero}
      heroImageAlt="Formal living room in a San Antonio estate"
      h1="Luxury House Cleaning in Alamo Heights, Olmos Park & The Dominion"
      answer="TNT Domestics is a San Antonio company, and these are our home neighborhoods. We provide recurring estate housekeeping, deep cleaning and fine-finish care for historic homes inside Loop 410 and for gated estates on the northwest side and in the Hill Country with a written care plan and a direct point of contact."
      listEyebrow="Popular services here"
      listHeadline="Popular services here"
      items={[
  {
    "title": "Recurring estate housekeeping",
    "description": "Daily, weekly or bi-weekly programs under a signed service agreement."
  },
  {
    "title": "Renovation & new-build cleanup",
    "description": "Turnover cleaning after remodels and custom builds."
  },
  {
    "title": "Event prep & recovery",
    "description": "Before and after hosting at home."
  },
  {
    "title": "Move-in / move-out",
    "description": "Inspection-ready cleaning for buyers and sellers."
  }
]}
      faqs={faqs}
    >
      <NeighborhoodList eyebrow="Neighborhoods we serve" headline="Neighborhoods we serve" areas={[
  {
    "name": "Alamo Heights",
    "blurb": "Classic homes and new custom builds side by side. We handle both routine housekeeping and the cleanup after a remodel."
  },
  {
    "name": "Olmos Park",
    "blurb": "1920s and 1930s estates with original hardwoods, plaster and stone that need material-safe products and patient hand work."
  },
  {
    "name": "Terrell Hills",
    "blurb": "Large lots and traditional homes where weekly or bi-weekly housekeeping keeps every room guest-ready."
  },
  {
    "name": "Monte Vista",
    "blurb": "Historic-district homes with detailed millwork, transoms and period fixtures we clean without harsh chemicals."
  },
  {
    "name": "The Dominion",
    "blurb": "Guard-gated estates in northwest San Antonio. We coordinate gate access and work around household staff and schedules."
  },
  {
    "name": "Shavano Park & Hill Country Village",
    "blurb": "Acre-lot residences with large footprints, outdoor living areas and plenty of glass."
  },
  {
    "name": "Fair Oaks Ranch & Cordillera Ranch",
    "blurb": "Hill Country estates and second homes, including pre-arrival preparation when owners have been away."
  }
]} />
      <StandardsList items={["Background-checked, NDA-bound personnel", "Direct point of contact", "Gate and alarm protocols followed", "Material-safe products for stone, wood and brass"]} />
    </ContentPage>
  );
}
