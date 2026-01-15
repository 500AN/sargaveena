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

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${index % 2 === 1 ? "lg:text-right" : ""}`}
                >
                  <div className={`${index % 2 === 1 ? "lg:order-2 lg:text-left" : ""}`}>
                    <div
                      className={`flex items-start gap-6 ${index % 2 === 1 ? "lg:flex-row-reverse lg:justify-end" : ""}`}
                    >
                      <div className="w-16 h-16 bg-cream border border-gold flex items-center justify-center flex-shrink-0">
                        <span className="font-serif text-2xl text-gold">{step.number}</span>
                      </div>
                      <div className="pb-12 lg:pb-24">
                        <h3 className="font-serif text-xl text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 top-8 w-3 h-3 bg-gold rounded-full -translate-x-1/2 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
