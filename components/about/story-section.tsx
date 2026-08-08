"use client"

import { useEffect, useRef, useState } from "react"

export function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
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
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <img
              src="/sargaveena-boutique-interior-with-dance-costumes-a.jpg"
              alt="Sargaveena boutique interior"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold -z-10" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">The Beginning</span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Where It All Started</h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Sargaveena was born from a deep, abiding love for the performing arts. What began as a personal quest to
                find authentic, well-crafted dance costumes for a family member{"'"}s first performance evolved into a
                mission to serve the entire artist community—across all dance forms.
              </p>
              <p>
                We witnessed firsthand the struggle artists faced in finding costumes that matched their vision while
                meeting the demands of modern performance. Whether it was a Bharatanatyam arangetram, a contemporary
                dance competition, or a folk performance, dancers deserved better options.
              </p>
              <p>
                This realization sparked the creation of Sargaveena—a place where every dance style is celebrated, where
                every stitch tells a story, and where artists find costumes that elevate their art, regardless of the
                form they practice.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-border">
              <p className="font-serif text-xl text-gold italic">
                {'"'}From one artist{"'"}s need to every performer{"'"}s dream—whatever the dance.{'"'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
