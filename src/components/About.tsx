import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const highlights = [
    'Meticulous cleaning and sanitizing services',
    'Offices, healthcare, day care, construction',
    'Clean, healthy, professional environments',
    'Trained personnel and proven processes',
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Exceptional Service is Never Accidental—
              <span className="text-primary"> It is Engineered</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              TNT Domestics is a professional cleaning company built on one principle: 
              exceptional service is never accidental—it is engineered.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Since our founding, we have provided meticulous cleaning and sanitizing services 
              for offices, healthcare facilities, day care centers, construction projects, and 
              private residences. Our work goes beyond surface-level results; we create clean, 
              healthy, and professionally maintained environments that support productivity, 
              safety, and peace of mind.
            </p>
            
            <div className="space-y-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-primary to-teal-600 rounded-2xl p-8 text-primary-foreground">
                <div className="text-6xl font-bold mb-2">100%</div>
                <p className="text-xl font-semibold mb-4">Commitment to Quality</p>
                <p className="text-primary-foreground/80">
                  We invest heavily in trained personnel, proven processes, and premium products 
                  so our clients never have to question the quality, consistency, or professionalism 
                  of our service.
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-lavender-200/50 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;