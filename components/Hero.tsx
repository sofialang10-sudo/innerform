import { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface HeroProps {
  title: string
  subtitle?: string
  tagline?: string
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
  variant?: "gradient" | "light"
}

export default function Hero({
  title,
  subtitle,
  tagline,
  primaryCta,
  secondaryCta,
  image,
  className,
  variant = "gradient",
}: HeroProps) {
  if (variant === "gradient") {
    return (
      <section
        className={cn(
          "relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden",
          className
        )}
      >
        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-32">
          {tagline && (
            <p className="text-xl md:text-2xl italic font-serif text-white/90 mb-6 animate-fade-in">
              {tagline}
            </p>
          )}

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white leading-[1.1] tracking-tight mb-8 animate-fade-in"
            style={{ animationDelay: '0.1s', fontWeight: 800 }}>
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {subtitle}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="flex gap-4 justify-center flex-wrap animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {primaryCta && (
                <Button variant="default" size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button variant="secondary" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>

        {image && (
          <div className="absolute bottom-0 w-full max-w-4xl mx-auto left-1/2 -translate-x-1/2 opacity-90 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {image}
          </div>
        )}
      </section>
    )
  }

  // Light variant (original)
  return (
    <section
      className={cn(
        "relative pt-40 pb-28 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 overflow-hidden",
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
            {tagline && (
              <p className="text-xl italic font-serif text-[var(--muted-foreground)]">
                {tagline}
              </p>
            )}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-[var(--foreground)] leading-[1.1] tracking-tight" style={{ fontWeight: 800 }}>
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl sm:text-2xl lg:text-3xl text-[var(--muted-foreground)] max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}

            {/* CTA Buttons */}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {primaryCta && (
                  <Button size="lg">
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button size="lg" variant="outline">
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
