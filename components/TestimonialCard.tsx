import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar?: string
}

export default function TestimonialCard({
  quote,
  author,
  role,
  avatar,
}: TestimonialCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6 space-y-4">
        <Quote className="w-8 h-8 text-[var(--primary)] opacity-50" />
        <p className="text-[var(--foreground)] leading-relaxed">{quote}</p>
        <div className="flex items-center gap-3 pt-2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              {author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-[var(--foreground)]">{author}</p>
            <p className="text-sm text-[var(--muted-foreground)]">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
