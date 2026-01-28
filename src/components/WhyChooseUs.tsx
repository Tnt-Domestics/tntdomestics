import { 
  UserCheck, 
  Scale, 
  TrendingUp, 
  CheckCircle2, 
  Handshake 
} from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: UserCheck,
      title: 'Expert Leadership',
      description: 'Leadership that understands regulated and high-expectation environments.',
    },
    {
      icon: Scale,
      title: 'Professional Teams',
      description: 'Teams trained for discretion, performance, and consistent excellence.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Services',
      description: 'Solutions that grow with your organization and evolving needs.',
    },
    {
      icon: CheckCircle2,
      title: 'Consistent Quality',
      description: 'Results backed by systems—not shortcuts or one-time efforts.',
    },
    {
      icon: Handshake,
      title: 'Partner Mindset',
      description: 'We operate as your partner, not just another vendor.',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            The TNT Difference
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Clients Choose{' '}
            <span className="text-primary">TNT Domestics</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-lavender-100/50 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;