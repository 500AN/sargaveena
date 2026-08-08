"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Sparkles, UserCheck, Package } from "lucide-react"

const rentalBenefits = [
  { icon: Shield, title: "Hygiene Assured", description: "Professional cleaning after every use" },
  { icon: Sparkles, title: "Premium Quality", description: "Well-maintained, performance-ready costumes" },
  { icon: UserCheck, title: "Fitting Service", description: "Adjustments available for perfect fit" },
  { icon: Package, title: "Complete Sets", description: "Costumes with matching accessories" },
]

export function CostumeRentals() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <img
              src="/rack-of-colorful-classical-indian-dance-costumes-f.jpg"
              alt="Dance costume rental collection"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold -z-10" />
          </div>

          {/* Content */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Service 02</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Costume Rentals</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Access our extensive collection of premium dance costumes for your performances, exams, or special events.
              Our rental service offers high-quality, well-maintained costumes across all classical dance forms, with
              professional cleaning and fitting services included.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {rentalBenefits.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex gap-3">
                    <Icon className="w-5 h-5 text-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
