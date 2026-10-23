import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { quoteSchema } from './quote-schema';
import services from './services.json';
import { ArrowRight, Loader2 } from 'lucide-react';
export default function QuoteForm() {
 const [busy,setBusy]=useState(false); const [error,setError]=useState(''); const [fields,setFields]=useState<Record<string,string>>({});
 async function submit(event:FormEvent<HTMLFormElement>) {
  event.preventDefault(); const form=event.currentTarget; const values=Object.fromEntries(new FormData(form)); const parsed=quoteSchema.safeParse(values);
  if(!parsed.success){setFields(Object.fromEntries(parsed.error.issues.map(i=>[String(i.path[0]),i.message])));return;}
  setFields({}); setError(''); setBusy(true);
  try { const { supabase }=await import('@/integrations/supabase/client');
   const {data,error:failed}=await supabase.functions.invoke('submit-quote',{body:{...parsed.data,website:values.website,submission_key:crypto.randomUUID()}});
   if(failed || !data?.id) throw new Error('failed');
   sessionStorage.setItem('tnt-quote-reference',data.id); window.location.assign('/thank-you');
  } catch {setError('Your request could not be sent. Please try again or call (210) 807-1968.');setBusy(false);}
 }
 const input='w-full rounded-md border border-input bg-background px-3 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring';
 return <form onSubmit={submit} noValidate className="space-y-6">
  <div className="grid gap-5 sm:grid-cols-2">{[['name','Name',100,'text'],['phone','Phone',30,'tel'],['email','Email',255,'email'],['location','Property location',250,'text']].map(([name,label,max,type])=><label key={name} className="block text-sm font-medium">{label}<input required name={String(name)} type={String(type)} maxLength={Number(max)} autoComplete={name==='name'?'name':name==='phone'?'tel':name==='email'?'email':'off'} aria-invalid={Boolean(fields[String(name)])} className={input+' mt-2'} />{fields[String(name)]&&<span className="mt-1 block text-destructive">{fields[String(name)]}</span>}</label>)}</div>
  <label className="block text-sm font-medium">Service needed<select name="service" required defaultValue="" className={input+' mt-2'}><option value="" disabled>Select a service</option>{services.map(s=><option key={s.path}>{s.title}</option>)}<option>Other / upcoming California availability</option></select>{fields.service&&<span className="block text-destructive">{fields.service}</span>}</label>
  <label className="block text-sm font-medium">Project details<textarea name="details" required rows={5} maxLength={4000} className={input+' mt-2'} placeholder="Property size, timing, cleaning priorities and access requirements"/>{fields.details&&<span className="block text-destructive">{fields.details}</span>}</label>
  <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
  <p className="text-sm text-muted-foreground">By submitting, you agree that TNT Domestics may contact you about this request. Your details are used to review and respond to your project.</p>
  {error&&<p role="alert" className="text-destructive">{error}</p>}
  <Button type="submit" size="lg" disabled={busy}>{busy?<Loader2 className="animate-spin"/>:<ArrowRight/>}{busy?'Sending…':'Send Quote Request'}</Button>
 </form>;
}
