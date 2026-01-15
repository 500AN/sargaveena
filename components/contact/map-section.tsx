"use client"

import { useEffect, useRef, useState } from "react"
import { Navigation, Phone } from "lucide-react"

export function MapSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Map */}
          <div
            className={`relative h-96 lg:h-[500px] transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.3!2d76.32!3d10.04!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDAyJzI0LjAiTiA3NsKwMTknMTIuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
              title="Sargaveena Location"
            />
            <div className="absolute inset-0 border-2 border-gold pointer-events-none" />
          </div>

          {/* Info */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Find Us</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Visit Our Store</h2>

            <div className="space-y-6 mb-10">
              <p className="text-muted-foreground leading-relaxed">
                Located in the heart of Thrikkakara, near CUSAT, our boutique welcomes you to explore our collection and
                discuss your requirements in person. Our team is ready to guide you through every option.
              </p>

              <div className="p-6 bg-background border border-border">
                <h3 className="font-serif text-lg text-foreground mb-3">Sargaveena</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bharathi Building, 1st Floor
                  <br />
                  Pipeline Road, Thrikkakara
                  <br />
                  CUSAT PO, Kochi – 682033
                  <br />
                  Kerala, India
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.google.com/maps/dir//Thrikkakara+Kochi+682033"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-medium uppercase tracking-wider hover:bg-gold transition-all duration-300"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href="tel:9207271271"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground text-foreground font-medium uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
