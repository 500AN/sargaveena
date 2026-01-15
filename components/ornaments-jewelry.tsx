"use client"

import { useEffect, useRef, useState } from "react"

const ornamentCategories = [
  "Temple Jewelry Sets",
  "Hair Ornaments (Rakodi, Jada)",
  "Headpieces (Chandra, Surya)",
  "Neck Pieces (Mango Mala, Lakshmi Haram)",
  "Arm & Hand Jewelry",
  "Waist Belts (Oddiyanam)",
  "Ankle & Foot Ornaments",
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
              Complete your look with our authentic collection of classical dance ornaments. Each piece is crafted to
              replicate traditional temple jewelry, designed for comfort during long performances while maintaining the
              visual authenticity that classical dance demands.
            </p>

            <div className="space-y-3">
              {ornamentCategories.map((category, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-foreground">{category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <img
              src="/traditional-indian-dance-ornaments-including-temple-.jpg"
              alt="Temple jewelry set"
              className="w-full aspect-square object-cover"
            />
            <img
              src="/detailed-close-up-of-dance-jewelry-with-temple-moti.jpg"
              alt="Dance ornament details"
              className="w-full aspect-square object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
