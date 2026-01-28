import { BadgeCheck, FileText, CreditCard } from 'lucide-react';

const Credentials = () => {
  const certifications = ['AABE', 'MBE', 'SBE', 'WBE', 'HUB'];

  return (
    <section id="credentials" className="section-padding bg-foreground text-primary-foreground">
      <div className="container-wide mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Credentials & Compliance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Equipped to Support Government &{' '}
            <span className="text-primary">Enterprise-Level Clients</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            TNT Domestics is fully equipped with the certifications, registrations, 
            and capabilities to support government and enterprise-level clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* UEI & NAICS */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <FileText className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Registration</h3>
            <div className="space-y-4">
              <div>
                <span className="text-sm text-primary-foreground/60">UEI (Dun & Bradstreet)</span>
                <p className="font-mono text-lg">Z11EBUHZY3U5</p>
              </div>
              <div>
                <span className="text-sm text-primary-foreground/60">NAICS Codes</span>
                <div className="space-y-1 mt-2">
                  <p className="text-sm">
                    <span className="font-mono text-primary">561720</span> – Janitorial Services
                  </p>
                  <p className="text-sm">
                    <span className="font-mono text-primary">562119</span> – Other Waste Collection
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <BadgeCheck className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-2 bg-primary/20 text-primary font-semibold text-sm rounded-full"
                >
                  {cert}
                </span>
              ))}
            </div>
            <p className="text-sm text-primary-foreground/60 mt-4">
              Minority, Women, Small Business, and HUB certified for 
              government and enterprise contracting opportunities.
            </p>
          </div>

          {/* Payment */}
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <CreditCard className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Payment Options</h3>
            <p className="text-primary-foreground/80 mb-4">
              Flexible payment solutions for all client types.
            </p>
            <p className="text-sm text-primary-foreground/60">
              All forms of payment accepted including government purchase orders, 
              corporate invoicing, and standard payment methods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;