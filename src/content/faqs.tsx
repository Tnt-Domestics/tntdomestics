import type { Faq } from '@/components/FaqSection';
import { EMAIL, PHONE } from '@/lib/seo';

const Mail = () => (
  <a href={`mailto:${EMAIL}`} className="text-primary underline underline-offset-2">email us</a>
);
const Tel = () => (
  <a href={`tel:${PHONE}`} className="text-primary underline underline-offset-2">{PHONE}</a>
);

export const homeFaqs: Faq[] = [
  { q: 'What does TNT Domestics do?', a: 'TNT Domestics is a San Antonio, Texas cleaning company that provides commercial janitorial service, government facility cleaning, luxury residential housekeeping, post-construction cleaning, move-in/move-out cleaning and private aircraft cleaning.' },
  { q: 'Where does TNT Domestics provide cleaning services?', a: 'We are based in San Antonio and serve the greater San Antonio area, including New Braunfels, Boerne, Schertz and Seguin, plus Austin, Houston and Dallas. Programs are also available in California (Bay Area, Los Angeles, Orange County, San Diego, Sacramento) and across Hawaii.' },
  { q: 'Is TNT Domestics a certified minority- or woman-owned business?', a: 'Yes. TNT Domestics holds MBE, WBE, SBE, HUB and AABE certifications and is registered in SAM with UEI Z11EBUHZY3U5.' },
  { q: 'How do I get a cleaning quote?', a: <>Call <Tel />, <Mail /> or submit the online quote request. We respond to all inquiries within 24 business hours.</> },
];

export const commercialFaqs: Faq[] = [
  { q: 'How much does commercial cleaning cost in San Antonio?', a: 'Pricing depends on square footage, cleaning frequency, type of facility and add-ons such as floor care or disinfection. TNT Domestics provides a written, itemized proposal after a walk-through, usually within 24 business hours of your request.' },
  { q: 'Do you clean medical offices and clinics?', a: 'Yes. We clean healthcare environments, medical offices and day care centers using disinfection protocols for high-touch surfaces, restrooms and waiting areas.' },
  { q: 'Can you clean after business hours?', a: 'Yes. We offer day porter, evening and overnight service built around your hours, security requirements and access procedures.' },
  { q: 'Do you sign long-term janitorial contracts?', a: 'Yes. Most commercial clients are on recurring agreements with a defined scope of work, frequency and quality reporting.' },
];

export const governmentFaqs: Faq[] = [
  { q: 'Is TNT Domestics HUB certified?', a: 'Yes. TNT Domestics is a certified Historically Underutilized Business (HUB) in Texas, and also holds MBE, WBE, SBE and AABE certifications.' },
  { q: "What is TNT Domestics' UEI and NAICS code?", a: 'Our UEI is Z11EBUHZY3U5. Our primary NAICS code is 561720 (Janitorial Services), with 562119 (Other Waste Collection).' },
  { q: 'Can TNT Domestics subcontract on a government contract?', a: 'Yes. We team with prime contractors as a certified minority- and woman-owned subcontractor for janitorial and post-construction scopes.' },
  { q: 'How do I request a capability statement?', a: <><Mail /> or call <Tel /> and we will send our capability statement and references.</> },
];

export const residentialFaqs: Faq[] = [
  { q: 'How much does a house cleaning service cost in San Antonio?', a: 'Cost depends on home size, condition, frequency and special surfaces. TNT Domestics quotes each home after a private consultation and puts scope and pricing in a signed service agreement.' },
  { q: 'Are your house cleaners background-checked?', a: 'Yes. All residential personnel are background-checked and sign non-disclosure agreements.' },
  { q: 'Do you bring your own supplies?', a: 'Yes. We bring professional equipment and material-safe products, and can use non-toxic or fragrance-free products on request.' },
  { q: 'Will I get the same cleaners each time?', a: 'Yes. We assign a dedicated crew to each residence for consistency and privacy.' },
];

export const constructionFaqs: Faq[] = [
  { q: 'What is included in post-construction cleaning?', a: 'Post-construction cleaning usually has three phases: a rough clean to remove debris, a final clean to detail every surface, fixture and window, and a touch-up clean right before the final walk-through.' },
  { q: 'How long does a post-construction clean take?', a: 'A typical final clean on a standard commercial or residential build takes about 72 hours. Faster mobilization is available for time-sensitive handovers.' },
  { q: 'Do you work with general contractors as a subcontractor?', a: 'Yes. We work directly with GCs, builders and developers, coordinate with your superintendent and can support diversity participation goals as an MBE/WBE/HUB firm.' },
];

export const moveFaqs: Faq[] = [
  { q: 'What is the difference between move-out cleaning and regular cleaning?', a: 'Move-out cleaning covers areas regular cleaning skips, such as inside cabinets, inside the oven and refrigerator, baseboards, vents and closets, so the empty property passes inspection.' },
  { q: 'Do you clean rental turnovers for property managers?', a: 'Yes. We provide turnover cleaning between tenants and can invoice property management companies directly.' },
];

export const aviationFaqs: Faq[] = [
  { q: 'Do you clean private jets in San Antonio?', a: 'Yes. TNT Domestics provides interior and exterior private jet cleaning in San Antonio and across Texas, at your hangar or FBO.' },
  { q: 'What products do you use on aircraft?', a: 'We use only aviation-approved cleaning agents and follow FOD-conscious procedures on every service.' },
  { q: 'Can you turn an aircraft around between charters?', a: 'Yes. We offer rapid post-charter turnarounds and flexible overnight and pre-flight scheduling.' },
];

export const serviceAreaFaqs: Faq[] = [
  { q: 'Do you serve homes outside these neighborhoods?', a: "Our residential program is designed for estates and large private residences. If your home is nearby, call 830-500-5791 and we'll confirm availability." },
  { q: 'Do you clean commercial and government facilities in these markets too?', a: 'Yes. Commercial, government and post-construction work is quoted separately across Texas, California and Hawaii.' },
];

export const aboutFaqs: Faq[] = [
  { q: 'Who runs TNT Domestics?', a: <>Projects are managed by Tara Sydnor, Project Manager, reachable at <Tel />.</> },
  { q: 'Is TNT Domestics minority- and woman-owned?', a: 'Yes. TNT Domestics is certified MBE (minority business enterprise), WBE (women\'s business enterprise), SBE, HUB and AABE.' },
];

export const bookFaqs: Faq[] = [
  { q: 'What happens after I book?', a: 'A TNT Domestics coordinator reviews your request, confirms the date and time window, and sends a written quote. Commercial and government facilities usually get a walk-through first.' },
  { q: 'Is there a fee to request a booking?', a: 'No. Requesting a booking or quote is free, and nothing is charged until you approve the quote.' },
];
