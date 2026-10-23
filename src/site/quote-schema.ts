import { z } from 'zod';
import services from './services.json';
export const quoteSchema = z.object({
 name: z.string().trim().min(1, 'Enter your name.').max(100),
 phone: z.string().trim().min(7, 'Enter a valid phone number.').max(30).regex(/^[+()\d\s.-]+$/, 'Enter a valid phone number.').refine(v=>v.replace(/\D/g,'').length>=7,'Enter a valid phone number.'),
 email: z.string().trim().email('Enter a valid email address.').max(255),
 service: z.string().refine(v=>services.some(s=>s.title===v) || v==='Other','Choose a service.'),
 location: z.string().trim().min(1, 'Enter the property location.').max(250),
 details: z.string().trim().min(10, 'Please provide at least 10 characters of project details.').max(4000),
});
