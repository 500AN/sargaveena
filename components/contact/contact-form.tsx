"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const message = `Hello Sargaveena!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AService: ${formData.service}%0A%0AMessage: ${formData.message}`
    window.open(`https://wa.me/919207271271?text=${message}`, "_blank")
  }

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Send a Message</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Ready to Start Your Journey?</h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
            <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
              Fill out the form below and we{"'"}ll get back to you as soon as possible, or send us a message directly
              on WhatsApp.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-foreground mb-2">
                  Your Name <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm text-foreground mb-2">
                  Phone Number <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm text-foreground mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="Custom Costumes">Custom Costume Stitching</option>
                  <option value="Costume Rental">Costume Rental</option>
                  <option value="Ornaments">Ornaments & Jewelry</option>
                  <option value="Stage Props">Stage Props</option>
                  <option value="Consultation">Artist Consultation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-foreground mb-2">
                Your Message <span className="text-gold">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border focus:border-gold focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background font-medium uppercase tracking-wider hover:bg-gold transition-all duration-300"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
