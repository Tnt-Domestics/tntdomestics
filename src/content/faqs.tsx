import type { Faq } from '@/components/FaqSection';
import { Link } from '@tanstack/react-router';
import { EMAIL, PHONE } from '@/lib/seo';

const Mail = (
  <a href={`mailto:${EMAIL}`} className="text-primary underline underline-offset-2">email us</a>
);
const Tel = (
  <a href={`tel:${PHONE}`} className="text-primary underline underline-offset-2">{PHONE}</a>
);

export const homeFaqs: Faq[] = [
  { q: 'What does TNT Domestics do?', a: 'TNT Domestics is a San Antonio, Texas cleaning company that provides commercial janitorial service, government facility cleaning, luxury residential housekeeping, post-construction cleaning, move-in/move-out cleaning and private aircraft cleaning.' },
  { q: 'Where does TNT Domestics provide cleaning services?', a: 'We are based in San Antonio and serve the greater San Antonio area, including New Braunfels, Boerne, Schertz and Seguin, plus Austin, Houston and Dallas. Programs are also available in California (Bay Area, Los Angeles, Orange County, San Diego, Sacramento) and across Hawaii.' },
  { q: 'Is TNT Domestics a certified minority- or woman-owned business?', a: 'Yes. TNT Domestics holds MBE, WBE, SBE, HUB and AABE certifications and is registered in SAM with UEI Z11EBUHZY3U5.' },
  { q: 'How do I get a cleaning quote?', a: <>Call {Tel}, {Mail} or submit the online quote request. We respond to all inquiries within 24 business hours.</> },
  { q: 'What is the difference between recurring cleaning and deep cleaning?', a: 'Recurring cleaning maintains the agreed areas of your home or facility on a regular schedule. Deep cleaning is a more detailed service for accumulated dust, fixtures, millwork and finishes. We define the tasks in your written scope rather than assuming every property needs the same checklist.' },
  { q: 'Do you offer more than residential cleaning in California and Hawaii?', a: 'Yes. TNT Domestics offers its full range of residential, estate, commercial, government, post-construction and specialty cleaning services in California and Hawaii. Share your location and project requirements so we can confirm the scope and scheduling for your property.' },
  { q: 'What information should I include in a cleaning quote request?', a: <>Include your service type, property type, approximate size, address, preferred frequency, date and time window. Use the notes field for fine finishes, access requirements or project deadlines. <Link to="/book/" className="text-primary underline underline-offset-2">Request a cleaning quote</Link> with those details.</> },
];

export const commercialFaqs: Faq[] = [
  { q: 'How much does commercial cleaning cost in San Antonio?', a: 'Pricing depends on square footage, cleaning frequency, type of facility and add-ons such as floor care or disinfection. TNT Domestics provides a written, itemized proposal based on your facility details, usually within 24 business hours of your request.' },
  { q: 'Do you clean medical offices and clinics?', a: 'Yes. We clean healthcare environments, medical offices and day care centers using disinfection protocols for high-touch surfaces, restrooms and waiting areas.' },
  { q: 'Can you clean after business hours?', a: 'Yes. We offer day porter, evening and overnight service built around your hours, security requirements and access procedures.' },
  { q: 'Do you sign long-term janitorial contracts?', a: 'Yes. Most commercial clients are on recurring agreements with a defined scope of work, frequency and quality reporting.' },
  { q: 'What is included in a commercial janitorial program?', a: 'Programs can include office cleaning, lobby and common-area care, restrooms, break rooms, floor care and high-touch surface disinfection. The proposal specifies the areas, tasks and frequency for your facility, including any periodic services.' },
  { q: 'What does a day porter do?', a: 'A day porter provides cleaning support during operating hours, helping maintain restrooms, shared spaces and other high-use areas between scheduled cleans. TNT Domestics defines the duties around your building activity and facility requirements.' },
  { q: 'How do facility managers track cleaning quality?', a: 'TNT Domestics uses defined scopes of work, documented inspections, service logs and quality reports. These records help facility managers review completed work and communicate priorities for the cleaning program.' },
];

export const governmentFaqs: Faq[] = [
  { q: 'Is TNT Domestics HUB certified?', a: 'Yes. TNT Domestics is a certified Historically Underutilized Business (HUB) in Texas, and also holds MBE, WBE, SBE and AABE certifications.' },
  { q: "What is TNT Domestics' UEI and NAICS code?", a: 'Our UEI is Z11EBUHZY3U5. Our primary NAICS code is 561720 (Janitorial Services), with 562119 (Other Waste Collection).' },
  { q: 'Can TNT Domestics subcontract on a government contract?', a: 'Yes. We team with prime contractors as a certified minority- and woman-owned subcontractor for janitorial and post-construction scopes.' },
  { q: 'How do I request a capability statement?', a: <>{Mail} or call {Tel} and we will send our capability statement and references.</> },
  { q: 'What should a government facility include when requesting a cleaning proposal?', a: 'Share the facility location, approximate square footage, required cleaning tasks, service frequency, access procedures and procurement requirements. Include the solicitation or scope of work when available so the proposal can address the actual contract requirements.' },
];

export const residentialFaqs: Faq[] = [
  { q: 'How much does a house cleaning service cost in San Antonio?', a: 'Cost depends on home size, condition, frequency and special surfaces. TNT Domestics quotes each home after reviewing your property, then puts scope and pricing in a signed service agreement.' },
  { q: 'Are your house cleaners background-checked?', a: 'Yes. All residential personnel are background-checked and sign non-disclosure agreements.' },
  { q: 'Do you bring your own supplies?', a: 'Yes. We bring professional equipment and material-safe products, and can use non-toxic or unscented products on request.' },
  { q: 'Will I have a consistent point of contact?', a: 'Yes. Every residence has a direct point of contact and a written care plan, so your preferences are documented and followed at every visit.' },
  { q: 'How often should I schedule luxury house cleaning?', a: 'The right frequency depends on household activity, property size and how you use the residence. We offer daily, weekly and bi-weekly housekeeping programs, as well as seasonal deep cleaning. Your written care plan sets the cadence and tasks once we review the residence.' },
  { q: 'How do you clean marble, natural stone, hardwood and brass?', a: 'We select cleaning products and techniques for the specific material rather than using one product throughout the home. Your written care plan records fine finishes and special surface requirements so those details guide the service.' },
  { q: 'What is included in an estate cleaning care plan?', a: 'Your care plan documents the agreed cleaning scope, schedule, household preferences and requirements for specialty surfaces. A direct point of contact coordinates those details, with service logs and a written agreement setting clear expectations.' },
  { q: 'Do you clean second homes and prepare residences for events?', a: 'Yes. TNT Domestics serves estates, penthouses and second homes, and offers event preparation and post-event cleaning. Tell us how the residence is used and the timing of your arrival or event so the requested work can be scoped.' },
  { q: 'How do you protect privacy during residential cleaning?', a: 'Residential cleaning personnel are background-checked and NDA-bound. We document household preferences and coordinate through a direct point of contact, with discretion built into the agreed care plan.' },
];

export const constructionFaqs: Faq[] = [
  { q: 'What is included in post-construction cleaning?', a: 'Post-construction cleaning usually has three phases: a rough clean to remove debris, a final clean to detail every surface, fixture and window, and a touch-up clean right before handover.' },
  { q: 'How long does a post-construction clean take?', a: 'A typical final clean on a standard commercial or residential build takes about 72 hours. Faster mobilization is available for time-sensitive handovers.' },
  { q: 'Do you work with general contractors as a subcontractor?', a: 'Yes. We work directly with GCs, builders and developers, coordinate with your superintendent and can support diversity participation goals as an MBE/WBE/HUB firm.' },
  { q: 'How is construction dust removed before occupancy?', a: 'Our post-construction program includes HEPA vacuuming and removal of drywall dust, sawdust and jobsite grit. The agreed scope can also include detailing vents, registers, fixtures, cabinetry and glass before handover.' },
  { q: 'When should builders schedule rough, final and touch-up cleaning?', a: 'Coordinate cleaning with your superintendent and construction schedule. Rough cleaning addresses debris during the project, final cleaning details completed spaces, and touch-up visits address areas affected by punch-list work before handover. Share your milestones so each phase can be planned.' },
];

export const moveFaqs: Faq[] = [
  { q: 'What is the difference between move-out cleaning and regular cleaning?', a: 'Move-out cleaning covers areas regular cleaning skips, such as inside cabinets, inside the oven and refrigerator, baseboards, vents and closets, so the empty property passes inspection.' },
  { q: 'Do you clean rental turnovers for property managers?', a: 'Yes. We provide turnover cleaning between tenants and can invoice property management companies directly.' },
  { q: 'Does move-in or move-out cleaning include cabinets and appliances?', a: 'Our move-clean scope includes inside cabinets and drawers, the oven and refrigerator, along with bathrooms, floors, baseboards, vents and fixtures. Identify any specialty appliances or additional requirements when requesting your quote so the written scope is clear.' },
  { q: 'Can move cleaning be coordinated with a listing or tenant handover?', a: 'Yes. We provide move cleaning for homeowners, renters, landlords and property managers preparing for a listing or new occupants. Include the handover date and access details in your request; the schedule is confirmed after review.' },
];

export const aviationFaqs: Faq[] = [
  { q: 'Do you clean private jets in San Antonio?', a: 'Yes. TNT Domestics provides interior and exterior private jet cleaning in San Antonio and across Texas, at your hangar or FBO.' },
  { q: 'What products do you use on aircraft?', a: 'We use only aviation-approved cleaning agents and follow FOD-conscious procedures on every service.' },
  { q: 'Can you turn an aircraft around between charters?', a: 'Yes. We offer rapid post-charter turnarounds and flexible overnight and pre-flight scheduling.' },
  { q: 'What is included in private jet cabin cleaning?', a: 'Cabin services include interior detailing, leather conditioning, wood polishing, carpet extraction and headliner care, as well as cleaning high-touch surfaces, galleys and lavatories. The scope is agreed for your aircraft and operational requirements.' },
  { q: 'Do you offer aircraft exterior cleaning as well as interior detailing?', a: 'Yes. TNT Domestics offers exterior wash and polish, fuselage detailing, brightwork polishing and paint protection alongside cabin services. Share your aircraft details and location so we can scope the requested work.' },
  { q: 'What details are needed for an aircraft cleaning quote?', a: <>Provide the aircraft type, hangar or FBO location, requested interior or exterior services, access requirements and turnaround window. <Link to="/book/" search={{ service: 'aviation' }} className="text-primary underline underline-offset-2">Request an aviation cleaning quote</Link> and include operational details in the notes.</> },
];

export const serviceAreaFaqs: Faq[] = [
  { q: 'Do you serve homes outside these neighborhoods?', a: "Our residential program is designed for estates and large private residences. If your home is nearby, call 830-500-5791 and we'll confirm availability." },
  { q: 'Do you clean commercial and government facilities in these markets too?', a: 'Yes. Commercial, government and post-construction work is quoted separately across Texas, California and Hawaii.' },
  { q: 'Do you offer estate cleaning in San Antonio and Austin?', a: 'Yes. Our residential service areas include San Antonio, Alamo Heights, Olmos Park and The Dominion, as well as Austin and West Lake Hills. We tailor the written care plan to the residence, household routine and fine finishes.' },
  { q: 'Where in California can I request cleaning services?', a: 'TNT Domestics serves the San Francisco Bay Area, including Silicon Valley and the Peninsula, along with Los Angeles, Orange County, San Diego and Sacramento. Include your property address and service needs so we can confirm the local scope and scheduling.' },
];

export const aboutFaqs: Faq[] = [
  { q: 'Who runs TNT Domestics?', a: <>Projects are managed by Tara Sydnor, Project Manager, reachable at {Tel}.</> },
  { q: 'Is TNT Domestics minority- and woman-owned?', a: 'Yes. TNT Domestics is certified MBE (minority business enterprise), WBE (women\'s business enterprise), SBE, HUB and AABE.' },
];

export const bookFaqs: Faq[] = [
  { q: 'What happens after I submit a request?', a: 'A TNT Domestics coordinator contacts you within one business day by your preferred method to discuss your home or facility, then sends a written care plan and quote before anything is scheduled.' },
  { q: 'Do commercial and government clients get a proposal?', a: 'Yes. Commercial, government and aviation requests receive a written, scoped proposal covering services, frequency and pricing.' },
  { q: 'Does choosing a preferred date confirm my cleaning appointment?', a: 'No. The date and time window on the form are preferences, not a confirmed appointment. Management reviews your request and contacts you to confirm availability, the cleaning scope and price before service is scheduled.' },
  { q: 'Can I request one-time cleaning or an ongoing service program?', a: 'Yes. Use the frequency field to tell us whether you need a one-time service or recurring cleaning. The appropriate scope and schedule are reviewed with you before you approve the quote.' },
  { q: 'How can I discuss special cleaning requirements before service?', a: <>Add your requirements in the quote form notes, including delicate surfaces, household preferences, facility access or handover deadlines. You can also call {Tel} or {Mail} to discuss the scope with management.</> },
];
