"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/elegant-indian-classical-dance-costume-details-wit.jpg" alt="Dance costume details" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Decorative */}
          <div className="w-16 h-px bg-gold mx-auto mb-8" />

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-background leading-tight mb-6">
            Experience the Art.
            <br />
            <span className="text-gold">Wear the Tradition.</span>
          </h2>

          <p className="text-background/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Begin your journey with Sargaveena. Let us craft the perfect ensemble for your performance.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gold text-foreground font-medium uppercase tracking-wider hover:bg-gold-dark transition-all duration-300"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
