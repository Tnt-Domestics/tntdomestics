import { createFileRoute } from "@tanstack/react-router";
import ContentPage from "@/components/ContentPage";
import { pageHead } from "@/lib/seo";
import { governmentFaqs } from "@/content/faqs";
import hero from "@/assets/commercial-2.jpg";

export const Route = createFileRoute("/government-cleaning")({
  head: () => pageHead("/government-cleaning/", "Government Facility Cleaning Contractor Texas | HUB, MBE, WBE", "HUB, MBE & WBE certified janitorial contractor for government facilities in Texas. SAM registered, UEI Z11EBUHZY3U5, NAICS 561720 & 562119."),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="Government Contracting"
      heroImage={hero}
      heroImageAlt="Uniformed cleaner in a public building lobby"
      h1="Government Facility Cleaning Contractor in Texas"
      answer="TNT Domestics is a HUB, MBE and WBE certified janitorial contractor based in San Antonio, cleaning government facilities across Texas. We are SAM registered (UEI Z11EBUHZY3U5) under NAICS 561720 and 562119, and perform as a prime or as a subcontractor."
      listHeadline="Janitorial Scopes for Public Facilities"
      items={[
        { title: "Recurring janitorial service", description: "Nightly and day-porter cleaning for offices, courthouses and administrative buildings." },
        { title: "Restroom and high-touch disinfection", description: "Documented sanitization of restrooms, lobbies and public counters." },
        { title: "Floor care", description: "Scheduled stripping, waxing, burnishing and carpet extraction." },
        { title: "Post-construction and renovation cleans", description: "Turnover-ready cleaning after capital projects and build-outs." },
        { title: "Waste and recycling support", description: "Trash removal and recycling program support under NAICS 562119." },
        { title: "Quality reporting", description: "Inspection logs and QA reports for contracting officers." },
      ]}
      faqs={governmentFaqs}
    />
  );
}
