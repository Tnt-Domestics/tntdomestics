import { createFileRoute } from "@tanstack/react-router";
import ContentPage from "@/components/ContentPage";
import NeighborhoodList from "@/components/NeighborhoodList";
import StandardsList from "@/components/StandardsList";
import { pageHead, faqJsonLd } from "@/lib/seo";
import hero from "@/assets/residential-2.jpg";

const faqs = [
  {
    "q": "Do you clean homes in Atherton and Beverly Hills?",
    "a": "Yes. We offer contracted estate programs in the Peninsula (Atherton, Hillsborough, Woodside, Los Altos Hills) and on LA's Westside (Beverly Hills, Bel Air, Brentwood)."
  },
  {
    "q": "Do you clean homes rebuilt after the Palisades and Malibu fires?",
    "a": "Yes. We provide post-construction and move-in cleaning for rebuilt homes so they're ready to occupy."
  },
  {
    "q": "How do California programs start?",
    "a": "Call 830-500-5791 or book online. We scope the residence, agree a written service plan and assign a direct point of contact."
  }
];

export const Route = createFileRoute("/service-areas/california")({
  head: () => ({
    ...pageHead("/service-areas/california/", "Estate Housekeeping Atherton, Beverly Hills, Newport & La Jolla", "Contracted luxury estate cleaning in Atherton, Hillsborough, Woodside, Beverly Hills, Bel Air, Malibu, Newport Beach, Rancho Santa Fe and La Jolla, California."),
    scripts: [faqJsonLd(faqs)],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      ctaLabel="Schedule a Consultation"
      eyebrow="California"
      heroImage={hero}
      heroImageAlt="Spa-like primary bathroom in a California estate"
      h1="Luxury Estate Cleaning in California"
      answer="TNT Domestics runs contracted estate programs for private residences in California's most exclusive communities: the Peninsula, Los Angeles' Westside, the Orange County coast and coastal San Diego. Programs are scoped in a written agreement with a direct point of contact and documented protocols."
      listEyebrow="Programs"
      listHeadline="Programs"
      items={[
  {
    "title": "Estate housekeeping",
    "description": "Recurring service under a signed agreement."
  },
  {
    "title": "Rebuild & new-construction cleaning",
    "description": "Rough, final and touch-up cleans before move-in."
  },
  {
    "title": "Seasonal and second-home care",
    "description": "Opening, closing and pre-arrival preparation."
  }
]}
      faqs={faqs}
    >
      <NeighborhoodList eyebrow="Communities we serve" headline="Communities we serve" areas={[
  {
    "name": "Atherton, Hillsborough, Woodside & Los Altos Hills",
    "blurb": "Large Peninsula estates where our crews work alongside house managers and existing household staff."
  },
  {
    "name": "Beverly Hills, Bel Air & Brentwood",
    "blurb": "High-profile residences where discretion, NDAs and consistent personnel come first."
  },
  {
    "name": "Malibu & Pacific Palisades",
    "blurb": "Oceanfront homes and residences being rebuilt after the 2025 wildfires, with post-construction and move-in cleaning before occupancy."
  },
  {
    "name": "Newport Beach, Corona del Mar & Laguna Beach",
    "blurb": "Coastal homes where salt air means regular glass, metal and outdoor-living care."
  },
  {
    "name": "Rancho Santa Fe, La Jolla & Del Mar",
    "blurb": "Estates and ocean-view homes in coastal San Diego County."
  }
]} />
      <StandardsList items={["Background-checked, NDA-bound personnel", "Coordination with house managers and staff", "Material-safe products for stone, wood and metals", "Written scope and service logs"]} />
    </ContentPage>
  );
}
