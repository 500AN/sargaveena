"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Users, Sparkles } from "lucide-react"

const communityServices = [
  {
    icon: GraduationCap,
    title: "Supporting Students",
    description:
      "We work closely with dance students preparing for their arangetrams, understanding the significance of this milestone and providing costumes that honor the occasion.",
  },
  {
    icon: Users,
    title: "Empowering Professionals",
    description:
      "Professional artists trust us with their performance wardrobes, knowing we understand the demands of stage presence and the importance of reliable, stunning attire.",
  },
  {
    icon: Sparkles,
    title: "Guiding Performances",
    description:
      "From solo recitals to grand productions, we offer guidance on costume selection, ensuring every performance makes the impact it deserves.",
  },
]

export function CommunitySection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">Our Mission</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">Supporting the Artist Community</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityServices.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className={`text-center p-8 border border-background/10 hover:border-gold/50 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                <p className="text-background/70 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
