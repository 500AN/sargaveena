"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"

const workingHours = [
  { days: "Monday – Wednesday", hours: "9:30 AM – 7:30 PM" },
  { days: "Thursday – Saturday", hours: "9:30 AM – 7:30 PM" },
  { days: "Sunday", hours: "9:30 AM – 12:00 PM" },
]

export function ContactDetails() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone */}
          <div
            className={`p-8 bg-card border border-border hover:border-gold transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="w-12 h-12 mb-6 flex items-center justify-center text-gold">
              <Phone className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-lg text-foreground mb-4">Phone</h3>
            <div className="space-y-2">
              <a
                href="tel:9207271271"
                className="block text-muted-foreground hover:text-gold transition-colors text-lg"
              >
                9207 271 271
              </a>
              <a
                href="tel:9207333133"
                className="block text-muted-foreground hover:text-gold transition-colors text-lg"
              >
                9207 333 133
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div
            className={`p-8 bg-card border border-border hover:border-gold transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="w-12 h-12 mb-6 flex items-center justify-center text-gold">
              <MessageCircle className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-lg text-foreground mb-4">WhatsApp</h3>
            <a
              href="https://wa.me/919207271271"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors text-lg"
            >
              Message us on WhatsApp
            </a>
          </div>

          {/* Address */}
          <div
            className={`p-8 bg-card border border-border hover:border-gold transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-12 h-12 mb-6 flex items-center justify-center text-gold">
              <MapPin className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-lg text-foreground mb-4">Address</h3>
            <p className="text-muted-foreground leading-relaxed">
              Bharathi Building, 1st Floor
              <br />
              Pipeline Road, Thrikkakara
              <br />
              CUSAT PO, Kochi – 682033
            </p>
          </div>

          {/* Working Hours */}
          <div
            className={`p-8 bg-card border border-border hover:border-gold transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="w-12 h-12 mb-6 flex items-center justify-center text-gold">
              <Clock className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-lg text-foreground mb-4">Working Hours</h3>
            <div className="space-y-2">
              {workingHours.map((schedule, index) => (
                <div key={index} className="text-sm">
                  <span className="text-foreground">{schedule.days}</span>
                  <br />
                  <span className="text-muted-foreground">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
