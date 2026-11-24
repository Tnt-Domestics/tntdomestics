type Props = { headline: string; eyebrow?: string; areas: { name: string; blurb: string }[] };

const NeighborhoodList = ({ headline, eyebrow = 'Neighborhoods', areas }: Props) => (
  <section className="section-padding bg-background">
    <div className="container-wide mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">{eyebrow}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{headline}</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {areas.map((a) => (
          <div key={a.name} className="rounded-2xl border border-border/50 p-6 bg-card">
            <h3 className="text-xl font-semibold text-primary mb-2">{a.name}</h3>
            <p className="text-muted-foreground leading-relaxed">{a.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NeighborhoodList;
