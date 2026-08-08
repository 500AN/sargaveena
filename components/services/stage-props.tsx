"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Scale, Lightbulb } from "lucide-react"

const propFeatures = [
  { icon: Shield, title: "Safety First", description: "Lightweight materials, secure construction" },
  { icon: Scale, title: "Balanced Design", description: "Easy to handle during performances" },
  { icon: Lightbulb, title: "Stage Ready", description: "Designed for visual impact under lights" },
]

export function StageProps() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative order-2 lg:order-1 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <img
              src="/collection-of-classical-dance-stage-props-including.jpg"
              alt="Classical dance stage props"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>

          {/* Content */}
          <div
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Service 04</span>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">Stage Props & Accessories</h2>
            <p className="text-background/70 leading-relaxed mb-8">
              Enhance your storytelling with our collection of traditional stage props. From decorative lamps and
              garlands to character-specific items like the bow and arrow for Rama or the flute for Krishna, our props
              are crafted for both visual appeal and practical performance use.
            </p>

            <div className="space-y-6">
              {propFeatures.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-medium text-background">{item.title}</h4>
                      <p className="text-sm text-background/60">{item.description}</p>
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
