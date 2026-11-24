import { ShieldCheck } from 'lucide-react';

const StandardsList = ({ items }: { items: string[] }) => (
  <section className="section-padding bg-muted/30">
    <div className="container-narrow mx-auto">
      <div className="text-center mb-10">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">Standards</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Standards</h2>
      </div>
      <ul className="grid sm:grid-cols-2 gap-4">
        {items.map((s) => (
          <li key={s} className="flex items-start gap-3 bg-card border border-border/50 rounded-2xl p-5 shadow-soft">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span className="min-w-0 text-foreground">{s}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default StandardsList;
