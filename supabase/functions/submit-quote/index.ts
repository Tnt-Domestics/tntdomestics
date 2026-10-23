import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { z } from 'https://esm.sh/zod@3.25.76';
const headers={'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type','Access-Control-Allow-Methods':'POST, OPTIONS'};
const schema=z.object({name:z.string().trim().min(1).max(100),phone:z.string().trim().min(7).max(30).regex(/^[+()\d\s.-]+$/).refine(v=>v.replace(/\D/g,'').length>=7),email:z.string().trim().email().max(255),service:z.enum(['Post-Construction Cleaning','Commercial Janitorial Cleaning','Government Custodial Services','Move-In & Move-Out Cleaning','Luxury Residential Cleaning','Holiday Cleaning & Decor','Private Jet Cleaning','Other / upcoming California availability']),location:z.string().trim().min(1).max(250),details:z.string().trim().min(10).max(4000),submission_key:z.string().uuid(),website:z.string().max(0).optional()});
Deno.serve(async req=>{
 const reply=(body:unknown,status=200)=>Response.json(body,{status,headers});
 if(req.method==='OPTIONS')return new Response(null,{headers});
 if(req.method!=='POST')return reply({error:'Method not allowed'},405);
 if(Number(req.headers.get('content-length')||0)>16000)return reply({error:'Request too large'},413);
 try {
  const text=await req.text();if(text.length>16000)return reply({error:'Request too large'},413);
  const parsed=schema.safeParse(JSON.parse(text));if(!parsed.success)return reply({error:'Please check the form fields'},400);
  const url=Deno.env.get('SUPABASE_URL'),key=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');if(!url||!key)return reply({error:'Service unavailable'},503);
  const db=createClient(url,key);
  const ip=req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(ip+key));const ip_hash=Array.from(new Uint8Array(digest)).map(v=>v.toString(16).padStart(2,'0')).join('');
  const {data:existing}=await db.from('quote_requests').select('id').eq('submission_key',parsed.data.submission_key).maybeSingle();if(existing)return reply({id:existing.id});
  const {count,error:limitError}=await db.from('quote_requests').select('id',{count:'exact',head:true}).eq('ip_hash',ip_hash).gte('created_at',new Date(Date.now()-3600000).toISOString());
  if(limitError)return reply({error:'Service unavailable'},503);if((count??0)>=5)return reply({error:'Please call to discuss your request'},429);
  const {website,...lead}=parsed.data;const {data,error}=await db.from('quote_requests').insert({...lead,ip_hash}).select('id').single();
  if(error)return reply({error:'Unable to save request'},500);return reply({id:data.id});
 }catch{return reply({error:'Invalid request'},400);}
});
