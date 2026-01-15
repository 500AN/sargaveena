"use client"

import { useEffect, useRef, useState } from "react"

const galleryImages = [
  { src: "/elegant-bharatanatyam-costume-in-rich-silk-with-gol.jpg", alt: "Bharatanatyam costume" },
  { src: "/traditional-indian-dance-ornaments-including-temple-.jpg", alt: "Dance ornaments collection" },
  { src: "/mohiniyattam-costume-in-white-and-gold-kerala-kasav.jpg", alt: "Mohiniyattam costume" },
  { src: "/collection-of-classical-dance-stage-props-including.jpg", alt: "Stage props" },
  { src: "/kathakali-costume-and-elaborate-headpiece-display.jpg", alt: "Kathakali costume" },
  { src: "/detailed-close-up-of-dance-jewelry-with-temple-moti.jpg", alt: "Temple jewelry details" },
]

export function GallerySection() {
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
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Our Work</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Visual Gallery</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${index === 0 || index === 5 ? "row-span-2" : ""}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${index === 0 || index === 5 ? "aspect-[3/4]" : "aspect-square"}`}
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
