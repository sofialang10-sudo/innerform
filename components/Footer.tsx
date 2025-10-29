import Link from "next/link"
import { Sparkles, Twitter, Linkedin, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const footerLinks = {
    Product: [
      { label: "For Freelancers", href: "/for-freelancers" },
      { label: "For Businesses", href: "/for-businesses" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Pricing", href: "/for-businesses#pricing" },
    ],
    Company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "#" },
    ],
    Legal: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Acceptable Use", href: "#" },
    ],
  }

  return (
    <footer className="bg-white border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-[var(--foreground)]">
                Innerform
              </span>
            </Link>
            <p className="text-sm text-[var(--muted-foreground)] mb-6 max-w-sm">
              A curated freelance marketplace connecting verified creative
              professionals with ethical businesses. Build with purpose.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-[var(--foreground)]">
                Stay Updated
              </h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="h-9"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-[var(--foreground)] mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted-foreground)]">
            © 2025 Innerform. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@innerform.com"
              className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
