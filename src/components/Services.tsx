import { 
  HardHat, 
  Building2, 
  Home, 
  Truck, 
  Package,
  ArrowRight 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: HardHat,
      title: 'Post-Construction & Renovation Cleaning',
      description: 'Precision preparation of newly built or renovated spaces, ensuring readiness for occupancy.',
      features: ['Debris removal', 'Deep surface cleaning', 'Final polish preparation'],
    },
    {
      icon: Building2,
      title: 'Government & Commercial Cleaning',
      description: 'Office buildings, healthcare environments, and professional facilities serviced with consistency, accountability, and compliance in mind.',
      features: ['Regulatory compliance', 'Scheduled maintenance', 'Quality documentation'],
    },
    {
      icon: Home,
      title: 'Luxury Residential Cleaning',
      description: 'Customized cleaning services delivered under contractual agreements, designed for homeowners who expect discretion, detail, and trust.',
      features: ['Personalized service plans', 'Vetted professionals', 'Discreet operations'],
    },
    {
      icon: Truck,
      title: 'Move-In / Move-Out Cleaning',
      description: 'Tailored service plans aligned with property standards and client expectations for smooth transitions.',
      features: ['Deep cleaning', 'Property-ready finish', 'Inspection support'],
    },
    {
      icon: Package,
      title: 'Supply Distribution & Inventory',
      description: 'Reliable sourcing and management to support operational continuity for your facility.',
      features: ['Quality products', 'Inventory tracking', 'Timely delivery'],
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-wide mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Signature Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Structured for{' '}
            <span className="text-primary">Discerning Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our services are intentionally structured to meet the expectations of discerning 
            clients and regulated environments.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border/50 hover:border-primary/30 hover:shadow-elevated transition-all duration-300 hover-lift"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          {/* CTA Card */}
          <Card className="bg-gradient-to-br from-primary to-teal-600 border-0 text-primary-foreground flex flex-col justify-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-primary-foreground/80 mb-6">
                We work with you to develop tailored cleaning programs that meet your 
                specific requirements and standards.
              </p>
              <Button variant="secondary" className="group">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;