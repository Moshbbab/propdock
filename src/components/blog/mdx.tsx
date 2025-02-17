import { MDXContent } from "@content-collections/mdx/react"
import { RiListCheck2 } from "@remixicon/react"
import {
  allBlogPosts,
  allChangelogPosts,
  allHelpPosts,
} from "content-collections"
import Link from "next/link"

import BlurImage from "@/lib/blog/blur-image"
import { HELP_CATEGORIES, POPULAR_ARTICLES } from "@/lib/blog/content"
import { cx, formatDate } from "@/lib/utils"

import CategoryCard from "./category-card"
import CopyBox from "./copy-box"
import HelpArticleLink from "./help-article-link"
import ExpandingArrow from "./icons/expanding-arrow"
import ZoomImage from "./zoom-image"

const CustomLink = (props: any) => {
  const href = props.href

  if (href.startsWith("/")) {
    return (
      <Link {...props} href={href}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith("#")) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const components = {
  h2: (props: any) => (
    <h2
      className="mb-4 mt-8 scroll-mt-8 text-2xl font-semibold text-warm-white"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="mb-3 mt-6 scroll-mt-8 text-xl font-medium text-warm-white"
      {...props}
    />
  ),
  a: (props: any) => (
    <CustomLink
      className="font-medium text-warm-white/80 underline-offset-4 transition-colors hover:text-warm-white"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="rounded-md border border-warm-grey-2/20 bg-warm-grey-2/20 px-1.5 py-0.5 text-sm font-medium text-warm-white before:hidden after:hidden"
      {...props}
    />
  ),
  thead: (props: any) => (
    <thead
      className="border-b border-warm-grey-2/20 bg-warm-grey-2/10"
      {...props}
    />
  ),
  th: (props: any) => (
    <th className="p-4 text-left font-medium text-warm-white" {...props} />
  ),
  td: (props: any) => (
    <td
      className="border-t border-warm-grey-2/20 p-4 text-warm-white/80"
      {...props}
    />
  ),
  p: (props: any) => (
    <p
      className="my-4 text-base leading-relaxed text-warm-white/80"
      {...props}
    />
  ),
  li: (props: any) => (
    <li
      className="text-base leading-relaxed text-warm-white/80 marker:text-warm-white/60"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul className="my-4 list-disc space-y-2 pl-6" {...props} />
  ),
  ol: (props: any) => (
    <ol className="my-4 list-decimal space-y-2 pl-6" {...props} />
  ),
  Note: (props: any) => (
    <div
      className={cx(
        "my-4 rounded-md border-l-4 border-warm-grey-2/20 bg-warm-grey-2/10 px-4 py-3 text-[0.95rem] leading-relaxed text-warm-white/80",
        {
          "border-yellow-500/50 bg-yellow-500/10": props.variant === "warning",
          "border-blue-500/50 bg-blue-500/10": props.variant === "info",
          "border-green-500/50 bg-green-500/10": props.variant === "success",
        },
      )}
      {...props}
    />
  ),
  Quote: (props: {
    author: string
    authorSrc: string
    title: string
    company: string
    companySrc: string
    text: string
  }) => (
    <div className="my-10 flex flex-col items-center justify-center space-y-6 rounded-md border border-warm-grey-2/20 bg-warm-grey-2/10 p-10">
      <div className="w-fit rounded-full bg-gradient-to-r from-warm-grey-2/20 to-warm-grey-1/20 p-1.5">
        <BlurImage
          className="h-20 w-20 rounded-full border-2 border-warm-grey-2/20"
          src={props.authorSrc}
          alt={props.author}
          width={80}
          height={80}
        />
      </div>
      <p className="text-center text-lg leading-relaxed text-warm-white/80 [text-wrap:balance]">
        &ldquo;{props.text}&rdquo;
      </p>
      <div className="flex items-center justify-center space-x-4">
        <BlurImage
          className="h-12 w-12 rounded-md border-2 border-warm-grey-2/20"
          src={props.companySrc}
          alt={props.company}
          width={48}
          height={48}
        />
        <div className="flex flex-col">
          <p className="font-semibold text-warm-white">{props.author}</p>
          <p className="text-sm text-warm-white/80">{props.title}</p>
        </div>
      </div>
    </div>
  ),
  Prerequisites: (props: any) => (
    <div className="my-8 rounded-md border border-warm-grey-2/20 bg-warm-grey-2/10 px-6 py-4 text-[0.95rem] leading-relaxed shadow-md">
      <div className="mb-4 flex items-center space-x-2 text-warm-white/80">
        <RiListCheck2 size={20} />
        <p className="text-sm font-medium uppercase">Prerequisites</p>
      </div>
      {props.children}
    </div>
  ),
  CopyBox,
  HelpArticles: (props: { articles: string[] }) => (
    <div className="grid gap-2 rounded-xl border border-warm-grey-2/20 bg-warm-grey-2/10 p-4">
      {(props.articles || POPULAR_ARTICLES).map((slug) => (
        <HelpArticleLink
          key={slug}
          article={allHelpPosts.find((post) => post.slug === slug)!}
        />
      ))}
    </div>
  ),
  HelpCategories: () => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {HELP_CATEGORIES.map((category) => (
        <CategoryCard
          key={category.slug}
          href={`/help/category/${category.slug}`}
          name={category.title}
          description={category.description}
          icon={category.icon}
          pattern={{
            y: 16,
            squares: [
              [0, 1],
              [1, 3],
            ],
          }}
        />
      ))}
    </div>
  ),
  Changelog: (props: any) => (
    <ul className="grid list-none rounded-xl border border-warm-grey-2/20 bg-warm-grey-2/10 p-4">
      {[...allBlogPosts, ...allChangelogPosts]
        .filter((post) => post.publishedAt <= props.before)
        .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
        .slice(0, props.count)
        .map((post: any) => (
          <li key={post.slug}>
            <Link
              href={`/${post.type === "BlogPost" ? "blog" : "changelog"}/${
                post.slug
              }`}
              className="group flex items-center justify-between rounded-lg px-2 py-3 transition-colors hover:bg-warm-grey-2/20 active:bg-warm-grey-2/30 sm:px-4"
            >
              <div>
                <p className="text-xs font-medium text-warm-white/60 group-hover:text-warm-white/80">
                  {formatDate(post.publishedAt)}
                </p>
                <h3 className="my-px text-base font-medium text-warm-white">
                  {post.title}
                </h3>
                <p className="line-clamp-1 text-sm text-warm-white/80 group-hover:text-warm-white">
                  {post.summary}
                </p>
              </div>
              <ExpandingArrow className="-ml-4 h-4 w-4 text-warm-white/60 group-hover:text-warm-white/80" />
            </Link>
          </li>
        ))}
    </ul>
  ),
  strong: (props: any) => (
    <strong className="font-semibold text-warm-white" {...props} />
  ),
}

interface MDXProps {
  code: string
  images?: { alt: string; src: string; blurDataURL: string }[]
  className?: string
}

export function MDX({ code, images, className }: MDXProps) {
  const MDXImage = (props: any) => {
    if (!images) return null
    const blurDataURL = images.find(
      (image) => image.src === props.src,
    )?.blurDataURL

    return <ZoomImage {...props} blurDataURL={blurDataURL} />
  }

  return (
    <article
      data-mdx-container
      className={cx(
        "prose prose-invert max-w-none",
        "prose-headings:font-display prose-headings:text-warm-white",
        "prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-2xl prose-h2:font-semibold",
        "prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-xl prose-h3:font-medium",
        "prose-p:text-warm-white/80 prose-p:leading-relaxed prose-p:my-4",
        "prose-a:text-warm-white/80 prose-a:underline-offset-4 hover:prose-a:text-warm-white prose-a:transition-colors",
        "prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2",
        "prose-ol:my-4 prose-ol:pl-6 prose-ol:space-y-2",
        "prose-li:text-warm-white/80 prose-li:my-0 marker:prose-li:text-warm-white/60",
        "prose-code:text-warm-white prose-code:bg-warm-grey-2/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:border prose-code:border-warm-grey-2/20 prose-code:text-sm",
        "prose-pre:bg-warm-grey-2/10 prose-pre:border prose-pre:border-warm-grey-2/20 prose-pre:rounded-lg prose-pre:my-4",
        "prose-strong:text-warm-white prose-strong:font-semibold",
        "prose-table:w-full prose-table:my-6 prose-table:border prose-table:border-warm-grey-2/20 prose-table:rounded-lg prose-table:overflow-hidden",
        "prose-thead:bg-warm-grey-2/10",
        "prose-th:p-4 prose-th:text-left prose-th:font-medium prose-th:text-warm-white",
        "prose-td:p-4 prose-td:border-t prose-td:border-warm-grey-2/20 prose-td:text-warm-white/80",
        "prose-img:rounded-lg prose-img:my-6 prose-img:shadow-lg",
        "prose-blockquote:border-l-4 prose-blockquote:border-warm-grey-2/40 prose-blockquote:pl-6 prose-blockquote:py-1 prose-blockquote:my-4 prose-blockquote:italic prose-blockquote:text-warm-white/70",
        "prose-hr:my-8 prose-hr:border-warm-grey-2/20",
        "transition-all",
        className,
      )}
    >
      <MDXContent
        code={code}
        components={{
          ...components,
          Image: MDXImage,
        }}
      />
    </article>
  )
}
