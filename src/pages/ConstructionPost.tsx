import { HardHat, Sparkles, Shield, Trash2, Droplets, Eye, Wrench } from 'lucide-react';
import ServicePage from '@/components/ServicePage';
import hero from '@/assets/construction-hero.jpg';
import img1 from '@/assets/construction-1.jpg';
import img2 from '@/assets/construction-2.jpg';

const ConstructionPost = () => (
  <ServicePage
    eyebrow="Post-Construction Division"
    badgeIcon={HardHat}
    heroImage={hero}
    heroImageAlt="Newly constructed interior awaiting post-construction cleanup"
    title="Post-Construction Cleaning"
    titleAccent="From Rough to Turnover-Ready."
    tagline="Precision cleanup of newly built and renovated spaces—drywall dust, adhesive residue, debris, and final polish handled so the space is inspection-ready and safe for occupancy."
    introEyebrow="Rough, Final & Touch-Up"
    introHeadline="Every Phase of the"
    introHeadlineAccent="Handover"
    intro="General contractors, builders, and developers rely on TNT for the rough clean, final clean, and touch-up phases. We work on your critical path—coordinated with your schedule, respectful of your trades, and accountable to your punch list."
    servicesEyebrow="Post-Construction Services"
    servicesHeadline="Full Handover Cleanup Program"
    services={[
      {
        icon: Trash2,
        title: 'Debris & Dust Removal',
        description: 'Bulk debris hauling, HEPA vacuuming, and top-to-bottom removal of drywall, sawdust, and jobsite grit.',
      },
      {
        icon: Droplets,
        title: 'Adhesive & Residue Cleanup',
        description: 'Removal of paint overspray, tape residue, mortar splatter, and manufacturer stickers from every surface.',
      },
      {
        icon: Sparkles,
        title: 'Final Polish & Detail',
        description: 'Fixtures, cabinetry, appliances, glass, and finishes detailed to a turnover-ready standard.',
      },
      {
        icon: Eye,
        title: 'Window & Glass Cleaning',
        description: 'Interior glass, storefronts, and window frames cleaned inside-and-out for a spotless first impression.',
      },
      {
        icon: Wrench,
        title: 'Punch-List Touch-Ups',
        description: 'Return visits scheduled around your punch list so the space passes final walk-through the first time.',
      },
      {
        icon: Shield,
        title: 'Safety & Site Coordination',
        description: 'OSHA-aligned crews with PPE, jobsite awareness, and coordination with your superintendent.',
      },
    ]}
    standardsEyebrow="On-Site Standards"
    standardsHeadline="Coordinated with Your"
    standardsHeadlineAccent="Critical Path"
    standardsBlurb="We plug into your schedule, your trades, and your project management workflow so the cleanup phase never becomes the delay."
    standards={[
      'OSHA-aligned safety protocols and PPE',
      'HEPA vacuums and low-VOC cleaning agents',
      'Coordinated scheduling with your superintendent',
      'Rough, final, and touch-up phases available',
      'Insured, bonded, and background-checked crews',
      'Photo documentation of completed areas',
    ]}
    highlightTitle="Turnover-Ready"
    highlightValue="72hr"
    highlightBody="Typical final-clean turnaround for standard commercial and residential builds—faster mobilization available for time-sensitive handovers."
    gallery={[
      { src: img1, alt: 'Post-construction cleanup crew removing debris', label: 'Rough & Debris Removal' },
      { src: img2, alt: 'Newly cleaned home interior ready for handover', label: 'Final Polish & Handover' },
    ]}
    ctaHeadline="Cleaning the Path to Handover"
    ctaBody="Send us your project schedule and scope—we'll return a proposal built around your handover date."
  />
);

export default ConstructionPost;
