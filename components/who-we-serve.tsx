"use client"

import { useEffect, useRef, useState } from "react"
import { User, School, Building, Theater } from "lucide-react"

const clientTypes = [
  {
    icon: User,
    title: "Solo Artists",
    description: "Individual performers preparing for recitals, arangetrams, or professional performances",
  },
  {
    icon: School,
    title: "Dance Schools",
    description: "Academic institutions requiring costumes for students and annual performances",
  },
  {
    icon: Building,
    title: "Cultural Institutions",
    description: "Organizations hosting cultural events and classical dance programs",
  },
  {
    icon: Theater,
    title: "Stage Productions",
    description: "Theater companies and production houses creating dance-drama performances",
  },
]

export function WhoWeServe() {
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
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Our Clients</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Who We Serve</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientTypes.map((client, index) => {
            const Icon = client.icon
            return (
              <div
                key={index}
                className={`p-8 bg-background border border-border hover:border-gold transition-all duration-500 text-center ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center text-gold">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-3">{client.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{client.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
