import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { PhilosophySection } from "@/components/home/philosophy-section"
import { CraftsmanshipSection } from "@/components/home/craftsmanship-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { DanceFormsSection } from "@/components/home/dance-forms-section"
import { TrustSection } from "@/components/home/trust-section"
import { LocationSection } from "@/components/home/location-section"
import { CtaSection } from "@/components/home/cta-section"


export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <HeroSection />
      <PhilosophySection />
      <CraftsmanshipSection />
      <ServicesOverview />
      <DanceFormsSection />
      <TrustSection />
      <LocationSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
