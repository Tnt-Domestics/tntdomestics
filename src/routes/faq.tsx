import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import { pageHead } from "@/lib/seo";
import * as F from "@/content/faqs";

export const Route = createFileRoute("/faq")({
  head: () => pageHead("/faq/", "Luxury & Commercial Cleaning FAQs | TNT Domestics", "Answers about estate care, house cleaning costs, janitorial services, government, construction and aircraft cleaning in Texas, California and Hawaii."),
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
            Answers about luxury house cleaning, estate care, commercial janitorial services, government facilities, post-construction cleanup and aviation cleaning in San Antonio, Austin, California and Hawaii.
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
