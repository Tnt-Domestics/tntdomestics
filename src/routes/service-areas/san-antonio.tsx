import { createFileRoute } from "@tanstack/react-router";
import ContentPage from "@/components/ContentPage";
import NeighborhoodList from "@/components/NeighborhoodList";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/residential-4.jpg";

export const Route = createFileRoute("/service-areas/san-antonio")({
  head: () => pageHead("/service-areas/san-antonio/", "Luxury House Cleaning Alamo Heights, Olmos Park & The Dominion", "Estate housekeeping in Alamo Heights, Olmos Park, Terrell Hills, Monte Vista, The Dominion, Shavano Park and Cordillera Ranch. Background-checked, NDA-bound crews."),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="San Antonio, Texas"
      heroImage={hero}
      heroImageAlt="Formal living room in a San Antonio estate"
      h1="Luxury House Cleaning in Alamo Heights, Olmos Park & The Dominion"
      answer="TNT Domestics provides luxury house cleaning and estate housekeeping in San Antonio, our home market, from the historic homes of Alamo Heights and Olmos Park to gated estates in The Dominion. Every residence gets a background-checked, NDA-bound crew and a signed service agreement."
      listEyebrow="San Antonio Services"
      listHeadline="Housekeeping for San Antonio Estates"
      items={[
        { title: "Recurring estate housekeeping", description: "Weekly or daily programs built around your household staff." },
        { title: "Historic-home detailing", description: "Care for original hardwoods, plaster, leaded glass and period millwork." },
        { title: "Limestone and Saltillo care", description: "Material-safe cleaning for the stone and tile common in Texas Hill Country homes." },
        { title: "Pre- and post-event cleaning", description: "Ready for Fiesta parties, holidays and private dinners." },
        { title: "Ranch and second-home openings", description: "Opening and closing service for Cordillera Ranch and Hill Country properties." },
        { title: "Move-in / move-out", description: "Inspection-ready cleans for buyers and sellers." },
      ]}
      faqs={[
        { q: "Do you clean historic homes in Monte Vista and Olmos Park?", a: "Yes. Our crews use pH-neutral, material-safe products on original wood floors, plaster and older fixtures, and document any special-care surfaces in your service agreement." },
        { q: "Can you work inside gated communities like The Dominion?", a: "Yes. We follow gate and HOA access procedures and keep the same crew on your home so security staff know who to expect." },
        { q: "Do you serve Boerne and the Hill Country?", a: "Yes. We serve Cordillera Ranch, Boerne and the greater San Antonio area, including New Braunfels, Schertz and Seguin." },
      ]}
    >
      <NeighborhoodList
        headline="San Antonio Neighborhoods We Serve"
        areas={[
          { name: "Alamo Heights", blurb: "Tree-lined streets and 1920s–1950s homes alongside new builds. We tailor routines to mixed old and new finishes." },
          { name: "Olmos Park", blurb: "Large Mediterranean and Tudor estates near Olmos Basin, often with staff quarters, guest houses and expansive formal rooms." },
          { name: "Terrell Hills", blurb: "Quiet, private residences where discretion and a consistent, familiar crew matter most." },
          { name: "Monte Vista", blurb: "One of the city's historic districts. We treat original woodwork, tile and glass with conservation-minded care." },
          { name: "The Dominion", blurb: "Gated estates with large footprints, pools and entertaining spaces, cleaned on a schedule set with your house manager." },
          { name: "Shavano Park & Cordillera Ranch", blurb: "Hill Country properties and second homes, including opening, closing and post-guest turnovers." },
        ]}
      />
    </ContentPage>
  );
}
