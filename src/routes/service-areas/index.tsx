import { createFileRoute, Link } from "@tanstack/react-router";
import ContentPage from "@/components/ContentPage";
import { pageHead } from "@/lib/seo";
import hero from "@/assets/residential-hero.jpg";

const faqs = [
  {
    "q": "Do you serve homes outside these neighborhoods?",
    "a": "Our residential program is designed for estates and large private residences. If your home is nearby, call 830-500-5791 and we'll confirm availability."
  },
  {
    "q": "Do you clean commercial and government facilities in these markets too?",
    "a": "Yes. Commercial, government and post-construction work is quoted separately across Texas, California and Hawaii."
  }
];

export const Route = createFileRoute("/service-areas/")({
  staticData: { sitemap: true, sitemapLastmod: "2026-11-24" },
  head: () => ({
    ...pageHead("/service-areas/", "Luxury Home Cleaning Locations: San Antonio, Austin, CA & HI", "TNT Domestics provides estate housekeeping in Alamo Heights, Olmos Park, The Dominion, West Lake Hills, Tarrytown, Atherton, Beverly Hills, Kahala, Wailea and more.", { faqs }),
  }),
  component: Page,
});

const markets = [
  { to: "/service-areas/san-antonio/", name: "San Antonio", areas: "Alamo Heights, Olmos Park, Terrell Hills, Monte Vista, The Dominion, Shavano Park, Hill Country Village, Fair Oaks Ranch, Cordillera Ranch" },
  { to: "/service-areas/austin/", name: "Austin", areas: "West Lake Hills, Rollingwood, Tarrytown, Old Enfield, Pemberton Heights, Barton Creek, Lakeway, Spanish Oaks" },
  { to: "/service-areas/california/", name: "California", areas: "Atherton, Hillsborough, Woodside, Los Altos Hills, Beverly Hills, Bel Air, Malibu, Newport Beach, Rancho Santa Fe, La Jolla" },
  { to: "/service-areas/hawaii/", name: "Hawaii", areas: "Kahala, Diamond Head, Lanikai, Wailea, Kapalua, Kohala Coast, Princeville" },
] as const;

function Page() {
  return (
    <ContentPage
      eyebrow="Service Areas"
      heroImage={hero}
      heroImageAlt="Luxury residence interior"
      h1="Where We Provide Luxury Home Cleaning"
      answer="TNT Domestics focuses on private estates and high-end residences in four markets: San Antonio and Austin, where our crews work every week, plus contracted estate programs in California and Hawaii."
      faqs={faqs}
    >
      <section className="section-padding bg-background">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our markets</h2>
        <div className="container-wide mx-auto grid md:grid-cols-2 gap-6">
          {markets.map((m) => (
            <Link key={m.to} to={m.to} className="block rounded-2xl border border-border/50 bg-card p-8 hover-lift hover:border-primary/40">
              <h3 className="text-2xl font-bold text-foreground mb-2">{m.name}</h3>
              <p className="text-muted-foreground">{m.areas}</p>
              <span className="mt-4 inline-block text-primary font-medium">View {m.name} →</span>
            </Link>
          ))}
        </div>
      </section>
    </ContentPage>
  );
}
