"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Heart, Target, Clock } from "lucide-react"

const promises = [
  { icon: Shield, title: "Authenticity", description: "True to traditional forms and techniques" },
  { icon: Heart, title: "Comfort", description: "Designed for hours of unrestricted movement" },
  { icon: Target, title: "Precision", description: "Every detail crafted to perfection" },
  { icon: Clock, title: "Reliability", description: "Delivered on time, every time" },
]

export function PromiseSection() {
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
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Our Commitment</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Our Promise to You</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Promises Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {promises.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className={`text-center p-6 lg:p-8 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-gold">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
