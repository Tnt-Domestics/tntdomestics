import { useState, type FormEvent, type ReactNode } from 'react';
import { useServerFn } from '@tanstack/react-start';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SERVICES, CONTACT_METHODS, REFERRAL_SOURCES, isService, serviceLabel, splitName, readAttribution, readCookie, todayISO } from '@/lib/booking';
import { submitBooking } from '@/lib/booking.functions';

const PROPERTY_TYPES = ['Private residence', 'Estate', 'Penthouse / condo', 'Second home / vacation home', 'Office', 'Government facility', 'Medical / clinic', 'Retail / hospitality', 'New construction / renovation', 'Private aircraft', 'Other'];
const FREQUENCIES = ['One-time', 'Weekly', 'Twice weekly', 'Bi-weekly', 'Monthly', 'Seasonal / as needed', 'Nightly (commercial)', 'Not sure yet'];
const TIME_WINDOWS = ['Morning (8am–12pm)', 'Afternoon (12pm–4pm)', 'Evening (4pm–8pm)', 'After hours / overnight', 'Flexible'];

type Values = {
  service: string; property_type: string; approx_size: string; frequency: string; preferred_date: string; time_window: string;
  full_name: string; company: string; phone: string; email: string; address: string; city: string; zip: string; notes: string;
  neighborhood: string; preferred_contact_method: string; referral_source: string; referred_by: string;
  sms_consent: boolean; website: string;
};
type Errors = Partial<Record<keyof Values, string>>;

export function validateBooking(v: Values, today: string): Errors {
  const e: Errors = {};
  if (!isService(v.service)) e.service = 'Choose a service.';
  if (!v.property_type) e.property_type = 'Choose a property type.';
  if (!v.approx_size.trim()) e.approx_size = 'Give an approximate size.';
  if (!v.frequency) e.frequency = 'Choose a frequency.';
  if (!/^\d{4}-\d{2}-\d{2}$/.test(v.preferred_date)) e.preferred_date = 'Pick a preferred date.';
  else if (v.preferred_date < today) e.preferred_date = 'Pick today or a future date.';
  if (!v.time_window) e.time_window = 'Choose a time window.';
  if (v.full_name.trim().length < 2) e.full_name = 'Enter your full name.';
  if (v.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a 10-digit phone number.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = 'Enter a valid email.';
  if (!v.neighborhood.trim()) e.neighborhood = 'Enter your neighborhood or community.';
  if (!CONTACT_METHODS.some((method) => method === v.preferred_contact_method)) e.preferred_contact_method = 'Choose a preferred contact method.';
  if (v.city.trim().length < 2) e.city = 'Enter the city.';
  if (!/^\d{5}$/.test(v.zip.trim())) e.zip = 'ZIP must be 5 digits.';
  return e;
}

declare global {
  interface Window { fbq?: (...args: unknown[]) => void; dataLayer?: unknown[] }
}

const inputCls = 'w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary/40 aria-invalid:border-destructive';

function Field({ label, name, error, optional, children }: { label: string; name: string; error?: string | undefined; optional?: boolean; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <label htmlFor={name} className="block text-sm font-medium text-foreground mb-1.5">
        {label} {optional && <span className="text-muted-foreground font-normal">(optional)</span>}
      </label>
      {children}
      {error && <p id={`${name}-error`} className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

export default function BookingForm({ initialService }: { initialService?: string | undefined }) {
  const send = useServerFn(submitBooking);
  const [v, setV] = useState<Values>({
    service: isService(initialService) ? initialService : '', property_type: '', approx_size: '', frequency: '', preferred_date: '', time_window: '',
    full_name: '', company: '', phone: '', email: '', address: '', city: '', zip: '', notes: '', neighborhood: '', preferred_contact_method: '', referral_source: '', referred_by: '', sms_consent: false, website: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const set = (k: keyof Values) => (ev: { target: { value: string } }) => {
    setV((p) => ({ ...p, [k]: ev.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };
  const a = (k: keyof Values) => ({ id: k, name: k, 'aria-invalid': !!errors[k] || undefined, 'aria-describedby': errors[k] ? `${k}-error` : undefined });

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (v.website) { setStatus('done'); return; } // honeypot: silently drop bots
    const errs = validateBooking(v, todayISO());
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      if (first) document.getElementById(first)?.focus();
      return;
    }
    setStatus('sending');
    const event_id = crypto.randomUUID();
    const service_label = serviceLabel(v.service);
    const attr = readAttribution();
    const { website: _hp, ...fields } = v;
    try {
      const res = await send({
        data: {
          ...fields, referred_by: v.referral_source === 'Referral from a friend or client' ? v.referred_by : '', ...splitName(v.full_name), event_id, service_label,
          page_url: window.location.href, referrer: document.referrer, submitted_at: new Date().toISOString(),
          utm_source: attr['utm_source'] ?? '', utm_medium: attr['utm_medium'] ?? '', utm_campaign: attr['utm_campaign'] ?? '',
          utm_term: attr['utm_term'] ?? '', utm_content: attr['utm_content'] ?? '', gclid: attr['gclid'] ?? '', fbclid: attr['fbclid'] ?? '',
          _fbp: readCookie('_fbp'), _fbc: readCookie('_fbc'),
        },
      });
      if (!res.ok) { setStatus('error'); return; }
      window.fbq?.('track', 'Lead', { content_name: service_label }, { eventID: event_id });
      (window.dataLayer = window.dataLayer || []).push({ event: 'booking_submitted' });
      setStatus('done');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div className="glass-card rounded-2xl p-8 md:p-10 text-center" role="status">
        <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Your consultation request was received.</h2>
        <p className="text-muted-foreground">A TNT Domestics coordinator will contact you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="glass-card rounded-2xl p-6 md:p-8 space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Service" name="service" error={errors.service}>
          <select {...a('service')} className={inputCls} value={v.service} onChange={set('service')}>
            <option value="">Select a service</option>
            {SERVICES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        </Field>
        <Field label="Property type" name="property_type" error={errors.property_type}>
          <select {...a('property_type')} className={inputCls} value={v.property_type} onChange={set('property_type')}>
            <option value="">Select a property type</option>
            {PROPERTY_TYPES.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field label="Approx. size" name="approx_size" error={errors.approx_size}>
          <input {...a('approx_size')} className={inputCls} value={v.approx_size} onChange={set('approx_size')} placeholder="e.g. 6,000 sq ft or 5 bed / 6 bath" maxLength={60} />
        </Field>
        <Field label="Frequency" name="frequency" error={errors.frequency}>
          <select {...a('frequency')} className={inputCls} value={v.frequency} onChange={set('frequency')}>
            <option value="">Select frequency</option>
            {FREQUENCIES.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field label="Preferred date" name="preferred_date" error={errors.preferred_date}>
          <input type="date" {...a('preferred_date')} className={inputCls} value={v.preferred_date} onChange={set('preferred_date')} min={todayISO()} />
        </Field>
        <Field label="Time window" name="time_window" error={errors.time_window}>
          <select {...a('time_window')} className={inputCls} value={v.time_window} onChange={set('time_window')}>
            <option value="">Select a time window</option>
            {TIME_WINDOWS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full name" name="full_name" error={errors.full_name}>
          <input {...a('full_name')} className={inputCls} value={v.full_name} onChange={set('full_name')} autoComplete="name" maxLength={120} />
        </Field>
        <Field label="Company" name="company" optional>
          <input {...a('company')} className={inputCls} value={v.company} onChange={set('company')} autoComplete="organization" maxLength={120} />
        </Field>
        <Field label="Phone" name="phone" error={errors.phone}>
          <input type="tel" {...a('phone')} className={inputCls} value={v.phone} onChange={set('phone')} autoComplete="tel" maxLength={30} />
        </Field>
        <Field label="Email" name="email" error={errors.email}>
          <input type="email" {...a('email')} className={inputCls} value={v.email} onChange={set('email')} autoComplete="email" maxLength={255} />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Neighborhood or community" name="neighborhood" error={errors.neighborhood}>
          <input {...a('neighborhood')} className={inputCls} value={v.neighborhood} onChange={set('neighborhood')} placeholder="e.g. Olmos Park, The Dominion, West Lake Hills" maxLength={200} required />
        </Field>
        <Field label="Street address" name="address" optional>
          <input {...a('address')} aria-describedby="address-help" className={inputCls} value={v.address} onChange={set('address')} autoComplete="street-address" maxLength={200} />
          <p id="address-help" className="mt-1 text-xs text-muted-foreground">You can share this when we speak.</p>
        </Field>
        <Field label="City" name="city" error={errors.city}>
          <input {...a('city')} className={inputCls} value={v.city} onChange={set('city')} autoComplete="address-level2" maxLength={80} />
        </Field>
        <Field label="ZIP" name="zip" error={errors.zip}>
          <input {...a('zip')} className={inputCls} value={v.zip} onChange={set('zip')} inputMode="numeric" autoComplete="postal-code" maxLength={5} />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Preferred contact method" name="preferred_contact_method" error={errors.preferred_contact_method}>
          <select {...a('preferred_contact_method')} className={inputCls} value={v.preferred_contact_method} onChange={set('preferred_contact_method')} required>
            <option value="">Select a contact method</option>
            {CONTACT_METHODS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field label="How did you hear about us?" name="referral_source" optional>
          <select {...a('referral_source')} className={inputCls} value={v.referral_source} onChange={set('referral_source')}>
            <option value="">Select a source</option>
            {REFERRAL_SOURCES.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        {v.referral_source === 'Referral from a friend or client' && (
          <Field label="Who referred you?" name="referred_by" optional>
            <input {...a('referred_by')} className={inputCls} value={v.referred_by} onChange={set('referred_by')} maxLength={120} />
          </Field>
        )}
      </div>

      <Field label="Notes" name="notes" optional>
        <textarea {...a('notes')} className={inputCls} rows={4} value={v.notes} onChange={set('notes')} maxLength={2000} placeholder="Access instructions, special surfaces, pets, priorities…" />
      </Field>

      {/* Honeypot: hidden from people, tempting to bots */}
      <div aria-hidden="true" hidden className="hidden">
        <input id="website" name="website" tabIndex={-1} autoComplete="off" value={v.website} onChange={set('website')} />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
        <input type="checkbox" className="mt-1 h-4 w-4 accent-primary shrink-0" checked={v.sms_consent} onChange={(e) => setV((p) => ({ ...p, sms_consent: e.target.checked }))} />
        <span>Text me appointment confirmations and reminders from TNT Domestics. Message and data rates may apply. Reply STOP to opt out.</span>
      </label>

      {status === 'error' && (
        <p className="text-sm text-destructive" role="alert">We couldn't send your request. Please try again or call <a className="underline" href="tel:830-500-5791">830-500-5791</a>.</p>
      )}

      <Button type="submit" size="lg" className="w-full shadow-teal" disabled={status === 'sending'}>
        {status === 'sending' ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending…</> : 'Request My Consultation'}
      </Button>
      <p className="text-sm text-muted-foreground text-center">We'll contact you within one business day to discuss your needs. Your written care plan and quote come before anything is scheduled.</p>
    </form>
  );
}
