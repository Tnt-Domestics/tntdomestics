import { describe, it, expect } from 'vitest';
import { publicRoutes, renderPage } from '../site/render';
describe('static public pages',()=>{
 it('renders all thirteen requested canonical routes',()=>{expect(publicRoutes).toEqual(['/', '/services/post-construction-cleaning','/services/commercial-janitorial','/services/government-custodial','/services/move-in-move-out-cleaning','/services/luxury-residential-cleaning','/services/holidaycleananddecor','/services/privatejet-cleaning','/texas','/hawaii','/california','/about','/contact']);for(const path of publicRoutes){const page=renderPage(path);expect(page.head).toContain('https://www.tntdomestics.com'+path);expect(page.body.length).toBeGreaterThan(1000);}});
 it('never represents California as active in structured service areas',()=>{const {head}=renderPage('/');expect(head).toContain('&quot;areaServed&quot;:[&quot;Texas&quot;,&quot;Hawaii&quot;]'.replaceAll('&quot;','"'));});
});
