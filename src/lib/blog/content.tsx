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
      "Siste oppdateringer og nyheter fra Propdock. Lær om vår plattform og teamet bak.",
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
      "Dyptgående markedsanalyser og trender i det norske næringseiendomsmarkedet.",
  },
  {
    title: "Kundehistorier",
    slug: "casestudies",
    description:
      "Suksesshistorier fra eiendomsforvaltere og investorer som bruker Propdock.",
  },
]

export const POPULAR_ARTICLES = [
  "hva-er-propdock",
  "kom-i-gang",
  "verdivurderingsmetoder",
  "markedsinnsikt",
  "kundehistorier",
]

export const HELP_CATEGORIES: {
  title: string
  slug:
    | "overview"
    | "getting-started"
    | "for-users"
    | "for-providers"
    | "integrations"
    | "admin"
  description: string
  icon: JSX.Element
}[] = [
  {
    title: "Plattformoversikt",
    slug: "overview",
    description:
      "Propdock er en avansert analyseplattform for verdsettelser av næringseiendom.",
    icon: <RiBuilding4Line className="h-6 w-6 text-gray-500" />,
  },
  {
    title: "Kom i gang",
    slug: "getting-started",
    description:
      "Veiledninger for å komme i gang med verdivurdering og porteføljeanalyse.",
    icon: <RiBarChartBoxLine className="h-6 w-6 text-gray-500" />,
  },
  {
    title: "Eiendomsforvaltning",
    slug: "for-users",
    description:
      "Omfattende verktøy for leietakeradministrasjon og porteføljestyring.",
    icon: <RiBuildingLine className="h-6 w-6 text-gray-500" />,
  },
  {
    title: "For Investorer",
    slug: "for-providers",
    description:
      "Avanserte analyseverktøy for investeringsbeslutninger og scenariomodellering.",
    icon: <RiFileChartLine className="h-6 w-6 text-gray-500" />,
  },
  {
    title: "Teamsamarbeid",
    slug: "integrations",
    description: "Administrer teamet og samarbeid om eiendomsanalyser.",
    icon: <RiTeamLine className="h-6 w-6 text-gray-500" />,
  },
  {
    title: "Innstillinger",
    slug: "admin",
    description:
      "Administrer konto, fakturering og plattforminnstillinger. Tilpass analyseverktøyene.",
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
