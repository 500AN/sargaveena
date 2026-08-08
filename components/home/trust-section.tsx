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

// Add as many testimonials here as you like — they'll rotate two at a time.
const testimonials = [
  {
    quote:
      "Sargaveena's attention to detail transformed my performance. The costume moved with me like a second skin.",
    author: "Lakshmi Menon",
    role: "Bharatanatyam Artist",
  },
  {
    quote:
      "Their understanding of classical forms is exceptional. Every ornament is crafted with reverence for tradition.",
    author: "Priya Nair",
    role: "Mohiniyattam Performer",
  },
  {
    quote:
      "From the first fitting to the final stitch, the team understood exactly what my performance needed. Truly a partner, not just a tailor.",
    author: "Anjali Warrier",
    role: "Kuchipudi Dancer",
  },
  {
    quote:
      "The craftsmanship is unmatched. I have worn many costumes over the years, but nothing compares to the comfort and grace of theirs.",
    author: "Meera Krishnan",
    role: "Kathakali Performer",
  },
  {
    quote:
      "Sargaveena captured the essence of tradition while making sure I could move freely on stage. A rare balance to strike.",
    author: "Divya Pillai",
    role: "Odissi Dancer",
  },
  {
    quote:
      "Every ornament and drape felt like it was made just for me. The team's dedication to authenticity really shows.",
    author: "Radhika Menon",
    role: "Bharatanatyam Artist",
  },
]

const MAX_QUOTE_LENGTH = 140

function truncateQuote(text: string, maxLength: number) {
  if (text.length <= maxLength) return text
  const trimmed = text.slice(0, maxLength)
  const lastSpace = trimmed.lastIndexOf(" ")
  return `${trimmed.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`
}

const ROTATE_INTERVAL_MS = 5000
const PAIR_SIZE = 2

export function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [pairIndex, setPairIndex] = useState(0)
  const [fade, setFade] = useState(true)

  const totalPairs = Math.ceil(testimonials.length / PAIR_SIZE)

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

  useEffect(() => {
    if (totalPairs <= 1) return

    const interval = setInterval(() => {
      setFade(false)
      const timeout = setTimeout(() => {
        setPairIndex((prev) => (prev + 1) % totalPairs)
        setFade(true)
      }, 300)
      return () => clearTimeout(timeout)
    }, ROTATE_INTERVAL_MS)

    return () => clearInterval(interval)
  }, [totalPairs])

  const visibleTestimonials = testimonials.slice(pairIndex * PAIR_SIZE, pairIndex * PAIR_SIZE + PAIR_SIZE)

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
            <div className={`space-y-8 transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={`${pairIndex}-${index}`}
                  className="relative p-8 bg-background border border-border min-h-[180px] flex flex-col justify-between"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20" />
                  <p className="text-foreground leading-relaxed mb-6 italic">
                    {'"'}
                    {truncateQuote(testimonial.quote, MAX_QUOTE_LENGTH)}
                    {'"'}
                  </p>
                  <div>
                    <p className="font-serif text-gold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Rotation indicator dots */}
            {totalPairs > 1 && (
              <div className="flex items-center justify-center gap-2 pt-2">
                {Array.from({ length: totalPairs }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setFade(false)
                      setTimeout(() => {
                        setPairIndex(index)
                        setFade(true)
                      }, 300)
                    }}
                    aria-label={`Show testimonials ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === pairIndex ? "w-6 bg-gold" : "w-1.5 bg-gold/20"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}