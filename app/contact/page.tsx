import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactDetails } from "@/components/contact/contact-details"
import { ContactForm } from "@/components/contact/contact-form"
import { InstagramFeed } from "@/components/contact/instagram-feed"
import { MapSection } from "@/components/contact/map-section"

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <ContactHero />
      <ContactDetails />
      <ContactForm />
      <InstagramFeed />
      <MapSection />
      <Footer />
    </main>
  )
}
