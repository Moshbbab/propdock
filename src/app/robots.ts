import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/propdock/", "/api/", "/admin/", "/_next/", "/static/"],
      },
    ],
    sitemap: "https://propdock.no/sitemap.xml",
    host: "https://propdock.no",
  }
}
