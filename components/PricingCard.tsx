import { Check } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  isPopular?: boolean
  ctaLabel?: string
  className?: string
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  isPopular = false,
  ctaLabel = "Get Started",
  className,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-smooth h-full flex flex-col",
        isPopular && "border-[var(--primary)] border-2 shadow-xl ring-4 ring-indigo-50",
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <Badge variant="secondary" className="px-5 py-1.5 text-sm font-semibold shadow-md">
            Most Popular
          </Badge>
        </div>
      )}

      <CardHeader className="pb-8">
        <CardTitle className="text-2xl mb-2">{name}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
        <div className="mt-6 flex items-baseline gap-1">
          <span className="text-5xl font-bold text-[var(--foreground)] tracking-tight">
            {price}
          </span>
          {price !== "Custom" && (
            <span className="text-lg text-[var(--muted-foreground)] ml-1">/month</span>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 group/item">
              <div className="w-6 h-6 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-[var(--accent)]/20 transition-colors">
                <Check className="w-4 h-4 text-[var(--accent)]" strokeWidth={3} />
              </div>
              <span className="text-sm text-[var(--foreground)] leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="pt-6">
        <Button
          variant={isPopular ? "default" : "outline"}
          className={cn(
            "w-full transition-all duration-300",
            isPopular && "shadow-lg hover:shadow-xl"
          )}
          size="lg"
        >
          {ctaLabel}
        </Button>
      </CardFooter>
    </Card>
  )
}
