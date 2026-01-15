"use client"

import { useEffect, useRef, useState } from "react"
import { Instagram, ExternalLink } from "lucide-react"

const instagramPosts = [
  { id: 1, image: "/elegant-bharatanatyam-costume-in-rich-silk-with-gol.jpg", alt: "Bharatanatyam costume" },
  { id: 2, image: "/traditional-indian-dance-ornaments-including-temple-.jpg", alt: "Dance ornaments" },
  { id: 3, image: "/mohiniyattam-costume-in-white-and-gold-kerala-kasav.jpg", alt: "Mohiniyattam costume" },
  { id: 4, image: "/kathakali-costume-and-elaborate-headpiece-display.jpg", alt: "Kathakali costume" },
  { id: 5, image: "/detailed-close-up-of-dance-jewelry-with-temple-moti.jpg", alt: "Temple jewelry" },
  { id: 6, image: "/bharatanatyam-dancer-in-traditional-costume-with-e.jpg", alt: "Dancer in costume" },
]

export function InstagramFeed() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-6 h-6 text-gold" />
            <span className="text-gold text-sm uppercase tracking-[0.3em]">Follow Us</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">@sargaveena_</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href="https://www.instagram.com/sargaveena_/"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-square overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-300 flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-10 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <a
            href="https://www.instagram.com/sargaveena_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-gold transition-colors"
          >
            <span className="text-sm uppercase tracking-wider">View more on Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
