import React from "react"

interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, ...props }: BadgeProps, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className="border-warm-grey/20 bg-light-blue-1/50 dark:border-warm-white/30 dark:bg-light-blue/20 z-10 block w-fit rounded-lg border px-3 py-1.5 font-semibold uppercase leading-4 tracking-tighter sm:text-sm"
        {...props}
      >
        <span className="from-warm-grey to-warm-grey-2 dark:from-warm-white dark:to-warm-grey-1 bg-gradient-to-b bg-clip-text text-transparent">
          {children}
        </span>
      </span>
    )
  },
)

Badge.displayName = "Badge"

export { Badge, type BadgeProps }
