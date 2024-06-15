import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-white/10 focus-visible:outline-none focus-visible:ring-1  focus-visible:ring-portColor focus-visible:ring-offset-0 font-light bg-primary disabled:cursor-not-allowed px-4 py-5 text-base disabled:opacity-50 placeholder:text-white/60 outline-none",
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
