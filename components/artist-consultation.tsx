"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ArtistConsultation() {
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
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Service 05</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">Artist Consultation</h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Not sure where to start? Our personalized consultation service helps you navigate the world of classical
            dance costumes and ornaments. Whether you{"'"}re preparing for your first arangetram or planning a major
            production, our experts will guide you through every decision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {["Costume selection advice", "Color coordination", "Complete look planning"].map((item, index) => (
              <div key={index} className="p-6 bg-background border border-border">
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-medium uppercase tracking-wider hover:bg-gold transition-all duration-300"
          >
            Book a Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
