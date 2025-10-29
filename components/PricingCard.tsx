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
        "relative hover:shadow-xl transition-all duration-300",
        isPopular && "border-[var(--primary)] border-2 scale-105",
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge variant="secondary" className="px-4 py-1">
            Most Popular
          </Badge>
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold text-[var(--foreground)]">
            {price}
          </span>
          {price !== "Custom" && <span className="text-[var(--muted-foreground)]">/month</span>}
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[var(--accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-[var(--accent)]" />
              </div>
              <span className="text-sm text-[var(--foreground)]">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          variant={isPopular ? "default" : "outline"}
          className="w-full"
          size="lg"
        >
          {ctaLabel}
        </Button>
      </CardFooter>
    </Card>
  )
}
