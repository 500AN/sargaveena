"use client"

import { useEffect, useRef, useState } from "react"

const ornamentCategories = [
  {
    category: "Classical",
    items: ["Temple Jewelry Sets", "Hair Ornaments (Rakodi, Jada)", "Headpieces (Chandra, Surya)"],
  },
  {
    category: "Traditional",
    items: ["Neck Pieces (Mango Mala, Lakshmi Haram)", "Waist Belts (Oddiyanam)", "Ankle Ornaments"],
  },
  {
    category: "Contemporary & Western",
    items: ["Modern Statement Pieces", "Minimalist Dance Jewelry", "Stage Performance Accessories"],
  },
  {
    category: "Folk & Fusion",
    items: ["Tribal Jewelry Sets", "Oxidized Silver Collections", "Colorful Bead Ornaments"],
  },
]

export function OrnamentsJewelry() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Service 03</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Ornaments & Jewelry</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Complete your look with our diverse collection of dance ornaments and jewelry. From authentic temple
              jewelry for classical performances to contemporary statement pieces for modern choreography - we offer
              jewelry for every dance style. Each piece is designed for comfort during long performances while ensuring
              you shine on stage.
            </p>

            <div className="space-y-6">
              {ornamentCategories.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h4 className="text-gold font-medium text-sm uppercase tracking-wider mb-3">{group.category}</h4>
                  <div className="space-y-2">
                    {group.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                        <span className="text-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <img
              src="/traditional-indian-temple-jewelry-set-gold-necklac.jpg"
              alt="Temple jewelry set"
              className="w-full aspect-[3/4] object-cover"
            />
            <img
              src="/modern-contemporary-dance-jewelry-silver-statement.jpg"
              alt="Contemporary dance jewelry"
              className="w-full aspect-[3/4] object-cover mt-8"
            />
            <img
              src="/colorful-folk-dance-jewelry-tribal-oxidized-silver.jpg"
              alt="Folk dance ornaments"
              className="w-full aspect-square object-cover -mt-4"
            />
            <img
              src="/hair-ornaments-and-headpieces-for-dance-gold-rakod.jpg"
              alt="Hair ornaments collection"
              className="w-full aspect-square object-cover mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
