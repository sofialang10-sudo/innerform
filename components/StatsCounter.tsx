"use client"

import { useEffect, useRef, useState } from "react"

interface StatsCounterProps {
  value: string
  label: string
  suffix?: string
}

export default function StatsCounter({ value, label, suffix = "" }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Extract numeric value from string (e.g., "62%" -> 62)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          const duration = 2000 // 2 seconds
          const steps = 60
          const increment = numericValue / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= numericValue) {
              setCount(numericValue)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [numericValue, hasAnimated])

  return (
    <div ref={ref} className="text-center space-y-2">
      <div className="text-4xl sm:text-5xl font-bold text-[var(--primary)]">
        {count}
        {suffix}
      </div>
      <p className="text-sm sm:text-base text-[var(--muted-foreground)] max-w-xs mx-auto">
        {label}
      </p>
    </div>
  )
}
