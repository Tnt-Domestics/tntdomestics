import { createFileRoute, Link } from "@tanstack/react-router";
import ContentPage from "@/components/ContentPage";
import { pageHead } from "@/lib/seo";
import { serviceAreaFaqs } from "@/content/faqs";
import hero from "@/assets/residential-hero.jpg";

export const Route = createFileRoute("/service-areas/")({
  head: () => pageHead("/service-areas/", "Luxury Home Cleaning Locations: San Antonio, Austin, CA & HI", "TNT Domestics provides estate housekeeping in Alamo Heights, Olmos Park, The Dominion, West Lake Hills, Tarrytown, Atherton, Beverly Hills, Kahala, Wailea and more."),
  component: Page,
});

const markets = [
  { to: "/service-areas/san-antonio/", name: "San Antonio", areas: "Alamo Heights, Olmos Park, Terrell Hills, Monte Vista, The Dominion, Shavano Park, Cordillera Ranch" },
  { to: "/service-areas/austin/", name: "Austin", areas: "West Lake Hills, Rollingwood, Tarrytown, Old Enfield, Pemberton Heights, Barton Creek, Lakeway, Spanish Oaks" },
  { to: "/service-areas/california/", name: "California", areas: "Atherton, Hillsborough, Woodside, Beverly Hills, Bel Air, Malibu, Newport Beach, Rancho Santa Fe, La Jolla" },
  { to: "/service-areas/hawaii/", name: "Hawaii", areas: "Kahala, Diamond Head, Lanikai, Wailea, Kapalua, Kohala Coast, Princeville" },
] as const;

function Page() {
  return (
    <ContentPage
      eyebrow="Service Areas"
      heroImage={hero}
      heroImageAlt="Luxury residence interior"
      h1="Where We Provide Luxury Home Cleaning"
      answer="TNT Domestics is based in San Antonio and provides luxury home cleaning and estate housekeeping across San Antonio and Austin, with contracted programs in California and Hawaii. Pick your market below for neighborhood details."
      listEyebrow="Greater San Antonio"
      listHeadline="Also Serving Nearby Communities"
      items={[{ title: "New Braunfels" }, { title: "Boerne" }, { title: "Schertz" }, { title: "Seguin" }, { title: "Houston" }, { title: "Dallas" }]}
      faqs={serviceAreaFaqs}
    >
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto grid md:grid-cols-2 gap-6">
          {markets.map((m) => (
            <Link key={m.to} to={m.to} className="block rounded-2xl border border-border/50 bg-card p-8 hover-lift hover:border-primary/40">
              <h2 className="text-2xl font-bold text-foreground mb-2">{m.name}</h2>
              <p className="text-muted-foreground">{m.areas}</p>
              <span className="mt-4 inline-block text-primary font-medium">View {m.name} →</span>
            </Link>
          ))}
        </div>
      </section>
    </ContentPage>
  );
}
