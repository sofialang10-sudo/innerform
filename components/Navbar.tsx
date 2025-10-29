"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/for-freelancers", label: "For Freelancers" },
    { href: "/for-businesses", label: "For Businesses" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[var(--foreground)] tracking-tight">
              Innerform
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-all duration-300 rounded-lg hover:bg-indigo-50/50 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--primary)] group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="font-medium">
              Log In
            </Button>
            <Button size="sm" className="shadow-md hover:shadow-lg transition-shadow font-medium">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-indigo-50 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 transition-transform duration-300" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 overflow-hidden transition-all duration-500 ease-in-out",
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-6 space-y-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 px-4 text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-indigo-50 rounded-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                animation: isMobileMenuOpen ? `fadeIn 0.3s ease-out ${index * 0.05}s forwards` : 'none',
                opacity: 0
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-6 border-t border-[var(--border)]">
            <Button variant="ghost" size="sm" className="w-full font-medium">
              Log In
            </Button>
            <Button size="sm" className="w-full shadow-md font-medium">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
