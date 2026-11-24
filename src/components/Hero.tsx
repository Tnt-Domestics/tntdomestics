import { Link } from '@tanstack/react-router';
import { ArrowRight, Shield, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-lavender-500/10 rounded-full blur-3xl animate-float animation-delay-200" />

      <div className="container-wide mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-xs border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">Certified Government Contractor</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] md:leading-none mb-6 animate-fade-in-up">
            Luxury Home & Estate Cleaning Services
          </h1>

          {/* Subheadline */}
          <div className="mb-8">
          <p className="text-base md:text-lg text-primary-foreground/80 mb-4 max-w-2xl animate-fade-in-up animation-delay-100">
            TNT Domestics provides luxury house cleaning, estate care, and residential cleaning services in San Antonio, Alamo Heights, Olmos Park, The Dominion, Austin, and West Lake Hills.
          </p>
          <p className="text-base md:text-lg text-primary-foreground/80 mb-4 max-w-2xl animate-fade-in-up animation-delay-100">
            We specialize in caring for fine homes, estates, and premium surfaces through customized written care plans, background-checked, NDA-bound professionals, and products selected for marble, hardwood, natural stone, and brass. With a 5.0 Google rating, we deliver discreet, detail-oriented service for discerning homeowners and property managers.
          </p>
          <p className="text-base md:text-lg text-primary-foreground/80 mb-4 max-w-2xl animate-fade-in-up animation-delay-100">
            Our comprehensive services also include commercial, government, post-construction, and private aircraft cleaning. TNT Domestics serves clients throughout California and Hawaii with its full range of residential, commercial, government, post-construction, and specialty cleaning services.
          </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 mb-10 animate-fade-in-up animation-delay-200">
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm">MBE/WBE Certified</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Star className="w-5 h-5 text-accent" />
              <span className="text-sm">HUB Certified</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm">SAM Registered</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl text-primary font-semibold mb-8 animate-fade-in-up animation-delay-300">
            Discreet. Reliable. Impeccable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <Button size="lg" className="group shadow-teal" asChild>
              <Link to="/book/">
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;