import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Sargaveena | Classical Dance Costumes & Ornaments | Ernakulam, Kerala",
  description:
    "Premium dance costumes, ornaments & stage props for Bharatanatyam, Mohiniyattam, Kathakali & more. Crafted with heritage, perfected for performance. Located in Ernakulam, Kerala.",
  keywords: [
    "dance costumes",
    "classical dance",
    "Bharatanatyam",
    "Mohiniyattam",
    "Kathakali",
    "Kerala",
    "dance ornaments",
    "stage props",
  ],
  authors: [{ name: "Sargaveena" }],
  openGraph: {
    title: "Sargaveena | Classical Dance Costumes & Ornaments",
    description: "Where Tradition Takes Form. Premium dance costumes, ornaments & stage props in Ernakulam, Kerala.",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#D4AF37",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
