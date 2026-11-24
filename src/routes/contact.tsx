import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FaqSection from "@/components/FaqSection";
import { pageHead } from "@/lib/seo";
import { homeFaqs } from "@/content/faqs";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("/contact/", "Contact TNT Domestics | Cleaning Quote | 830-500-5791", "Request a cleaning quote from TNT Domestics in San Antonio, TX. Call 830-500-5791 or email. We respond within 24 business hours."),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-36">
        <div className="container-narrow mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Request a Cleaning Quote</h1>
          <p className="text-lg text-muted-foreground">
            Call 830-500-5791, email management@tntdomestics.com or submit the quote form. We respond to all inquiries within 24 business hours.
          </p>
        </div>
        <Contact />
        <FaqSection faqs={homeFaqs.slice(1)} className="bg-muted/30" />
      </main>
      <Footer />
    </div>
  );
}
