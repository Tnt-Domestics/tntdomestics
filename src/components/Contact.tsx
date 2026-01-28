import { Mail, Phone, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary to-teal-700 text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lavender-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

      <div className="container-wide mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Facility Deserves a Higher Standard of Care
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Whether you manage a government building, oversee commercial operations, 
              or maintain a luxury residence, TNT Domestics is prepared to deliver 
              service that reflects your standards.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Call Us</p>
                  <a href="tel:210-807-1968" className="text-lg font-semibold hover:underline">
                    210-807-1968
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Email Us</p>
                  <a href="mailto:tntdomestics2023@gmail.com" className="text-lg font-semibold hover:underline">
                    Send an Email
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/60">Service Area</p>
                  <p className="text-lg font-semibold">Texas & Hawaii</p>
                </div>
              </div>
            </div>

            <p className="text-primary-foreground/70 mb-2">Project Manager</p>
            <p className="text-2xl font-bold">Tara Sydnor</p>
          </div>

          {/* Right - CTA card */}
          <div className="bg-card text-card-foreground rounded-2xl p-8 shadow-floating">
            <div className="flex justify-center mb-6">
              <img src={logo} alt="TNT Domestics" className="h-20 w-20 object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground text-center mb-8">
              Contact us today to discuss your cleaning needs and receive a customized quote.
            </p>

            <div className="space-y-4">
              <Button size="lg" className="w-full group shadow-teal" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSemUJYe9Q7JpF1QUXErmiZZlWcX05tLbqDhauOG6T1iGSfqBA/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">
                  Request a Quote
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full" asChild>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSemUJYe9Q7JpF1QUXErmiZZlWcX05tLbqDhauOG6T1iGSfqBA/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">
                  Schedule a Private Consultation
                </a>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-6">
              We respond to all inquiries within 24 business hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;