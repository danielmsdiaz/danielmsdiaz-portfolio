import * as React from "react"

import { cn } from "@/libs/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-xl border-2 border-l-primary dark:border-l-darkMode bg-background px-5 py-2 text-base ring-offset-background placeholder:text-muted-foreground transition-all focus-visible:border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:focus-visible:ring-darkMode focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
