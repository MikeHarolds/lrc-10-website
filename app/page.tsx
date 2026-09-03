import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutConference from "@/components/AboutConference";
import ThemeSection from "@/components/ThemeSection";
import CultureReasons from "@/components/CultureReasons";
import FiveWorlds from "@/components/FiveWorlds";
import EventDetails from "@/components/EventDetails";
import Speakers from "@/components/Speakers";
import Audience from "@/components/Audience";
import Experience from "@/components/Experience";
import Program from "@/components/Program";
import WhyAttend from "@/components/WhyAttend";
import Tickets from "@/components/Tickets";
import Testimonials from "@/components/Testimonials";
import ImpactStats from "@/components/ImpactStats";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import Legacy from "@/components/Legacy";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { site, event, links, faqs } from "@/data/conference";

function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: site.name,
    description: site.description,
    startDate: "2026-10-31T10:00:00+01:00",
    endDate: "2026-11-01T18:00:00+01:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Independence Layout",
        addressLocality: "Enugu",
        addressCountry: "NG",
      },
    },
    organizer: {
      "@type": "Organization",
      name: site.organiser,
      url: links.impactfield,
    },
    offers: {
      "@type": "Offer",
      url: links.register,
      price: "0",
      priceCurrency: "NGN",
      availability: "https://schema.org/InStock",
    },
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main id="main">
        <Hero />
        <AboutConference />
        <ThemeSection />
        <CultureReasons />
        <FiveWorlds />
        <EventDetails />
        <Speakers />
        <Audience />
        <Experience />
        <Program />
        <WhyAttend />
        <Tickets />
        <Testimonials />
        <ImpactStats />
        <FAQ />
        <Partners />
        <Legacy />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
