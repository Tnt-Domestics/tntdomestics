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
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">Certified Government Contractor</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Where Precision, Trust, and Excellence{' '}
            <span className="text-primary">Define Every Clean</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-up animation-delay-100">
            TNT Domestics delivers professional cleaning solutions for{' '}
            <strong className="text-primary-foreground">government facilities, commercial environments, and luxury residences</strong>
            —with the systems, people, and standards required to perform at the highest level.
          </p>

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
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSemUJYe9Q7JpF1QUXErmiZZlWcX05tLbqDhauOG6T1iGSfqBA/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">
                Request a Quote
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSemUJYe9Q7JpF1QUXErmiZZlWcX05tLbqDhauOG6T1iGSfqBA/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">
                Schedule a Private Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;