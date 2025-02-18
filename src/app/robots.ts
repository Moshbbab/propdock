import { MetadataRoute } from "next"
import { headers } from "next/headers"

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers()
  const domain = headersList.get("host") ?? "propdock.no"
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https"
  const baseUrl = `${protocol}://${domain}`

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/help/*",
          "/blog/*",
          "/om-oss",
          "/tjenester/*",
          "/markedsinnsikt/*",
          "/kontakt",
          "/early-access",
        ],
        disallow: [
          "/api/",
          "/_next/",
          "/static/",
          "/propdock/*",
          "/admin/*",
          "/dashboard/*",
          "/settings/*",
          "/auth/*",
          "/private/*",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
