"use client"

import { useEffect, useRef, useState } from "react"

const danceForms = [
  {
    name: "Bharatanatyam",
    origin: "Tamil Nadu",
    image: "/bharatanatyam-dancer-in-traditional-costume-with-e.jpg",
  },
  {
    name: "Mohiniyattam",
    origin: "Kerala",
    image: "/mohiniyattam-dancer-in-white-and-gold-costume--gra.jpg",
  },
  {
    name: "Kathakali",
    origin: "Kerala",
    image: "/kathakali-performer-with-elaborate-green-face-make.jpg",
  },
  {
    name: "Kuchipudi",
    origin: "Andhra Pradesh",
    image: "/kuchipudi-dancer-in-colorful-costume-performing-tr.jpg",
  },
  {
    name: "Kathak",
    origin: "North India",
    image: "/kathak-dancer-spinning-with-flowing-costume-and-an.jpg",
  },
]

export function DanceFormsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Celebrating Heritage</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Dance Forms We Support</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div
        ref={scrollRef}
        className={`flex gap-6 overflow-x-auto pb-8 px-6 lg:px-12 snap-x snap-mandatory scrollbar-hide transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {danceForms.map((form, index) => (
          <div key={index} className="flex-shrink-0 w-72 md:w-80 snap-center group">
            <div className="relative overflow-hidden mb-4">
              <img
                src={form.image || "/placeholder.svg"}
                alt={form.name}
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl text-background mb-1">{form.name}</h3>
                <p className="text-gold text-sm uppercase tracking-wider">{form.origin}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
