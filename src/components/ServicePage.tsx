import { ArrowRight, CheckCircle2, Clock, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const QUOTE_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSemUJYe9Q7JpF1QUXErmiZZlWcX05tLbqDhauOG6T1iGSfqBA/viewform?usp=publish-editor';

export type ServiceItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  label: string;
};

type Props = {
  eyebrow: string;
  badgeIcon: LucideIcon;
  heroImage: string;
  heroImageAlt: string;
  title: string;
  titleAccent: string;
  tagline: string;
  intro: string;
  introEyebrow: string;
  introHeadline: string;
  introHeadlineAccent: string;
  services: ServiceItem[];
  servicesEyebrow: string;
  servicesHeadline: string;
  standards: string[];
  standardsEyebrow: string;
  standardsHeadline: string;
  standardsHeadlineAccent: string;
  standardsBlurb: string;
  highlightTitle: string;
  highlightValue: string;
  highlightBody: string;
  gallery: GalleryItem[];
  ctaHeadline: string;
  ctaBody: string;
};

const ServicePage = ({
  eyebrow,
  badgeIcon: BadgeIcon,
  heroImage,
  heroImageAlt,
  title,
  titleAccent,
  tagline,
  intro,
  introEyebrow,
  introHeadline,
  introHeadlineAccent,
  services,
  servicesEyebrow,
  servicesHeadline,
  standards,
  standardsEyebrow,
  standardsHeadline,
  standardsHeadlineAccent,
  standardsBlurb,
  highlightTitle,
  highlightValue,
  highlightBody,
  gallery,
  ctaHeadline,
  ctaBody,
}: Props) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt={heroImageAlt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
          </div>

          <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />

          <div className="container-wide mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
                <BadgeIcon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary-foreground">{eyebrow}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
                {title} <span className="text-primary">{titleAccent}</span>
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-up animation-delay-100">
                {tagline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                <Button size="lg" className="group shadow-teal" asChild>
                  <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer">
                    Request a Quote
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  asChild
                >
                  <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer">
                    Schedule a Private Consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>

        {/* Intro */}
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              {introEyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {introHeadline} <span className="text-primary">{introHeadlineAccent}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{intro}</p>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                {servicesEyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {servicesHeadline}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <Card
                  key={i}
                  className="group bg-card border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 hover-lift"
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Standards */}
        <section className="section-padding bg-background">
          <div className="container-wide mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                  {standardsEyebrow}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {standardsHeadline} <span className="text-primary">{standardsHeadlineAccent}</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">{standardsBlurb}</p>
                <div className="space-y-3">
                  {standards.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 bg-gradient-to-br from-primary to-teal-700 rounded-2xl p-8 text-primary-foreground">
                  <Clock className="w-10 h-10 mb-4" />
                  <p className="text-4xl font-bold mb-2">{highlightValue}</p>
                  <p className="text-xl font-semibold mb-4">{highlightTitle}</p>
                  <p className="text-primary-foreground/80">{highlightBody}</p>
                </div>
                <div className="absolute -top-4 -right-4 w-full h-full bg-lavender-200/50 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Our Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                See the <span className="text-primary">TNT Difference</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {gallery.map((item, i) => (
                <div key={i} className="relative rounded-2xl overflow-hidden shadow-elevated group">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 bg-foreground/80 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-primary to-teal-700 text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lavender-500/20 rounded-full blur-3xl" />
          <div className="container-narrow mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{ctaHeadline}</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">{ctaBody}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group" asChild>
                <a href={QUOTE_URL} target="_blank" rel="noopener noreferrer">
                  Request a Quote
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
