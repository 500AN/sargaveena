import Link from "next/link"
import { Phone, MapPin, Clock, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl tracking-wide">
                Sarga<span className="text-gold">veena</span>
              </span>
            </Link>
            <p className="text-background/70 leading-relaxed">
              Where tradition takes form. Premium dance costumes, ornaments & stage props crafted with heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Explore</h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:9207271271"
                  className="flex items-start gap-3 text-background/70 hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>
                    9207 271 271
                    <br />
                    9207 333 133
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Bharathi Building, 1st Floor
                  <br />
                  Pipeline Road, Thrikkakara
                  <br />
                  Kochi – 682033
                </span>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>
                  Mon–Sat: 9:30 AM – 7:30 PM
                  <br />
                  Sun: 9:30 AM – 12:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Follow Us</h4>
            <a
              href="https://www.instagram.com/sargaveena_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-background/70 hover:text-gold transition-colors"
            >
              <Instagram className="w-6 h-6" />
              @sargaveena_
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© {new Date().getFullYear()} Sargaveena. All rights reserved.</p>
            <p className="text-center">Crafted with heritage in Ernakulam, Kerala</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
