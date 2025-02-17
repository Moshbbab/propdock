"use client"

import useCurrentAnchor from "@/lib/blog/use-current-anchor"
import { cx } from "@/lib/utils"
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
    <div className="grid gap-4 border-l-2 border-warm-grey-2/20">
      {items.map((item, idx) => (
        <Link
          key={item.slug}
          href={`#${item.slug}`}
          className={cx(
            "-ml-0.5 pl-4 text-sm text-warm-white/60 transition-colors",
            {
              "border-l-2 border-warm-white text-warm-white hover:text-warm-white":
                currentAnchor ? currentAnchor === item.slug : idx === 0,
              "hover:text-warm-white/80": currentAnchor
                ? currentAnchor !== item.slug
                : idx !== 0,
            },
          )}
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}
