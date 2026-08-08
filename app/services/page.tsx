import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { CustomCostumes } from "@/components/services/custom-costumes"
import { CostumeRentals } from "@/components/services/costume-rentals"
import { OrnamentsJewelry } from "@/components/services/ornaments-jewelry"
import { StageProps } from "@/components/services/stage-props"
import { ArtistConsultation } from "@/components/services/artist-consultation"
import { ServiceProcess } from "@/components/services/service-process"
import { WhoWeServe } from "@/components/services/who-we-serve"
import { ServicesFaq } from "@/components/services/services-faq"

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <ServicesHero />
      <CustomCostumes />
      <CostumeRentals />
      <OrnamentsJewelry />
      <StageProps />
      <ArtistConsultation />
      <ServiceProcess />
      <WhoWeServe />
      <ServicesFaq />
      <Footer />
    </main>
  )
}
