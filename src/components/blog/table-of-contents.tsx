"use client"

import useCurrentAnchor from "@/lib/blog/use-current-anchor"
import { cx } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"

export default function TableOfContents({
  items,
}: {
  items: {
    title: string
    slug: string
  }[]
}) {
  const currentAnchor = useCurrentAnchor()

  return (
    <div className="border-border relative grid gap-4 border-l-2">
      {items.map((item) => {
        const isActive = currentAnchor === item.slug
        return (
          <div key={item.slug} className="relative">
            {isActive && (
              <motion.div
                layoutId="active-indicator"
                className="border-foreground absolute -left-0.5 h-full border-l-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
            <Link
              href={`#${item.slug}`}
              className={cx(
                "text-muted-foreground hover:text-foreground -ml-0.5 block pl-4 text-sm transition-colors",
                {
                  "text-foreground": isActive,
                },
              )}
            >
              {item.title}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
