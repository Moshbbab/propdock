import { MDXContent } from "@content-collections/mdx/react"
import {
  RiAlertLine,
  RiCheckboxCircleLine,
  RiInformationLine,
  RiListCheck2,
} from "@remixicon/react"
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
      className="mb-4 mt-8 text-2xl font-semibold text-warm-white underline-offset-4 hover:underline"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="mb-3 mt-6 text-xl font-medium text-warm-white underline-offset-4 hover:underline"
      {...props}
    />
  ),
  a: (props: any) => (
    <CustomLink
      className="font-medium text-warm-white/80 underline-offset-4 hover:text-warm-white"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="rounded-md border border-warm-grey-2/20 bg-warm-grey-2/10 px-2 py-1 font-medium text-warm-white before:hidden after:hidden"
      {...props}
    />
  ),
  thead: (props: any) => (
    <thead className="text-lg text-warm-white" {...props} />
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
      className="mb-6 text-base leading-relaxed text-warm-white/80 marker:text-warm-white/60"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul className="my-8 list-disc space-y-6 pl-6" {...props} />
  ),
  ol: (props: any) => (
    <ol className="my-8 list-decimal space-y-6 pl-6" {...props} />
  ),
  Note: (props: {
    variant?: "info" | "warning" | "success"
    children: React.ReactNode
  }) => {
    const icons = {
      info: RiInformationLine,
      warning: RiAlertLine,
      success: RiCheckboxCircleLine,
    }
    const Icon = icons[props.variant || "info"]

    return (
      <div
        className={cx(
          "mt-4 rounded-md border-l-4 px-4 py-1 text-[0.95rem] leading-[1.4rem]",
          {
            "border-blue-500 bg-blue-500/10": props.variant === "info",
            "border-yellow-500 bg-yellow-500/10": props.variant === "warning",
            "border-green-500 bg-green-500/10": props.variant === "success",
          },
        )}
      >
        <div className="flex items-start gap-3">
          <Icon
            className={cx("mt-0.5 h-5 w-5", {
              "text-blue-500/80": props.variant === "info",
              "text-yellow-500/80": props.variant === "warning",
              "text-green-500/80": props.variant === "success",
            })}
          />
          <div className="flex-1 text-warm-white/80">{props.children}</div>
        </div>
      </div>
    )
  },
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
  Info: (props: any) => (
    <div className="my-6 flex items-start gap-4 rounded-lg border border-warm-grey-2/20 bg-warm-grey-2/10 p-6 backdrop-blur-sm">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center">
        <RiInformationLine className="h-6 w-6 text-warm-white/60" />
      </div>
      <div className="flex-1 text-[0.95rem] leading-relaxed">
        <div className="font-medium text-warm-white">Fun fact:</div>
        <div className="mt-1 text-warm-white/80">{props.children}</div>
      </div>
    </div>
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
        "prose max-w-none transition-all",
        "prose-headings:relative prose-headings:scroll-mt-20 prose-headings:font-display prose-headings:font-bold prose-headings:text-warm-white",
        "prose-p:text-warm-white/80 prose-p:leading-relaxed prose-p:my-4",
        "prose-a:text-warm-white/80 prose-a:underline-offset-4 hover:prose-a:text-warm-white",
        "prose-code:text-warm-white prose-code:bg-warm-grey-2/10 prose-code:px-2 prose-code:py-1",
        "prose-li:text-warm-white/80 prose-li:leading-relaxed prose-li:mb-6",
        "prose-ul:my-8 prose-ul:space-y-6",
        "prose-ol:my-8 prose-ol:space-y-6",
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
