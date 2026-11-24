import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import { pageHead } from "@/lib/seo";
import * as F from "@/content/faqs";

export const Route = createFileRoute("/faq")({
  head: () => pageHead("/faq/", "Cleaning Service FAQ | TNT Domestics San Antonio", "Answers about TNT Domestics' cleaning services, pricing, service areas, certifications, scheduling, insurance and payment options."),
  component: Page,
});

const groups = [
  { title: "General", faqs: F.homeFaqs },
  { title: "Commercial Cleaning", faqs: F.commercialFaqs },
  { title: "Government Contracts", faqs: F.governmentFaqs },
  { title: "Luxury Residential", faqs: F.residentialFaqs },
  { title: "Post-Construction", faqs: F.constructionFaqs },
  { title: "Move-In / Move-Out", faqs: F.moveFaqs },
  { title: "Aviation", faqs: F.aviationFaqs },
  { title: "Service Areas", faqs: F.serviceAreaFaqs },
  { title: "Booking", faqs: F.bookFaqs },
];

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-36">
        <div className="container-narrow mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Quick answers about TNT Domestics' commercial, government, residential, post-construction and aviation cleaning services in San Antonio, Texas and beyond.
          </p>
        </div>
        {groups.map((g, i) => (
          <FaqSection key={g.title} faqs={g.faqs} title={g.title} eyebrow="FAQ" className={i % 2 ? "bg-muted/30" : "bg-background"} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
