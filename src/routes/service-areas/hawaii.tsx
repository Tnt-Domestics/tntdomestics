import { createFileRoute } from "@tanstack/react-router";
import ContentPage from "@/components/ContentPage";
import NeighborhoodList from "@/components/NeighborhoodList";
import StandardsList from "@/components/StandardsList";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/residential-3.jpg";

const faqs = [
  {
    "q": "Do you clean vacation homes in Wailea and Kapalua?",
    "a": "Yes. We offer contracted programs for Maui vacation estates, including preparation before arrival and close-out after departure."
  },
  {
    "q": "Can you look after my Hawaii home while I'm on the mainland?",
    "a": "Yes. Recurring visits keep the home clean and ready, and we can send a photo report after each visit."
  },
  {
    "q": "How do Hawaii programs start?",
    "a": "Call 830-500-5791 or book online to scope your residence and agree a written service plan."
  }
];

export const Route = createFileRoute("/service-areas/hawaii")({
  staticData: { sitemap: true, sitemapLastmod: "2026-11-24" },
  head: () => ({
    ...pageHead("/service-areas/hawaii/", "Luxury Home & Vacation Estate Cleaning Hawaii | Kahala, Wailea", "Contracted luxury home and vacation-estate cleaning in Kahala, Diamond Head, Lanikai, Wailea, Kapalua, the Kohala Coast and Princeville, Hawaii.", { faqs }),
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      ctaLabel="Schedule a Consultation"
      eyebrow="Hawaii"
      heroImage={hero}
      heroImageAlt="Organized wardrobe in a Hawaii vacation estate"
      h1="Luxury Home & Vacation Estate Cleaning in Hawaii"
      answer="TNT Domestics provides contracted cleaning for oceanfront residences and vacation estates on Oahu, Maui, Hawaii Island and Kauai. Programs cover recurring housekeeping, preparation before owners or guests arrive, close-out after departure, and the salt-air and humidity care island homes need."
      listEyebrow="Programs"
      listHeadline="Programs"
      items={[
  {
    "title": "Recurring housekeeping",
    "description": "Ongoing care under a signed agreement."
  },
  {
    "title": "Pre-arrival & departure service",
    "description": "Fresh linens, stocked essentials and a spotless home before you land; a full close-out when you leave."
  },
  {
    "title": "Salt-air & humidity care",
    "description": "Glass, fixtures, outdoor furniture and mildew prevention."
  }
]}
      faqs={faqs}
    >
      <NeighborhoodList eyebrow="Communities we serve" headline="Communities we serve" areas={[
  {
    "name": "Kahala, Diamond Head & Portlock (Oahu)",
    "blurb": "Oceanfront Honolulu estates where salt spray and humidity call for regular glass, metal and mildew-prevention care."
  },
  {
    "name": "Lanikai & Kailua (Oahu)",
    "blurb": "Windward beach homes, including upkeep while owners are away."
  },
  {
    "name": "Wailea & Kapalua (Maui)",
    "blurb": "Resort-area residences and vacation estates, prepared before arrival and closed out after."
  },
  {
    "name": "Kohala Coast (Hawaii Island)",
    "blurb": "Residences in resort communities like Hualālai and Mauna Kea, with turnovers built around owner and guest stays."
  },
  {
    "name": "Princeville (Kauai)",
    "blurb": "North Shore homes needing consistent care between visits."
  }
]} />
      <StandardsList items={["Background-checked, NDA-bound personnel", "Flexible scheduling around arrivals and departures", "Photo report after each visit on request", "Written scope and service logs"]} />
    </ContentPage>
  );
}
