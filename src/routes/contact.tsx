import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import FaqSection from "@/components/FaqSection";
import { pageHead } from "@/lib/seo";
import { homeFaqs } from "@/content/faqs";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("/contact/", "Contact TNT Domestics | Cleaning Quote", "Call TNT Domestics at 830-500-5791 or request a cleaning quote online. San Antonio based, serving Texas, California and Hawaii. Replies within 24 business hours."),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-36">
        <div className="container-narrow mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contact TNT Domestics</h1>
          <p className="text-lg text-muted-foreground">
            Call TNT Domestics in San Antonio at 830-500-5791, email us or request a cleaning quote online. We respond to every inquiry within 24 business hours.
          </p>
        </div>
        <Contact />
        <FaqSection faqs={homeFaqs.slice(1)} className="bg-muted/30" />
      </main>
      <Footer />
    </div>
  );
}
