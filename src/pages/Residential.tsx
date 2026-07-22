import { Home, Sparkles, Shield, Gem, Key, Calendar, Leaf } from 'lucide-react';
import ServicePage from '@/components/ServicePage';
import hero from '@/assets/residential-hero.jpg';
import img1 from '@/assets/residential-1.jpg';
import img2 from '@/assets/residential-2.jpg';

const Residential = () => (
  <ServicePage
    eyebrow="Luxury Residential Division"
    badgeIcon={Home}
    heroImage={hero}
    heroImageAlt="Luxury residential living room"
    title="Luxury Residential Cleaning"
    titleAccent="Discreet. Detailed. Trusted."
    tagline="Contractual, white-glove cleaning for private estates, penthouses, and second homes—delivered by vetted professionals who understand the standards of high-end living."
    introEyebrow="Private Residence Standards"
    introHeadline="Care Tailored to"
    introHeadlineAccent="Your Home"
    intro="Every household we serve is under a signed service agreement with clearly defined scope, cadence, and expectations. From daily upkeep to seasonal deep cleans, our residential teams deliver consistent, discreet results that respect your home, your privacy, and your routine."
    servicesEyebrow="Residential Services"
    servicesHeadline="A Complete Program for the Private Home"
    services={[
      {
        icon: Sparkles,
        title: 'Deep Cleaning & Detailing',
        description: 'Room-by-room detailing of hard surfaces, fixtures, millwork, and finishes using material-safe products.',
      },
      {
        icon: Gem,
        title: 'Fine Finish Care',
        description: 'Marble, wood, brass, and stone handled with the specific products and technique each surface demands.',
      },
      {
        icon: Calendar,
        title: 'Recurring Housekeeping',
        description: 'Weekly, bi-weekly, or daily housekeeping programs built around your household schedule.',
      },
      {
        icon: Key,
        title: 'Move-In / Move-Out',
        description: 'Turn-key preparation for new residences or a spotless handover on departure—inspection ready.',
      },
      {
        icon: Leaf,
        title: 'Eco-Conscious Options',
        description: 'Non-toxic, low-VOC, and fragrance-free cleaning agents available for families and sensitive environments.',
      },
      {
        icon: Shield,
        title: 'Discreet Staffing',
        description: 'Background-checked, NDA-bound crews trained to work seamlessly around your family and household staff.',
      },
    ]}
    standardsEyebrow="How We Operate"
    standardsHeadline="Standards Worthy of a"
    standardsHeadlineAccent="Private Estate"
    standardsBlurb="Every home is different. Every home receives a documented protocol, a dedicated point of contact, and a consistent team that knows your preferences by heart."
    standards={[
      'Background-checked, NDA-bound personnel',
      'Dedicated crews for continuity of care',
      'Material-safe products for stone, wood, and metals',
      'Documented scope of work and service logs',
      'Flexible scheduling around your household',
      'Direct point-of-contact for every residence',
    ]}
    highlightTitle="Signed Service Agreements"
    highlightValue="100%"
    highlightBody="Every residential engagement is governed by a written agreement—so scope, cadence, and standards are unambiguous from day one."
    gallery={[
      { src: img1, alt: 'Immaculate luxury kitchen', label: 'Kitchen Deep Clean' },
      { src: img2, alt: 'Spa-like master bathroom', label: 'Primary Bath Detailing' },
    ]}
    ctaHeadline="Bring TNT Into Your Home"
    ctaBody="Schedule a private consultation to design a cleaning program tailored to your residence and household routine."
  />
);

export default Residential;
