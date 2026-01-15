"use client"

import { useEffect, useRef, useState } from "react"

const traditions = [
  {
    title: "Temple Art Influence",
    description:
      "Our designs draw inspiration from the magnificent sculptures and paintings adorning South Indian temples, where dance was first offered as worship.",
  },
  {
    title: "Cultural Symbolism",
    description:
      "Every pattern, every motif carries meaning—from the sacred lotus to the intricate kolam patterns that ground our designs in spiritual significance.",
  },
  {
    title: "Classical Forms",
    description:
      "We maintain unwavering respect for the precise requirements of each dance form, understanding that costume is not separate from the art—it is integral to it.",
  },
]

export function TraditionSection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Our Heritage</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Rooted in Tradition</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Tradition Points */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {traditions.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-1 bg-gold flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <img
              src="/ancient-south-indian-temple-sculpture-of-a-dancer-.jpg"
              alt="Temple sculpture depicting classical dancer"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 border-2 border-gold/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
