import { describe, expect, it } from 'vitest';
import { createMemoryHistory, createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import { getRouter } from '@/router';
import { sitemapEntries, sitemapStaticPaths, sitemapXML } from '@/lib/sitemap';
import { pageGraph, BUSINESS_ID } from '@/lib/structured-data';
import { homeFaqs } from '@/content/faqs';

describe('Public search inventory', () => {
  it('lists all 16 canonical public pages with trailing slashes', () => {
    const paths = sitemapStaticPaths(getRouter());
    expect(paths).toEqual(['/', '/about/', '/aviation/', '/book/', '/commercial/', '/contact/', '/faq/', '/government-cleaning/', '/move-in-move-out/', '/post-construction/', '/residential/', '/service-areas/', '/service-areas/austin/', '/service-areas/california/', '/service-areas/hawaii/', '/service-areas/san-antonio/']);
  });
  it('automatically includes a newly declared public route and excludes private subtrees', () => {
    const root = createRootRoute({ staticData: { sitemap: false } });
    const added = createRoute({ getParentRoute: () => root, path: '/new-public-page', staticData: { sitemap: true } });
    const privateParent = createRoute({ getParentRoute: () => root, path: '/admin', staticData: { sitemap: 'exclude-subtree' } });
    const child = createRoute({ getParentRoute: () => privateParent, path: '/secret', staticData: { sitemap: true } });
    const router = createRouter({ routeTree: root.addChildren([added, privateParent.addChildren([child])]), history: createMemoryHistory(), trailingSlash: 'always' });
    expect(sitemapStaticPaths(router)).toEqual(['/new-public-page/']);
  });
  it('uses recorded page content dates, never sitemap generation time', () => {
    expect(sitemapEntries(getRouter()).every(entry => entry.lastmod === '2026-11-24')).toBe(true);
    const xml = sitemapXML('https://tntdomestics.com', [{ path: '/', lastmod: '2026-11-24' }, { path: '/book/' }]);
    expect(xml.match(/<lastmod>/g)).toHaveLength(1);
    expect(xml).toContain('<loc>https://tntdomestics.com/book/</loc></url>');
  });
});
describe('Structured business details', () => {
  it('preserves the requested phone, email, UEI, credentials and provider', () => {
    const graph = pageGraph('/aviation/', 'Aviation', 'Aircraft cleaning', { service: 'Aircraft cleaning' })['@graph'];
    expect(graph.find(node => node['@type'] === 'LocalBusiness')).toMatchObject({ '@id': BUSINESS_ID, telephone: '+18305005791', email: 'management@tntdomestics.com', naics: '561720', identifier: { propertyID: 'UEI', value: 'Z11EBUHZY3U5' }, hasCredential: ['MBE', 'WBE', 'SBE', 'HUB', 'AABE'].map(name => ({ '@type': 'EducationalOccupationalCredential', name })) });
    expect(graph.find(node => node['@type'] === 'Service')?.['provider']).toEqual({ '@id': BUSINESS_ID });
  });
  it('reads linked FAQ answers as visible text without dropping phone or email labels', () => {
    const graph = pageGraph('/', 'Home', 'Cleaning', { faqs: homeFaqs })['@graph'];
    const faq = graph.find(node => node['@type'] === 'FAQPage');
    expect(faq?.['mainEntity']).toEqual(expect.arrayContaining([{ '@type': 'Question', name: 'How do I get a cleaning quote?', acceptedAnswer: { '@type': 'Answer', text: 'Call 830-500-5791, email us or submit the online quote request. We respond to all inquiries within 24 business hours.' } }]));
    expect(graph.some(node => node['@type'] === 'BreadcrumbList')).toBe(false);
  });
});
