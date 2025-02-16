import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://propdock.no"

  // Core pages
  const routes = [
    "",
    "/om-oss",
    "/tjenester",
    "/tjenester/verdsettelse",
    "/markedsinnsikt",
    "/kontakt",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  return routes
}
