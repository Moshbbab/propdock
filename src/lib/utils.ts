import clsx, { type ClassValue } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"
export function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args))
}

export function constructMetadata({
  title = "Propdock - Intelligent verdsettelse av næringseiendom",
  description = "Avansert plattform for verdivurdering og verdsettelse av næringseiendom. Få innsikt med DCF-analyser, yield-beregninger og markedsdata for bedre investeringsbeslutninger.",
  image = "/opengraph-image.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Propdock - Intelligent verdsettelse og verdivurdering av næringseiendom",
        },
      ],
      locale: "nb_NO",
      type: "website",
      siteName: "Propdock",
      url: "https://propdock.no",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@propdock",
      site: "@propdock",
    },
    icons: {
      icon: icons,
      shortcut: icons,
      apple: icons,
    },
    metadataBase: new URL("https://propdock.no"),
    authors: [{ name: "Propdock", url: "https://propdock.no" }],
    keywords: [
      "verdsettelse næringseiendom",
      "verdivurdering eiendom",
      "DCF-analyse",
      "yield-beregning",
      "eiendomsanalyse",
      "markedsanalyse næringseiendom",
      "porteføljestyring",
      "kontantstrømanalyse",
      "sensitivitetsanalyse",
      "avkastningsberegning",
      "næringsmegling",
      "eiendomsinvestering",
      "markedsverdi næringseiendom",
      "eiendomsportefølje",
      "investeringsanalyse",
    ],
    category: "Eiendomsanalyse",
    alternates: {
      canonical: "https://propdock.no",
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}

// Tremor Raw focusInput [v0.0.1]

export const focusInput = [
  // base
  "focus:ring-2",
  // ring color
  "focus:ring-light-blue/50 focus:dark:ring-light-blue/30",
  // border color
  "focus:border-warm-grey focus:dark:border-warm-grey-1",
]

// Tremor Raw focusRing [v0.0.1]

export const focusRing = [
  // base
  "outline outline-offset-2 outline-0 focus-visible:outline-2",
  // outline color
  "outline-warm-grey dark:outline-warm-white",
]

// Tremor Raw hasErrorInput [v0.0.1]

export const hasErrorInput = [
  // base
  "ring-2",
  // border color
  "border-red-500 dark:border-red-700",
  // ring color
  "ring-red-200 dark:ring-red-700/30",
]
