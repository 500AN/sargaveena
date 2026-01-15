"use client"

import { useEffect, useState } from "react"

export function ContactHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-foreground">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/elegant-indian-classical-dance-costume-details-wit.jpg"
            alt="Dance costume details"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm uppercase tracking-[0.3em]">Get in Touch</span>
            <div className="w-12 h-px bg-gold" />
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-background leading-[1.1] mb-6">
            Contact Us
          </h1>

          <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We{"'"}d love to hear from you. Visit our store or reach out—we{"'"}re here to help bring your vision to
            life.
          </p>
        </div>
      </div>
    </section>
  )
}
