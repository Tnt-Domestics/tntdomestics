import { 
  Sparkles, 
  Shield, 
  Leaf, 
  Users, 
  ClipboardCheck,
  Award
} from 'lucide-react';

const Standards = () => {
  const standards = [
    {
      icon: Sparkles,
      title: 'Professional Cleaning & Sanitizing',
      description: 'Comprehensive cleaning and sanitizing services that meet the highest industry standards.',
    },
    {
      icon: Shield,
      title: 'Post-Construction Cleanup',
      description: 'Expert debris removal and final preparation for newly built or renovated spaces.',
    },
    {
      icon: ClipboardCheck,
      title: 'Detailed Surface Care',
      description: 'Meticulous attention to floors, windows, and all surfaces requiring specialized treatment.',
    },
    {
      icon: Leaf,
      title: 'Eco-Conscious Products',
      description: 'Industry-approved, environmentally responsible cleaning solutions.',
    },
    {
      icon: Users,
      title: 'Trained Teams',
      description: 'Established systems, trained professionals, and rigorous quality controls.',
    },
    {
      icon: Award,
      title: 'Quality Controls',
      description: 'Every service executed with emphasis on health, safety, consistency, and long-term value.',
    },
  ];

  return (
    <section id="standards" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lavender-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container-wide mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Capabilities & Operating Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Reputation is Built on{' '}
              <span className="text-primary">Performance</span>, Not Promises
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Every service is executed with an emphasis on health, safety, consistency, 
              and long-term value. We don't just clean—we maintain environments that 
              reflect your organization's commitment to excellence.
            </p>

            <div className="p-6 bg-muted/50 rounded-xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Quality Assurance Promise</h3>
                  <p className="text-muted-foreground text-sm">
                    We invest heavily in trained personnel, proven processes, and premium products 
                    so our clients never have to question the quality, consistency, or 
                    professionalism of our service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Standards grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {standards.map((standard, index) => (
              <div 
                key={index} 
                className="p-5 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <standard.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{standard.title}</h3>
                <p className="text-sm text-muted-foreground">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standards;