"use client"

import type React from "react"
import { useEffect, useState } from "react"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return <div className={`transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}>{children}</div>
}
