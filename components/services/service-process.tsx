"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    title: "Visit or Contact",
    description: "Reach out via phone, WhatsApp, or visit our store in Thrikkakara",
  },
  {
    number: "02",
    title: "Consultation",
    description: "Discuss your requirements, dance form, and preferences with our experts",
  },
  {
    number: "03",
    title: "Selection",
    description: "Choose from our collection or design your custom costume",
  },
  {
    number: "04",
    title: "Fitting",
    description: "Perfect measurements and adjustments for the ideal fit",
  },
  {
    number: "05",
    title: "Performance Ready",
    description: "Your complete ensemble, delivered and ready for the stage",
  },
]

export function ServiceProcess() {
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
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">The Journey</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">How Our Service Works</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gold/30 lg:-translate-x-px" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {/* Mobile Layout */}
                  <div className="lg:hidden flex gap-6 pl-12">
                    {/* Timeline Dot */}
                    <div className="absolute left-4 top-0 w-2 h-2 bg-gold rounded-full -translate-x-1/2 mt-2" />

                    <div className="bg-cream p-6 flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-serif text-3xl text-gold">{step.number}</span>
                        <h3 className="font-serif text-xl text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>

                  {/* Desktop Layout - Alternating Left/Right */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className={`${isLeft ? "text-right pr-12" : "order-2 text-left pl-12"}`}>
                      {isLeft ? (
                        <div className="bg-cream p-8 inline-block text-left">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="font-serif text-4xl text-gold">{step.number}</span>
                            <h3 className="font-serif text-2xl text-foreground">{step.title}</h3>
                          </div>
                          <p className="text-muted-foreground max-w-sm">{step.description}</p>
                        </div>
                      ) : (
                        <div className="h-full" />
                      )}
                    </div>

                    {/* Right Content */}
                    <div className={`${isLeft ? "order-2 pl-12" : "text-right pr-12"}`}>
                      {!isLeft ? (
                        <div className="bg-cream p-8 inline-block text-left">
                          <div className="flex items-center gap-4 mb-3">
                            <span className="font-serif text-4xl text-gold">{step.number}</span>
                            <h3 className="font-serif text-2xl text-foreground">{step.title}</h3>
                          </div>
                          <p className="text-muted-foreground max-w-sm">{step.description}</p>
                        </div>
                      ) : (
                        <div className="h-full" />
                      )}
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-gold rounded-full" />
                      <div className="absolute inset-0 w-4 h-4 bg-gold rounded-full animate-ping opacity-30" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
