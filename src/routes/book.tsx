import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, CalendarCheck, Sparkles, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import BookingForm from "@/components/BookingForm";
import { pageHead } from "@/lib/seo";
import { bookFaqs } from "@/content/faqs";

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>): { service?: string } =>
    typeof search["service"] === "string" ? { service: search["service"] } : {},
  head: () => pageHead("/book/", "Schedule a Private Consultation | TNT Domestics", "Schedule a private consultation for luxury home cleaning in San Antonio, Austin, California and Hawaii, or request a quote for commercial, government or aircraft cleaning."),
  component: Page,
});

const STEPS = [
  { icon: Phone, title: "We reach out", body: "A coordinator contacts you within one business day by your preferred method." },
  { icon: CalendarCheck, title: "Your consultation", body: "We discuss your home or facility, priorities and schedule." },
  { icon: ClipboardCheck, title: "Your written care plan", body: "You receive a tailored care plan and quote before anything is scheduled." },
  { icon: Sparkles, title: "We begin", body: "Background-checked, NDA-bound professionals follow your care plan on every visit." },
];

function Page() {
  const { service } = Route.useSearch();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-36 pb-12 bg-gradient-to-br from-teal-700 to-primary text-primary-foreground">
          <div className="container-wide mx-auto px-6">
            <span className="inline-block bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6 text-sm font-medium">Private Consultations &amp; Quotes</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">Schedule a Private Consultation</h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl">Tell us about your home or facility and when you'd like to begin. A TNT Domestics coordinator will contact you within one business day to discuss your needs and prepare your written care plan and quote. Commercial, government and aviation clients receive a scoped proposal.</p>
          </div>
        </section>
        <section className="section-padding">
          <div className="container-wide mx-auto px-6 grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 items-start">
            <BookingForm initialService={service} />
            <aside className="glass-card rounded-2xl p-6 lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-foreground mb-5">What happens next</h2>
              <ol className="list-none m-0 p-0 space-y-5">
                {STEPS.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"><s.icon className="w-5 h-5" /></div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground">{i + 1}. {s.title}</p>
                      <p className="text-sm text-muted-foreground">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-muted-foreground">Prefer to talk? Call <a href="tel:830-500-5791" className="text-primary font-medium">830-500-5791</a>.</p>
            </aside>
          </div>
        </section>
        <FaqSection faqs={bookFaqs} />
      </main>
      <Footer />
    </div>
  );
}
