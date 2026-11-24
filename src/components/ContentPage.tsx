import type { ReactNode } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FaqSection, { type Faq } from '@/components/FaqSection';
import { QUOTE_URL } from '@/lib/seo';

export type ListItem = { title: string; description?: string };

type Props = {
  eyebrow: string;
  heroImage: string;
  heroImageAlt: string;
  h1: string;
  answer: ReactNode;
  listEyebrow?: string;
  listHeadline?: string;
  items?: ListItem[];
  children?: ReactNode;
  faqs: Faq[];
  ctaHeadline?: string;
  ctaBody?: string;
};

const ContentPage = ({
  eyebrow, heroImage, heroImageAlt, h1, answer, listEyebrow = 'Services', listHeadline, items = [], children, faqs,
  ctaHeadline = 'Request Your Free Quote',
  ctaBody = 'Tell us about your property and we respond within 24 business hours.',
}: Props) => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt={heroImageAlt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
        </div>
        <div className="container-wide mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary/20 backdrop-blur-xs border border-primary/30 rounded-full px-4 py-2 mb-6 text-sm font-medium text-primary-foreground">
              {eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-in-up">{h1}</h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-2xl">{answer}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group shadow-teal" asChild>
                <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer">
                  Request a Quote <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                <a href="tel:830-500-5791">Call 830-500-5791</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {items.length > 0 && (
      <section className="section-padding bg-muted/30">
        <div className="container-wide mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">{listEyebrow}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{listHeadline}</h2>
          </div>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it) => (
              <li key={it.title} className="bg-card border border-border/50 rounded-2xl p-6 shadow-soft hover-lift">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-foreground">{it.title}</h3>
                    {it.description && <p className="text-muted-foreground mt-1">{it.description}</p>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      )}

      {children}

      <FaqSection faqs={faqs} />

      <section className="section-padding bg-linear-to-br from-primary to-teal-700 text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{ctaHeadline}</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">{ctaBody}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer">Request a Quote</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <Link to="/contact/">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ContentPage;
