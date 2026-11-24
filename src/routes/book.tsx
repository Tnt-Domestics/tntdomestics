import { createFileRoute } from "@tanstack/react-router";
import ContentPage from "@/components/ContentPage";
import { pageHead } from "@/lib/seo";
import { bookFaqs } from "@/content/faqs";
import hero from "@/assets/residential-4.jpg";

export const Route = createFileRoute("/book")({
  head: () => pageHead("/book/", "Book a Cleaning in San Antonio | TNT Domestics", "Book commercial, residential, post-construction, move-out or aircraft cleaning with TNT Domestics in San Antonio, TX. Pick a date and get a confirmed quote fast."),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      eyebrow="Book a Cleaning"
      heroImage={hero}
      heroImageAlt="Polished luxury living room"
      h1="Book a Cleaning in San Antonio"
      answer="Book commercial, residential, post-construction, move-out or aircraft cleaning with TNT Domestics in San Antonio, TX. Send your preferred date through the quote request and a coordinator confirms your time window and written quote."
      listEyebrow="What You Can Book"
      listHeadline="Choose Your Service"
      items={[
        { title: "Commercial janitorial" },
        { title: "Government facility cleaning" },
        { title: "Luxury residential housekeeping" },
        { title: "Post-construction cleaning" },
        { title: "Move-in / move-out cleaning" },
        { title: "Private jet cleaning" },
      ]}
      faqs={bookFaqs}
      ctaHeadline="Request Your Booking"
      ctaBody="Free to request. Nothing is charged until you approve the quote."
    />
  );
}
