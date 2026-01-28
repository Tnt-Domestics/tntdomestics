import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Standards', href: '#standards' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Post-Construction Cleaning',
    'Commercial Cleaning',
    'Government Facility Cleaning',
    'Luxury Residential',
    'Move-In/Move-Out',
  ];

  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="container-wide mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="TNT Domestics" className="h-12 w-12 object-contain" />
              <div>
                <span className="block text-lg font-bold leading-tight">TNT Domestics</span>
                <span className="text-xs text-primary-foreground/60">Professional Cleaning Services</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Where Precision, Trust, and Excellence Define Every Clean.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>Tara Sydnor, Project Manager</p>
              <p>
                <a href="tel:210-807-1968" className="hover:text-primary transition-colors">
                  210-807-1968
                </a>
              </p>
              <p>
                <a href="mailto:tntdomestics2023@gmail.com" className="hover:text-primary transition-colors">
                  tntdomestics2023@gmail.com
                </a>
              </p>
              <p className="pt-2">San Antonio, TX & Surrounding Areas</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-primary-foreground/10 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {['AABE', 'MBE', 'SBE', 'WBE', 'HUB'].map((cert) => (
              <span
                key={cert}
                className="px-3 py-1 bg-primary-foreground/5 text-primary-foreground/60 text-xs font-medium rounded"
              >
                {cert} Certified
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} TNT Domestics. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40 mt-2">
            UEI: Z11EBUHZY3U5 | NAICS: 561720, 562119
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;