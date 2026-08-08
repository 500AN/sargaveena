"use client"

import { useEffect, useRef, useState } from "react"

export function PhilosophySection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Element */}
          <div
            className={`flex justify-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <div className="w-24 h-px bg-gold" />
          </div>

          <blockquote
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8">
              {'"'}Every stitch carries passion, every ornament reflects artistry, and every costume tells a story of
              dedication to the performing arts—no matter the dance form.{'"'}
            </p>
          </blockquote>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {[
              {
                title: "Every Style Welcome",
                description: "From classical to contemporary, folk to fusion—we craft for every dance form",
              },
              {
                title: "Precision Craftsmanship",
                description: "Every detail meticulously crafted for authentic expression and comfort",
              },
              {
                title: "Supporting Artists",
                description: "Empowering dancers with costumes that elevate their unique art",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="font-serif text-lg text-gold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
