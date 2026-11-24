import { Home, Sparkles, Shield, Gem, Key, Calendar, Leaf, Shirt, Wine } from 'lucide-react';
import ServicePage from '@/components/ServicePage';
import { residentialFaqs } from '@/content/faqs';
import hero from '@/assets/residential-hero.jpg';
import img1 from '@/assets/residential-1.jpg';
import img2 from '@/assets/residential-2.jpg';
import img3 from '@/assets/residential-3.jpg';
import img4 from '@/assets/residential-4.jpg';

const Residential = () => (
  <ServicePage
      ctaLabel="Schedule a Consultation"
      service="residential"
    eyebrow="Luxury Residential Division"
    badgeIcon={Home}
    heroImage={hero}
    heroImageAlt="Luxury residential living room"
    title="Luxury House Cleaning & Estate Housekeeping"
    titleAccent=""
    tagline="TNT Domestics provides discreet, white-glove house cleaning for estates, penthouses and second homes in San Antonio's and Austin's finest neighborhoods, with contracted programs in California and Hawaii. Every home gets a signed service agreement, a direct point of contact and a documented cleaning protocol, from weekly housekeeping to seasonal deep cleans."
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
        description: 'Non-toxic, low-VOC, and unscented cleaning agents available for families and sensitive environments.',
      },
      {
        icon: Shield,
        title: 'Discreet Staffing',
        description: 'Background-checked, NDA-bound crews trained to work seamlessly around your family and household staff.',
      },
      {
        icon: Shirt,
        title: 'Closet & Wardrobe Care',
        description: 'Organized folding, garment rotation, and thorough wardrobe dust removal for walk-in closets and dressing rooms.',
      },
      {
        icon: Wine,
        title: 'Event Prep & Recovery',
        description: 'Pre-event polishing and post-event restoration—so hosting at home never means cleaning after guests leave.',
      },
    ]}
    standardsEyebrow="How We Operate"
    standardsHeadline="Standards Worthy of a"
    standardsHeadlineAccent="Private Estate"
    standardsBlurb="Every home is different. Every home receives a documented protocol, a written care plan, and a direct point of contact who keeps your preferences documented."
    standards={[
      'Background-checked, NDA-bound personnel',
      'Written care plans for continuity of care',
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
      { src: img3, alt: 'Organized luxury walk-in closet', label: 'Wardrobe & Closet Care' },
      { src: img4, alt: 'Polished formal living room', label: 'Living Areas & Fine Finishes' },
    ]}
    ctaHeadline="Bring TNT Into Your Home"
    faqs={residentialFaqs}
    ctaBody="Tell us about your residence and household routine—we'll design a cleaning program around it."
  />
);

export default Residential;
