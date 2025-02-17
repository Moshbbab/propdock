import { HelpPost } from "content-collections"
import Link from "next/link"

import ExpandingArrow from "./icons/expanding-arrow"

interface HelpArticleLinkProps {
  article: HelpPost
}

export default function HelpArticleLink({ article }: HelpArticleLinkProps) {
  if (!article || !article.slug) {
    return null // Or return a fallback UI
  }

  return (
    <Link
      href={`/help/article/${article.slug}`}
      className="hover:bg-muted active:bg-muted/70 group flex items-center justify-between rounded-lg px-2 py-3 transition-colors sm:px-4"
    >
      <h3 className="text-foreground group-hover:text-primary text-sm font-medium sm:text-base">
        {article.title || "Untitled Article"}
      </h3>
      <ExpandingArrow className="text-muted-foreground group-hover:text-primary -ml-4 h-4 w-4" />
    </Link>
  )
}
