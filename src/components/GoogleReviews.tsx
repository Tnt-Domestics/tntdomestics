import { Star, ExternalLink, PenLine } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GOOGLE_LISTING_URL = 'https://share.google/P3jgf95vI4NxFNOHB';

const GoogleReviews = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Rating card */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-floating">
              <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                Google Reviews
              </p>
              <div className="flex items-end gap-4 mb-4">
                <span className="text-6xl font-bold text-foreground leading-none">5.0</span>
                <div className="flex gap-1 pb-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-6 h-6 text-accent fill-accent" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-8">
                Ratings shown are published on our public Google Business Profile listing.
              </p>
              <Button className="w-full group shadow-teal" asChild>
                <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer">
                  Read Reviews on Google
                  <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Reputation Is{' '}
              <span className="text-primary">Written by Our Clients</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              TNT Domestics is rated <strong className="text-foreground">5.0 on Google</strong>.
              Read what clients share about working with us — from government and commercial
              facilities to luxury residences and aircraft interiors — across Texas, California,
              and Hawaii.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Already a client? Your review helps facility managers, homeowners, and operators
              find a crew they can trust.
            </p>
            <Button variant="outline" size="lg" className="group" asChild>
              <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer">
                <PenLine className="w-4 h-4 mr-2" />
                Write a Review
                <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
