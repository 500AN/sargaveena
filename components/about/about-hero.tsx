"use client"

import { useEffect, useState } from "react"

export function AboutHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/artisan-hands-working-on-traditional-indian-dance-.jpg"
          alt="Artisan crafting dance costume"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold text-sm uppercase tracking-[0.3em]">Our Story</span>
            <div className="w-12 h-px bg-gold" />
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-background leading-[1.1] mb-6">
            A Legacy of
            <br />
            <span className="text-gold-gradient">Artistry & Passion</span>
          </h1>

          <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover the passion and dedication that drives every creation at Sargaveena
          </p>
        </div>
      </div>
    </section>
  )
}
