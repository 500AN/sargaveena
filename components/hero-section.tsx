"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/elegant-indian-classical-dancer-performing-bharata.jpg"
          alt="Classical Indian dancer in traditional costume"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/80" />
      </div>

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted &&
          [...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full opacity-40 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm uppercase tracking-[0.3em]">Est. in Ernakulam, Kerala</span>
            <div className="w-12 h-px bg-gold" />
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-background leading-[1.1] mb-6">
            Where Tradition
            <br />
            <span className="text-gold-gradient">Takes Form</span>
          </h1>

          {/* Subheadline */}
          <p className="text-background/80 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-4 leading-relaxed">
            Custom dance costumes, ornaments & stage props
          </p>
          <p className="text-gold text-base md:text-lg italic mb-12">
            Crafted with heritage. Perfected for performance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-foreground font-medium uppercase tracking-wider hover:bg-gold-dark transition-all duration-300"
            >
              Explore Our Craft
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-background/30 text-background font-medium uppercase tracking-wider hover:bg-background/10 transition-all duration-300"
            >
              Contact Sargaveena
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-background/50">
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-background/50 to-transparent" />
      </div>
    </section>
  )
}
