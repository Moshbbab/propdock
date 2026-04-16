import { ProductPitchCarousel } from "@/components/product-pitch/pitch-carousel"
import { constructMetadata } from "@/lib/utils"

export const metadata = constructMetadata({
  title: "Advanti Estate | Produktpresentasjon",
  description:
    "Din komplette partner for næringseiendom — verdivurdering, forvaltning, transaksjon og markedsinnsikt samlet hos én leverandør.",
})

type PageProps = {
  searchParams: Promise<{ bedrift?: string }>
}

export default async function PitchPage({ searchParams }: PageProps) {
  const { bedrift } = await searchParams
  const clientName = bedrift?.trim() ? bedrift.trim() : "din bedrift"

  return <ProductPitchCarousel clientName={clientName} />
}
