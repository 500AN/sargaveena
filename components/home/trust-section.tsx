"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Quote } from "lucide-react"

const trustPoints = [
  "Years of dedicated experience",
  "Trusted by professional artists",
  "Performance-ready designs",
  "Authentic traditional aesthetics",
  "Personalized service",
]

const testimonials = [
  {
    quote: "Sargaveena's attention to detail transformed my performance. The costume moved with me like a second skin.",
    author: "Lakshmi Menon",
    role: "Bharatanatyam Artist",
  },
  {
    quote:
      "Their understanding of classical forms is exceptional. Every ornament is crafted with reverence for tradition.",
    author: "Priya Nair",
    role: "Mohiniyattam Performer",
  },
]

export function TrustSection() {
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
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Our Promise</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Why Artists Trust Sargaveena</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Trust Points */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <ul className="space-y-6">
              {trustPoints.map((point, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-lg text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonials */}
          <div
            className={`space-y-8 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative p-8 bg-background border border-border">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20" />
                <p className="text-foreground leading-relaxed mb-6 italic">
                  {'"'}
                  {testimonial.quote}
                  {'"'}
                </p>
                <div>
                  <p className="font-serif text-gold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
