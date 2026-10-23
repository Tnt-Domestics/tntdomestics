import { Button } from '@/components/ui/button';
import { business } from './business';
import { ArrowRight, Clock, Phone } from 'lucide-react';

export default function QuoteForm() {
  return (
    <div className="border border-border rounded-lg bg-card p-8 space-y-6">
      <div>
        <p className="eyebrow">Request a quote</p>
        <h2 className="font-display text-3xl mb-3">Tell us about your property.</h2>
        <p className="text-muted-foreground leading-relaxed">
          Open our quote request form to share your service, property location and project
          details. We review every request and respond {business.response} with the scope,
          price and schedule before booking.
        </p>
      </div>
      <ul className="space-y-3 text-sm text-muted-foreground">
        <li className="flex items-start gap-2"><Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />Response {business.response}, {business.hours.toLowerCase()}.</li>
        <li className="flex items-start gap-2"><Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />Prefer to call? {business.phone}</li>
      </ul>
      <Button asChild size="lg" className="w-full">
        <a href={business.quotePath} target="_blank" rel="noopener noreferrer">
          Open Quote Request Form<ArrowRight />
        </a>
      </Button>
      <p className="text-xs text-muted-foreground">
        The form opens in a new tab. Submission does not confirm a booking.
      </p>
    </div>
  );
}
