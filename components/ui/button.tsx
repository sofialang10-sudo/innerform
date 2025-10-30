import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:shadow-xl shadow-lg",
        secondary: "bg-[var(--accent-teal)] text-white hover:shadow-xl shadow-lg",
        outline: "border-2 border-black bg-transparent text-black hover:bg-black hover:text-white",
        white: "bg-white text-black hover:shadow-2xl shadow-xl",
        ghost: "hover:bg-indigo-50 hover:text-[var(--primary)]",
        link: "text-[var(--primary)] underline-offset-4 hover:underline",
        gradient: "bg-gradient-cta text-white hover:shadow-2xl shadow-lg"
      },
      size: {
        default: "h-14 px-8 py-4",
        sm: "h-11 px-6 py-3 text-sm",
        lg: "h-16 px-10 py-5 text-lg",
        xl: "h-20 px-12 py-6 text-xl",
        icon: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
