import { ReactNode } from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

export default function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-smooth overflow-hidden relative",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardHeader className="relative">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md">
          {icon}
        </div>
        <CardTitle className="text-xl mb-3">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed text-[var(--muted-foreground)]">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
