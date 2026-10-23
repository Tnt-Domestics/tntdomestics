import { describe, it, expect } from 'vitest';
import { business, aliases } from '../site/business';
import services from '../site/services.json';
import { quoteSchema } from '../site/quote-schema';
describe('business requirements',()=>{
 it('keeps the exact phone identity',()=>{expect(business.phone).toBe('(210) 807-1968');expect(business.telephone).toBe('+1-210-807-1968');});
 it('keeps the Google hours',()=>{expect(business.openingHours).toEqual(['Mo-Fr 08:00-19:00','Sa 08:00-18:00']);expect(business.hours).toBe('Mon–Fri 8 AM–7 PM, Sat 8 AM–6 PM');});
 it('lists only active states in areaServed',()=>{expect(business.areaServed).toEqual(['Texas','Hawaii']);});
 it('routes quote requests internally',()=>{expect(business.quotePath).toBe('/contact');});
 it('retains the legal name',()=>{expect(business.legalName).toBe('Tara Sydnor DBA TNT Domestics');});
 it('maps all five legacy service URLs',()=>{expect(Object.keys(aliases)).toHaveLength(5);for(const target of Object.values(aliases))expect(services.some(s=>s.path===target)).toBe(true);});
});
describe('quote input validation',()=>{
 const valid={name:'Test Customer',phone:'2108071968',email:'test@example.com',service:'Post-Construction Cleaning',location:'San Antonio, TX',details:'Construction final clean needed.'};
 it('accepts complete project details',()=>expect(quoteSchema.safeParse(valid).success).toBe(true));
 it('rejects unknown services',()=>expect(quoteSchema.safeParse({...valid,service:'unlisted'}).success).toBe(false));
 it('rejects invalid contact details',()=>expect(quoteSchema.safeParse({...valid,email:'invalid',phone:'abcdefg'}).success).toBe(false));
 it('rejects oversized project details',()=>expect(quoteSchema.safeParse({...valid,details:'x'.repeat(4001)}).success).toBe(false));
});