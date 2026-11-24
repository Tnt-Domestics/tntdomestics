import { createFileRoute } from "@tanstack/react-router";
import ContentPage from "@/components/ContentPage";
import NeighborhoodList from "@/components/NeighborhoodList";
import StandardsList from "@/components/StandardsList";
import { pageHead, faqJsonLd } from "@/lib/seo";
import hero from "@/assets/residential-1.jpg";

const faqs = [
  {
    "q": "Do you provide house cleaning in West Lake Hills?",
    "a": "Yes. West Lake Hills and Rollingwood are core Austin service areas for our residential team."
  },
  {
    "q": "Do you clean lake houses on Lake Travis?",
    "a": "Yes. We serve Lakeway and Spanish Oaks, including preparing the home before you arrive and closing it up after you leave."
  },
  {
    "q": "Is TNT Domestics based in Austin?",
    "a": "We are based in San Antonio and schedule recurring Austin routes for our residential clients there."
  }
];

export const Route = createFileRoute("/service-areas/austin")({
  head: () => ({
    ...pageHead("/service-areas/austin/", "Luxury House Cleaning West Lake Hills, Tarrytown & Barton Creek", "Estate housekeeping in West Lake Hills, Rollingwood, Tarrytown, Old Enfield, Pemberton Heights, Barton Creek, Lakeway and Spanish Oaks, Austin TX."),
    scripts: [faqJsonLd(faqs)],
  }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="Austin, Texas"
      heroImage={hero}
      heroImageAlt="Modern luxury kitchen in an Austin home"
      h1="Luxury House Cleaning in West Lake Hills, Tarrytown & Barton Creek"
      answer="TNT Domestics provides discreet estate housekeeping for Austin's west side and central neighborhoods, from hillside contemporaries in West Lake Hills to historic homes in Old Enfield and lake houses on Lake Travis. Every home gets a written scope and a direct point of contact."
      listEyebrow="Popular services here"
      listHeadline="Popular services here"
      items={[
  {
    "title": "Recurring estate housekeeping",
    "description": "Weekly or bi-weekly programs under a signed agreement."
  },
  {
    "title": "Window & glass detailing",
    "description": "Interior glass, mirrors and fixtures left streak-free."
  },
  {
    "title": "New-build & remodel cleanup",
    "description": "Final cleans for custom builders and homeowners."
  },
  {
    "title": "Lake & second-home care",
    "description": "Pre-arrival preparation and post-visit close-out."
  }
]}
      faqs={faqs}
    >
      <NeighborhoodList eyebrow="Neighborhoods we serve" headline="Neighborhoods we serve" areas={[
  {
    "name": "West Lake Hills & Rollingwood",
    "blurb": "Hillside modern homes with walls of glass, stone floors and open plans, so streak-free glass work is a big part of every visit."
  },
  {
    "name": "Tarrytown",
    "blurb": "A mix of original cottages and large rebuilds near Lake Austin, many with fresh renovation dust to manage."
  },
  {
    "name": "Old Enfield & Pemberton Heights",
    "blurb": "Historic central-Austin homes with original woodwork that calls for gentle, material-specific care."
  },
  {
    "name": "Barton Creek",
    "blurb": "Golf-community estates where we work around gate access, staff and family schedules."
  },
  {
    "name": "Lakeway & Spanish Oaks",
    "blurb": "Lake Travis and Hill Country estates, including lake houses that need upkeep between visits."
  }
]} />
      <StandardsList items={["Background-checked, NDA-bound personnel", "Direct point of contact", "Low-VOC and fragrance-free options", "Written scope and service logs"]} />
    </ContentPage>
  );
}
