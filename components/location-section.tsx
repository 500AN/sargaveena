"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Clock, Phone } from "lucide-react"

export function LocationSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Map/Image */}
          <div
            className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative overflow-hidden">
              <img
                src="/traditional-kerala-architecture-with-temple-elemen.jpg"
                alt="Sargaveena location in Kerala"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/30 to-transparent" />
            </div>
            {/* Location Pin Overlay */}
            <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm p-4 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="font-serif text-foreground">Ernakulam, Kerala</span>
            </div>
          </div>

          {/* Info */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Visit Us</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">Our Location</h2>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bharathi Building, 1st Floor
                    <br />
                    Pipeline Road, Thrikkakara
                    <br />
                    CUSAT PO, Kochi – 682033
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-gold flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">Working Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday – Wednesday: 9:30 AM – 7:30 PM</p>
                    <p>Thursday – Saturday: 9:30 AM – 7:30 PM</p>
                    <p>Sunday: 9:30 AM – 12:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-gold flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">Contact</h3>
                  <div className="space-y-1">
                    <a href="tel:9207271271" className="block text-muted-foreground hover:text-gold transition-colors">
                      9207 271 271
                    </a>
                    <a href="tel:9207333133" className="block text-muted-foreground hover:text-gold transition-colors">
                      9207 333 133
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
