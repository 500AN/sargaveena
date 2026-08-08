"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the typical rental duration?",
    answer:
      "Our standard rental period is 3-5 days, which covers most performance needs. Extended rentals are available upon request, and we offer flexible options for longer productions or multiple events.",
  },
  {
    question: "How long does custom costume stitching take?",
    answer:
      "Custom costumes typically require 2-4 weeks depending on complexity and design requirements. We recommend booking consultations at least 6-8 weeks before your performance date to allow time for fittings and any adjustments.",
  },
  {
    question: "What care instructions should I follow for rental costumes?",
    answer:
      "We provide detailed care instructions with every rental. Generally, costumes should be hung properly, kept away from moisture, and returned without washing. We handle all professional cleaning between rentals.",
  },
  {
    question: "Do you offer ornament sets for specific dance forms?",
    answer:
      "Yes, we have curated ornament sets specific to Bharatanatyam, Mohiniyattam, Kuchipudi, and other classical forms. Each set includes the traditional jewelry pieces required for that particular dance style.",
  },
  {
    question: "Can you accommodate urgent or last-minute requests?",
    answer:
      "We understand that performance schedules can change. While we recommend advance booking, we do our best to accommodate urgent requests based on availability. Contact us directly for rush orders.",
  },
  {
    question: "Do you ship costumes outside of Kochi?",
    answer:
      "Yes, we offer shipping services across Kerala and other parts of India. Shipping charges and timelines vary based on location. For best results with custom costumes, we recommend at least one in-person fitting.",
  },
]

export function ServicesFaq() {
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
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Questions</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Frequently Asked Questions</h2>
            <div className="w-16 h-px bg-gold mx-auto mt-6" />
          </div>

          {/* FAQ Accordion */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border px-6 bg-card">
                  <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:text-gold py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
