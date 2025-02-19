import { HELP_CATEGORIES } from "@/lib/blog/content"
import { cleanUrl, debugUrl } from "@/lib/utils"
import { allBlogPosts, allHelpPosts } from "content-collections"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.propdock.no"

  // Helper function to ensure consistent URL format and debug
  const formatUrl = (path: string, type: string) => {
    const cleanPath = path
      ? (path.startsWith("/") ? path : `/${path}`).replace(/\/$/, "")
      : ""
    const fullUrl = cleanPath ? `${baseUrl}${cleanPath}` : baseUrl

    // Debug URL formatting
    debugUrl(fullUrl, "sitemap", {
      originalPath: path,
      cleanPath,
      type,
      timestamp: new Date().toISOString(),
    })

    // Verify URL consistency
    const cleanedUrl = cleanUrl(fullUrl)
    if (cleanedUrl !== fullUrl) {
      console.warn(`[URL Mismatch] in sitemap for ${type}:`, {
        original: fullUrl,
        cleaned: cleanedUrl,
        path,
      })
    }

    return fullUrl
  }

  // Core static pages
  const staticPages = [
    "",
    "om-oss",
    "tjenester",
    "tjenester/verdsettelse",
    "markedsinnsikt",
    "kontakt",
    "help",
    "blog",
  ].map((route) => ({
    url: formatUrl(route, "static"),
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }))

  // Help category pages
  const helpCategories = HELP_CATEGORIES.map((category) => ({
    url: formatUrl(`help/category/${category.slug}`, "help-category"),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Dynamic help article pages
  const helpPages = allHelpPosts.map((post) => ({
    url: formatUrl(`help/article/${post.slug}`, "help-article"),
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Dynamic blog pages
  const blogPages = allBlogPosts.map((post) => ({
    url: formatUrl(`blog/${post.slug}`, "blog"),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  const allUrls = [
    ...staticPages,
    ...helpCategories,
    ...helpPages,
    ...blogPages,
  ]

  // Log summary of all URLs
  if (process.env.NODE_ENV === "development") {
    console.log("\n[Sitemap Summary]", {
      total: allUrls.length,
      static: staticPages.length,
      helpCategories: helpCategories.length,
      helpArticles: helpPages.length,
      blogPosts: blogPages.length,
      timestamp: new Date().toISOString(),
    })
  }

  return allUrls
}
