// import { Logo } from "#/ui/icons";
import {
  RiBarChartBoxLine,
  RiBuilding4Line,
  RiBuildingLine,
  RiFileChartLine,
  RiSettings4Line,
  RiTeamLine,
} from "@remixicon/react"
import { allHelpPosts } from "content-collections"

export const BLOG_CATEGORIES = [
  {
    title: "Selskapet",
    slug: "company",
    description:
      "Siste oppdateringer og nyheter fra Propdock. Få innsikt i vår innovative plattform, teknologi og teamet som driver utviklingen fremover.",
  },
  {
    title: "Verdivurdering",
    slug: "valuation",
    description:
      "Avanserte verktøy for verdivurdering av næringseiendom, inkludert DCF-modeller og sensitivitetsanalyse.",
  },
  {
    title: "Markedsanalyse",
    slug: "market-analysis",
    description:
      "Grundige analyser av trender og utvikling i det norske næringseiendomsmarkedet. Få innsikt i markedsdynamikk og muligheter.",
  },
  {
    title: "Kundehistorier",
    slug: "casestudies",
    description:
      "Utforsk hvordan ledende eiendomsaktører bruker Propdock for å optimalisere sine porteføljer og forbedre beslutningsprosesser.",
  },
]

export const POPULAR_ARTICLES = [
  "hva-er-propdock",
  "hva-er-yield",
  "netto-leieinntekter",
  "sensitivitetsanalyse",
]

export const HELP_CATEGORIES: {
  title: string
  slug:
    | "overview"
    | "getting-started"
    | "terms"
    | "for-investors"
    | "analysis"
    | "valuation"
  description: string
  icon: JSX.Element
}[] = [
  {
    title: "Plattformoversikt",
    slug: "overview",
    description:
      "Utforsk Propdocks avanserte analyseplattform for verdsettelse av næringseiendom. Lær om våre kjernefunksjoner og metodikk.",
    icon: <RiBuilding4Line className="h-6 w-6 text-gray-500" />,
  },
  {
    title: "Kom i gang",
    slug: "getting-started",
    description:
      "Omfattende guide for å komme i gang med Propdock. Lær om verdivurdering, porteføljeanalyse og beste praksis for optimal bruk.",
    icon: <RiBarChartBoxLine className="h-6 w-6 text-gray-500" />,
  },
  {
    title: "Begreper",
    slug: "terms",
    description:
      "Grundig gjennomgang av sentrale begreper og terminologi innen næringseiendom. Få innsikt i bransjestandarder og metodikk.",
    icon: <RiBuildingLine className="h-6 w-6 text-gray-500" />,
  },
  {
    title: "For Investorer",
    slug: "for-investors",
    description:
      "Avanserte verktøy og strategier for investeringsanalyse. Optimaliser porteføljen din med data-drevet beslutningsstøtte og scenariomodeller.",
    icon: <RiFileChartLine className="h-6 w-6 text-gray-500" />,
  },
  {
    title: "Markedsanalyse",
    slug: "analysis",
    description:
      "Lær å utnytte markedsdata og trender for bedre investeringsbeslutninger. Få innsikt i markedsdynamikk og identifiser muligheter.",
    icon: <RiTeamLine className="h-6 w-6 text-gray-500" />,
  },
  {
    title: "Verdivurdering",
    slug: "valuation",
    description:
      "Omfattende guide til verdivurdering av næringseiendom. Lær om DCF-modeller, yield-analyser og beste praksis for presise vurderinger.",
    icon: <RiSettings4Line className="h-6 w-6 text-gray-500" />,
  },
]

export const getPopularArticles = () => {
  const popularArticles = POPULAR_ARTICLES.map((slug) => {
    const post = allHelpPosts.find((post) => post.slug === slug)
    if (!post) {
      console.warn(`Popular article with slug "${slug}" not found`)
    }
    return post
  }).filter((post) => post != null)

  return popularArticles
}
