"use client"

import { useEffect, useRef, useState } from "react"

const processes = [
  {
    title: "Master Tailors",
    description:
      "Our experienced tailors bring decades of expertise, understanding the unique requirements of each dance form.",
    image: "/skilled-tailor-working-on-traditional-indian-dance-.jpg",
  },
  {
    title: "Ornament Artisans",
    description: "Specialized craftspeople create authentic jewelry pieces that complement every costume perfectly.",
    image: "/artisan-crafting-traditional-indian-dance-jewelry-w.jpg",
  },
  {
    title: "Fabric Specialists",
    description: "Experts in silk and traditional textiles ensure every material meets our exacting standards.",
    image: "/close-up-of-hands-selecting-premium-silk-fabric-for.jpg",
  },
]

export function ArtisansSection() {
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
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">The Makers</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Our Artisans & Process</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            Behind every Sargaveena creation is a team of dedicated artisans whose skills have been honed over
            generations.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((item, index) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
