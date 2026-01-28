import { Quote } from 'lucide-react';

const Clients = () => {
  const clients = [
    'OFFICIAL WATER LLC',
    'Aamos Consultant',
    "Carolyn's Crown Beauty Supply",
    'Ember Hope',
    'Takumi Stamping Plant',
    'The Evans Foundation',
    'Oasis Cleaning',
    'Crawford Electric Supply',
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Testimonial style */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-16 h-16 text-lavender-200">
              <Quote className="w-full h-full" />
            </div>
            <div className="relative z-10 pl-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Trusted Relationships
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Our growth has been driven by{' '}
                <strong className="text-foreground">repeat business and long-term partnerships</strong>, 
                not one-time engagements.
              </p>
              <p className="text-muted-foreground text-lg">
                Clients stay with TNT Domestics because we deliver what we promise—
                <span className="text-primary font-semibold">every time</span>.
              </p>
            </div>
          </div>

          {/* Right - Client logos/names */}
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">
              Organizations We've Supported
            </p>
            <div className="grid grid-cols-2 gap-4">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="p-4 bg-card rounded-lg border border-border/50 text-center hover:border-primary/30 hover:shadow-soft transition-all duration-300"
                >
                  <span className="text-sm font-medium text-foreground">{client}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;