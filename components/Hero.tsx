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
        "relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden",
        className
      )}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-amber-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-[var(--muted-foreground)] max-w-2xl">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {primaryCta && (
                  <Button size="lg" className="text-base">
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button size="lg" variant="outline" className="text-base">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Image/Illustration */}
          {image && (
            <div className="relative lg:h-[500px] flex items-center justify-center">
              {image}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
