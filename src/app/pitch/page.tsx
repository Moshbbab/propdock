import { PrintPitch } from "@/components/product-pitch/pitch-print"
import { ProductPitchCarousel } from "@/components/product-pitch/pitch-carousel"
import type { PitchContext } from "@/components/product-pitch/types"
import { constructMetadata } from "@/lib/utils"

export const metadata = constructMetadata({
  title: "Advanti Estate | Produktpresentasjon",
  description:
    "Din komplette partner for næringseiendom — verdivurdering, forvaltning, transaksjon og markedsinnsikt samlet hos én leverandør.",
})

type PageProps = {
  searchParams: Promise<{
    bedrift?: string
    presenter?: string
    rolle?: string
    dato?: string
    portefolje?: string
    print?: string
  }>
}

function formatNorwegianDate(input?: string): string | undefined {
  if (!input?.trim()) return undefined
  const d = new Date(input)
  if (Number.isNaN(d.getTime())) return input
  return d.toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export default async function PitchPage({ searchParams }: PageProps) {
  const params = await searchParams

  const ctx: PitchContext = {
    clientName: params.bedrift?.trim() || "din bedrift",
    presenter: params.presenter?.trim() || undefined,
    presenterRole: params.rolle?.trim() || undefined,
    dato: formatNorwegianDate(params.dato),
    portefolje: params.portefolje?.trim() || undefined,
  }

  if (params.print === "true" || params.print === "1") {
    return <PrintPitch ctx={ctx} />
  }

  return <ProductPitchCarousel ctx={ctx} />
}
