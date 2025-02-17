"use client"

import BlurImage from "@/lib/blog/blur-image"
import Link from "next/link"
import ExpandingArrow from "./icons/expanding-arrow"

export const Customer = ({ slug, site }: { slug: string; site?: string }) => {
  return (
    <Link
      href={site || `/customers/${slug}`}
      {...(site ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="group flex flex-col items-center justify-center space-y-2 rounded-2xl border border-gray-300 bg-white/10 p-8 backdrop-blur-sm transition-all hover:bg-white/20 sm:p-10"
    >
      <BlurImage
        src={`/_static/clients/${slug}.svg`}
        alt={slug.toUpperCase()}
        width={520}
        height={182}
        className="max-h-16 grayscale transition-all group-hover:grayscale-0"
      />
      <div className="flex space-x-1">
        <p className="text-sm font-medium text-gray-500 group-hover:text-blue-600">
          {site ? "Visit Website" : "Learn More"}
        </p>
        <ExpandingArrow className="text-gray-500 group-hover:text-blue-600" />
      </div>
    </Link>
  )
}
