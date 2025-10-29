import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroProps {
  title: string
  subtitle: string
  primaryCta?: {
    label: string
    href?: string
    onClick?: () => void
  }
  secondaryCta?: {
    label: string
    href?: string
    onClick?: () => void
  }
  image?: ReactNode
  className?: string
}

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden",
        className
      )}
    >
      {/* Background Gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-amber-50 -z-10 gradient-bg" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--foreground)] leading-[1.1] tracking-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-[var(--muted-foreground)] max-w-2xl leading-relaxed">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {primaryCta && (
                  <Button size="xl" className="text-base sm:text-lg shadow-lg hover:shadow-xl transition-shadow">
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button size="xl" variant="outline" className="text-base sm:text-lg border-2 hover:bg-white/50 transition-all">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Image/Illustration */}
          {image && (
            <div className="relative lg:h-[500px] xl:h-[600px] flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {image}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
