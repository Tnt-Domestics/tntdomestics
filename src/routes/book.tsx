import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, CalendarCheck, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import BookingForm from "@/components/BookingForm";
import { pageHead } from "@/lib/seo";
import { bookFaqs } from "@/content/faqs";

export const Route = createFileRoute("/book")({
  validateSearch: (search: Record<string, unknown>): { service?: string } =>
    typeof search["service"] === "string" ? { service: search["service"] } : {},
  head: () => pageHead("/book/", "Request a Cleaning Quote | TNT Domestics | TX, CA & HI", "Request a quote for residential, estate, commercial, government, post-construction, move-out or aircraft cleaning with TNT Domestics across Texas, California and Hawaii."),
  component: Page,
});

const STEPS = [
  { icon: ClipboardCheck, title: "We review", body: "A coordinator reviews your property, service and preferred timing." },
  { icon: CalendarCheck, title: "We confirm date and price", body: "We contact you to confirm your date, time window and written quote." },
  { icon: Sparkles, title: "We clean", body: "Background-checked, NDA-bound professionals arrive and follow your care plan." },
];

function Page() {
  const { service } = Route.useSearch();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-36 pb-12 bg-gradient-to-br from-teal-700 to-primary text-primary-foreground">
          <div className="container-wide mx-auto px-6">
            <span className="inline-block bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6 text-sm font-medium">Book a Cleaning</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">Request a Cleaning Quote</h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl">Book commercial, residential, post-construction, move-out or aircraft cleaning with TNT Domestics in San Antonio, Austin and across Texas, California and Hawaii. Send your preferred date and a coordinator confirms your time window and written quote.</p>
          </div>
        </section>
        <section className="section-padding">
          <div className="container-wide mx-auto px-6 grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 items-start">
            <BookingForm initialService={service} />
            <aside className="glass-card rounded-2xl p-6 lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-foreground mb-5">What happens next</h2>
              <ol className="space-y-5">
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
