import { createFileRoute } from "@tanstack/react-router";
import ContentPage from "@/components/ContentPage";
import { pageHead } from "@/lib/seo";
import { aboutFaqs } from "@/content/faqs";
import hero from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true, sitemapLastmod: "2026-11-24" },
  head: () => pageHead("/about/", "About TNT Domestics | Certified Cleaning Company San Antonio", "TNT Domestics is a minority- and woman-owned, HUB certified cleaning company in San Antonio, TX, led by Project Manager Tara Sydnor.", { faqs: aboutFaqs }),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="About Us"
      heroImage={hero}
      heroImageAlt="Clean, bright professional interior"
      h1="About TNT Domestics"
      answer="TNT Domestics is a minority- and woman-owned cleaning company in San Antonio, Texas, built on one idea: exceptional service is never accidental — it is engineered. We clean offices, healthcare facilities, day care centers, construction projects, aircraft and private residences with trained people, proven processes and premium products."
      listEyebrow="Credentials"
      listHeadline="Certified and Registered"
      items={[
        { title: "MBE, WBE, SBE, HUB and AABE certified" },
        { title: "SAM registered", description: "UEI Z11EBUHZY3U5" },
        { title: "NAICS 561720 & 562119", description: "Janitorial Services; Other Waste Collection" },
        { title: "Background-checked, NDA-bound crews" },
        { title: "Based in San Antonio, TX", description: "Serving Texas, California and Hawaii" },
        { title: "Written service agreements", description: "Defined scope, cadence and reporting on every account" },
      ]}
      faqs={aboutFaqs}
    />
  );
}
