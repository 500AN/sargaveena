import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { StorySection } from "@/components/about/story-section"
import { TraditionSection } from "@/components/about/tradition-section"
import { ArtisansSection } from "@/components/about/artisans-section"
import { CommunitySection } from "@/components/about/community-section"
import { PromiseSection } from "@/components/about/promise-section"
import { GallerySection } from "@/components/about/gallery-section"

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <AboutHero />
      <StorySection />
      <TraditionSection />
      <ArtisansSection />
      <CommunitySection />
      <PromiseSection />
      <GallerySection />
      <Footer />
    </main>
  )
}
