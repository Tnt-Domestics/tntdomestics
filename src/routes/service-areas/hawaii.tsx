import { createFileRoute } from "@tanstack/react-router";
import ContentPage from "@/components/ContentPage";
import NeighborhoodList from "@/components/NeighborhoodList";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/residential-3.jpg";

export const Route = createFileRoute("/service-areas/hawaii")({
  head: () => pageHead("/service-areas/hawaii/", "Luxury Home & Vacation Estate Cleaning Hawaii | Kahala, Wailea", "Contracted luxury home and vacation-estate cleaning in Kahala, Diamond Head, Lanikai, Wailea, Kapalua, the Kohala Coast and Princeville, Hawaii."),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="Hawaii"
      heroImage={hero}
      heroImageAlt="Organized wardrobe in a Hawaii vacation estate"
      h1="Luxury Home & Vacation Estate Cleaning in Hawaii"
      answer="TNT Domestics, headquartered in San Antonio, provides contracted cleaning for luxury homes and vacation estates in Hawaii, on Oʻahu, Maui, the Big Island and Kauaʻi. Our programs keep island properties guest-ready between visits, with humidity- and salt-aware care."
      listEyebrow="Island Programs"
      listHeadline="Care for Island Homes"
      items={[
        { title: "Pre-arrival preparation", description: "Fresh linens, aired rooms and a spotless home when you land." },
        { title: "Departure closing", description: "Secure, clean shutdown between owner stays." },
        { title: "Humidity and mildew prevention", description: "Attention to closets, fabrics and teak in a tropical climate." },
        { title: "Lanai and outdoor living", description: "Salt and sand removal from furniture, glass and railings." },
        { title: "Guest and rental turnovers", description: "Fast, consistent resets between guests." },
        { title: "Property-manager reporting", description: "Photo notes and written logs after each visit." },
      ]}
      faqs={[
        { q: "Which Hawaiian islands do you serve?", a: "We serve luxury homes on Oʻahu, Maui, the Big Island and Kauaʻi. Call 830-500-5791 to confirm coverage for your address." },
        { q: "Can you care for our home while we are away?", a: "Yes. We offer scheduled check-in cleans that address humidity, dust and salt build-up between owner visits." },
        { q: "Do you handle vacation-rental turnovers?", a: "Yes. We provide guest turnovers and coordinate with your property manager on timing and supplies." },
      ]}
    >
      <NeighborhoodList
        headline="Hawaii Communities We Serve"
        areas={[
          { name: "Kahala & Diamond Head, Oʻahu", blurb: "Oceanfront and hillside estates near Honolulu that need steady, salt-aware upkeep." },
          { name: "Lanikai, Oʻahu", blurb: "Beachfront homes on the windward side where sand and humidity call for frequent care." },
          { name: "Wailea & Kapalua, Maui", blurb: "Resort-area vacation estates kept guest-ready between owner and family visits." },
          { name: "Kohala Coast, Big Island", blurb: "Expansive homes in resort communities, with lanai and outdoor living care." },
          { name: "Princeville, Kauaʻi", blurb: "North Shore properties where rainfall and humidity make mildew prevention a priority." },
        ]}
      />
    </ContentPage>
  );
}
