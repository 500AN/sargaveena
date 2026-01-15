"use client"

import { useEffect, useRef, useState } from "react"
import { Ruler, Palette, Clock, Sparkles } from "lucide-react"

const features = [
  { icon: Ruler, title: "Precise Measurements", description: "Custom fit for your unique requirements" },
  { icon: Palette, title: "Color Selection", description: "Choose from traditional and contemporary palettes" },
  { icon: Clock, title: "Timeline Planning", description: "Structured process from design to delivery" },
  { icon: Sparkles, title: "Finishing Touches", description: "Every detail perfected before handover" },
]

export function CustomCostumes() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Service 01</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Custom Costume Stitching</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every performer is unique, and their costume should be too. Our custom stitching service creates bespoke
              dance attire tailored to your exact specifications, body measurements, and artistic vision. From the
              initial consultation to the final fitting, we ensure every detail reflects your style and the requirements
              of your dance form.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex gap-3">
                    <Icon className="w-5 h-5 text-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <img
              src="/tailor-measuring-fabric-for-custom-bharatanatyam-c.jpg"
              alt="Custom costume creation process"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
