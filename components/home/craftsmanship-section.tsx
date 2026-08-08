"use client"

import { useEffect, useRef, useState } from "react"

const craftDetails = [
  {
    title: "Fabric Selection",
    description: "Premium silks and authentic materials sourced for elegance and comfort",
    image: "/luxurious-silk-fabric-with-gold-embroidery-for-ind.jpg",
  },
  {
    title: "Traditional Patterns",
    description: "Time-honored designs preserving the essence of classical art forms",
    image: "/intricate-traditional-indian-embroidery-pattern-wi.jpg",
  },
  {
    title: "Comfort & Durability",
    description: "Engineered for unrestricted movement and lasting performance",
    image: "/detailed-stitching-and-pleats-of-bharatanatyam-dan.jpg",
  },
]

export function CraftsmanshipSection() {
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
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">The Art of Creation</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Our Craftsmanship</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Craft Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {craftDetails.map((item, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="relative overflow-hidden mb-6">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
