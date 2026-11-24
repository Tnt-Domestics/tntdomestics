import { isValidElement, type ReactNode } from 'react';
import type { Faq } from '@/components/FaqSection';

const ORIGIN = 'https://tntdomestics.com';
export const BUSINESS_ID = `${ORIGIN}/#business`;
export const SERVICE_AREAS = ['San Antonio', 'Austin', 'Texas', 'California', 'Hawaii', 'Alamo Heights', 'Olmos Park', 'Terrell Hills', 'Monte Vista', 'The Dominion', 'Shavano Park', 'Hill Country Village', 'Fair Oaks Ranch', 'Cordillera Ranch', 'Boerne', 'West Lake Hills', 'Rollingwood', 'Tarrytown', 'Old Enfield', 'Pemberton Heights', 'Barton Creek', 'Lakeway', 'Spanish Oaks', 'Atherton', 'Hillsborough', 'Woodside', 'Los Altos Hills', 'Beverly Hills', 'Bel Air', 'Brentwood', 'Malibu', 'Pacific Palisades', 'Newport Beach', 'Corona del Mar', 'Laguna Beach', 'Rancho Santa Fe', 'La Jolla', 'Del Mar', 'Kahala', 'Diamond Head', 'Portlock', 'Lanikai', 'Kailua', 'Wailea', 'Kapalua', 'Kohala Coast', 'Hualālai', 'Mauna Kea', 'Princeville'];

export function faqAnswerText(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(faqAnswerText).join('');
  if (isValidElement<{ children?: ReactNode }>(node)) return faqAnswerText(node.props.children);
  throw new Error('FAQ schema requires text or elements with visible text children');
}

export function pageGraph(path: string, title: string, description: string, options: { faqs?: Faq[]; service?: string } = {}) {
  const url = `${ORIGIN}${path}`;
  const graph: Record<string, unknown>[] = [
    { '@type': 'LocalBusiness', '@id': BUSINESS_ID, name: 'TNT Domestics', url: `${ORIGIN}/`, telephone: '+18305005791', email: 'management@tntdomestics.com', address: { '@type': 'PostalAddress', addressLocality: 'San Antonio', addressRegion: 'TX', addressCountry: 'US' }, areaServed: SERVICE_AREAS.map(name => ({ '@type': 'Place', name })), naics: '561720', identifier: { '@type': 'PropertyValue', propertyID: 'UEI', value: 'Z11EBUHZY3U5' }, hasCredential: ['MBE', 'WBE', 'SBE', 'HUB', 'AABE'].map(name => ({ '@type': 'EducationalOccupationalCredential', name })), sameAs: ['https://www.instagram.com/tnt.domestics/', 'https://x.com/TNTDomestics'] },
    { '@type': 'WebSite', '@id': `${ORIGIN}/#website`, url: `${ORIGIN}/`, name: 'TNT Domestics', publisher: { '@id': BUSINESS_ID } },
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description, isPartOf: { '@id': `${ORIGIN}/#website` }, about: { '@id': BUSINESS_ID }, ...(path !== '/' ? { breadcrumb: { '@id': `${url}#breadcrumbs` } } : {}) },
  ];
  if (path !== '/') {
    const segments = path.split('/').filter(Boolean);
    const labels: Record<string, string> = { 'service-areas': 'Service Areas', 'san-antonio': 'San Antonio', 'move-in-move-out': 'Move-In / Move-Out', 'government-cleaning': 'Government Cleaning', 'faq': 'FAQ' };
    graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumbs`, itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` }, ...segments.map((segment, i) => ({ '@type': 'ListItem', position: i + 2, name: labels[segment] ?? segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '), item: `${ORIGIN}/${segments.slice(0, i + 1).join('/')}/` }))] });
  }
  if (options.service) graph.push({ '@type': 'Service', '@id': `${url}#service`, name: options.service, serviceType: options.service, url, provider: { '@id': BUSINESS_ID }, areaServed: SERVICE_AREAS.map(name => ({ '@type': 'Place', name })) });
  if (options.faqs?.length) graph.push({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: options.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: faqAnswerText(f.a) } })) });
  return { '@context': 'https://schema.org', '@graph': graph };
}
