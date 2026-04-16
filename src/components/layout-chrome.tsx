"use client"

import { usePathname } from "next/navigation"

const HIDDEN_PREFIXES = ["/pitch"]

export function LayoutChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hidden = HIDDEN_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  )

  if (hidden) return null
  return <>{children}</>
}
