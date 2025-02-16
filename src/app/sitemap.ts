import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://propdock.no"

  // Core pages
  const routes = [
    "",
    "/tjenester",
    "/tjenester/verdsettelse",
    "/tjenester/verdivurdering/dcf",
    "/tjenester/verdivurdering/yield",
    "/tjenester/verdivurdering/sensitivitet",
    "/tjenester/verdivurdering/sammenligning",
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
