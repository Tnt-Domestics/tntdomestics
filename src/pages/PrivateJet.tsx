import { ArrowRight, Plane, Sparkles, Shield, Clock, Award, CheckCircle2, Gem, Eye, Wind, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import jetHero from '@/assets/jet-hero.jpg';
import jetAfter1 from '@/assets/jet-after-1.jpg';
import jetAfter2 from '@/assets/jet-after-2.jpg';
import jetGalley from '@/assets/jet-galley.jpg';
import jetExteriorFull from '@/assets/jet-exterior-full.jpg';

const QUOTE_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSemUJYe9Q7JpF1QUXErmiZZlWcX05tLbqDhauOG6T1iGSfqBA/viewform';

const PrivateJet = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Interior Detailing',
      description: 'Complete cabin refresh—leather conditioning, wood polishing, carpet extraction, and headliner care.',
    },
    {
      icon: Wind,
      title: 'Cabin Sanitization',
      description: 'Hospital-grade disinfection of all high-touch surfaces, galleys, and lavatories between flights.',
    },
    {
      icon: Eye,
      title: 'Window & Glass Care',
      description: 'Streak-free polishing of windows, mirrors, and cockpit glass using aviation-safe products.',
    },
    {
      icon: Gem,
      title: 'Exterior Wash & Polish',
      description: 'Fuselage detailing, brightwork polishing, and paint protection to preserve aircraft value.',
    },
    {
      icon: Shield,
      title: 'Post-Charter Turnaround',
      description: 'Rapid, meticulous turnovers between charters—ready for the next principal on schedule.',
    },
    {
      icon: Award,
      title: 'Pre-Delivery Preparation',
      description: 'White-glove preparation for aircraft handovers, inspections, and VIP debuts.',
    },
  ];

  const standards = [
    'Aviation-approved cleaning agents only',
    'FOD-conscious procedures on every service',
    'Background-checked, NDA-bound personnel',
    'Discreet on-tarmac and hangar operations',
    'Flexible overnight and pre-flight scheduling',
    'Detailed service logs for each aircraft',
  ];


  const reviews = [
    {
      name: 'Marcus Delaney',
      role: 'Charter Operations Director',
      rating: 5,
      quote:
        'TNT turned around three aircraft between charters without missing a beat. The cabins looked showroom-new and my principals noticed immediately.',
    },
    {
      name: 'Elena Vasquez',
      role: 'Private Aircraft Owner',
      rating: 5,
      quote:
        'Discreet, professional, and meticulous. They treat my jet like it belongs to them. I will never use another cleaning team.',
    },
    {
      name: 'Captain James Reid',
      role: 'Corporate Flight Department',
      rating: 5,
      quote:
        'FOD-conscious, aviation-approved products, and on-time every single turn. TNT is the gold standard for aircraft cleaning.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={jetHero} alt="Luxury private jet interior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
          </div>

          <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />

          <div className="container-wide mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
                <Plane className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary-foreground">Aviation Cleaning Division</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
                Private Jet Cleaning{' '}
                <span className="text-primary">Worthy of the Cabin</span>
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-up animation-delay-100">
                Meticulous interior and exterior aircraft care for owners, operators, and charter fleets.
                Discretion, precision, and turnaround times built for aviation.
              </p>

              <p className="text-xl text-primary font-semibold mb-8 animate-fade-in-up animation-delay-300">
                Hangar-ready. Flight-ready. Principal-ready.
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
              Aviation-Grade Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Cleaning Programs Designed for{' '}
              <span className="text-primary">High-Value Aircraft</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              TNT Domestics brings the same discipline that protects government facilities and luxury
              residences into the hangar. Our aviation teams operate with a FOD-first mindset, use only
              approved products, and treat every aircraft as a client-facing asset—because it is.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Aircraft Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Complete Care, Nose to Tail
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
                  Operating Standards
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Discretion, Compliance, and{' '}
                  <span className="text-primary">Turnaround Precision</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Every aircraft engagement is executed under a documented protocol—so pilots,
                  operators, and owners get consistent results on the ground and in the air.
                </p>
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
                  <p className="text-4xl font-bold mb-2">24/7</p>
                  <p className="text-xl font-semibold mb-4">On-Call Availability</p>
                  <p className="text-primary-foreground/80">
                    Aviation doesn't stop for business hours. Neither do we. Reach us for
                    unscheduled turnovers, AOG cleaning support, and last-minute charter prep.
                  </p>
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
                See the{' '}
                <span className="text-primary">TNT Difference</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Real results from real aircraft. Every service delivers a visible transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
                <img
                  src={jetAfter1}
                  alt="Refreshed private jet cabin interior"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-foreground/80 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                  Cabin Interior Refresh
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
                <img
                  src={jetAfter2}
                  alt="Polished private jet exterior"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-foreground/80 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                  Exterior Wash & Polish
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
                <img
                  src={jetGalley}
                  alt="Sanitized private jet galley"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-foreground/80 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                  Galley & Lavatory Sanitization
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
                <img
                  src={jetExteriorFull}
                  alt="Detailed private jet fuselage on tarmac"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-foreground/80 backdrop-blur-sm text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                  Full Fuselage Detail
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="section-padding bg-background">
          <div className="container-wide mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Client Reviews
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Trusted by Owners, Operators &{' '}
                <span className="text-primary">Flight Crews</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, i) => (
                <Card
                  key={i}
                  className="bg-card border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 hover-lift"
                >
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 leading-relaxed">"{review.quote}"</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-primary to-teal-700 text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-lavender-500/20 rounded-full blur-3xl" />
          <div className="container-narrow mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Give Your Aircraft the Care It Deserves
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Speak with our aviation team about a service program tailored to your fleet, hangar,
              or single aircraft.
            </p>
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

export default PrivateJet;
