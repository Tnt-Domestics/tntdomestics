import { Building2, Sparkles, Shield, ClipboardCheck, Users, FileCheck, Calendar, Recycle, Wind } from 'lucide-react';
import ServicePage from '@/components/ServicePage';
import hero from '@/assets/commercial-hero.jpg';
import img1 from '@/assets/commercial-1.jpg';
import img2 from '@/assets/commercial-2.jpg';
import img3 from '@/assets/commercial-3.jpg';
import img4 from '@/assets/commercial-4.jpg';

const Commercial = () => (
  <ServicePage
    eyebrow="Government & Commercial Division"
    badgeIcon={Building2}
    heroImage={hero}
    heroImageAlt="Modern commercial office lobby"
    title="Government & Commercial Cleaning"
    titleAccent="Built for Compliance."
    tagline="Office buildings, healthcare environments, and government facilities serviced with consistency, accountability, and documented quality—every shift, every site."
    introEyebrow="Institutional Grade"
    introHeadline="Programs Structured for"
    introHeadlineAccent="Regulated Environments"
    intro="TNT Domestics is credentialed for government contracting and built to meet the operational demands of commercial and institutional clients. We deliver measurable quality through defined scopes, trained crews, and transparent reporting on every engagement."
    servicesEyebrow="Facility Services"
    servicesHeadline="Full-Scope Commercial Programs"
    services={[
      {
        icon: Sparkles,
        title: 'Janitorial & Nightly Service',
        description: 'Recurring janitorial programs for office towers, campuses, and multi-tenant properties.',
      },
      {
        icon: Shield,
        title: 'Healthcare & Sanitization',
        description: 'Hospital-grade disinfection protocols for clinics, medical offices, and healthcare facilities.',
      },
      {
        icon: FileCheck,
        title: 'Government Contracting',
        description: 'UEI-registered and NAICS-classified. Ready to perform on federal, state, and municipal contracts.',
      },
      {
        icon: ClipboardCheck,
        title: 'Quality Assurance Reporting',
        description: 'Digital inspections, service logs, and monthly QA reports delivered to facility managers.',
      },
      {
        icon: Users,
        title: 'Trained, Uniformed Crews',
        description: 'Background-checked, uniformed teams with dedicated site supervisors and clear chain of command.',
      },
      {
        icon: Calendar,
        title: 'Scheduled Deep Cleans',
        description: 'Quarterly and annual floor care, window cleaning, and high-dust programs built into your contract.',
      },
      {
        icon: Recycle,
        title: 'Waste & Recycling Management',
        description: 'Trash removal, recycling program support, and consumables restocking across restrooms and break rooms.',
      },
      {
        icon: Wind,
        title: 'Electrostatic Disinfection',
        description: 'Wide-area electrostatic spraying for high-touch surfaces, boardrooms, and shared spaces on demand.',
      },
    ]}
    standardsEyebrow="Operating Standards"
    standardsHeadline="Accountable, Documented,"
    standardsHeadlineAccent="Compliant"
    standardsBlurb="Facility managers and contracting officers get predictable outcomes because our programs are engineered around measurable standards and clear reporting."
    standards={[
      'UEI-registered federal contractor',
      'NAICS 561720 & 562119 classifications',
      'MBE, WBE, and HUB certifications',
      'OSHA-aligned safety protocols',
      'Insured, bonded, and background-checked crews',
      'Digital inspection and reporting portal',
    ]}
    highlightTitle="Institutional Compliance"
    highlightValue="24/7"
    highlightBody="Day porter, evening, and overnight coverage designed around your facility's operating hours, security posture, and access requirements."
    gallery={[
      { src: img1, alt: 'Clean open-plan office', label: 'Office & Workspace Care' },
      { src: img2, alt: 'Uniformed cleaner in commercial lobby', label: 'Lobby & Common Areas' },
      { src: img3, alt: 'Spotless executive conference room', label: 'Boardrooms & Executive Suites' },
      { src: img4, alt: 'Sanitized medical exam room', label: 'Healthcare & Clinical Spaces' },
    ]}
    ctaHeadline="Ready to Contract with TNT?"
    ctaBody="Request a scoped proposal for your facility, contract, or multi-site portfolio."
  />
);

export default Commercial;
