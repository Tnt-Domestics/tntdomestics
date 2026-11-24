import type { ReactNode } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export type Faq = { q: string; a: ReactNode };

type Props = { faqs: Faq[]; title?: string; eyebrow?: string; className?: string };

const FaqSection = ({ faqs, title = 'Frequently Asked Questions', eyebrow = 'FAQ', className = 'bg-background' }: Props) => (
  <section className={`section-padding ${className}`}>
    <div className="container-narrow mx-auto">
      <div className="text-center mb-10">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">{eyebrow}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      </div>
      <Accordion type="multiple" className="bg-card rounded-2xl border border-border/50 shadow-soft px-6">
        {faqs.map((f) => (
          <AccordionItem key={f.q} value={f.q} className="last:border-b-0">
            <AccordionTrigger className="text-left text-base md:text-lg text-foreground hover:no-underline hover:text-primary">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
