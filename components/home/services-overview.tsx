"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Scissors, Package, Crown, Sparkles, Users } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Custom Costumes",
    description: "Bespoke dance attire for any style—classical, contemporary, folk, or fusion",
  },
  {
    icon: Package,
    title: "Costume Rentals",
    description: "Premium rental collection for all dance performances and events",
  },
  {
    icon: Crown,
    title: "Ornaments",
    description: "Jewelry and accessories for every dance form and style",
  },
  {
    icon: Sparkles,
    title: "Stage Props",
    description: "Performance-ready props for any production or recital",
  },
  {
    icon: Users,
    title: "Artist Consultation",
    description: "Personalized guidance for your unique artistic vision",
  },
]

export function ServicesOverview() {
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
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">What We Offer</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Our Services</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link
                key={index}
                href="/services"
                className={`group p-8 bg-card border border-border hover:border-gold transition-all duration-500 text-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
