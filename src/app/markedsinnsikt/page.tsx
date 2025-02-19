import ChartMainPage from "@/components/markedsinnsikt/Chart-main-page"
import TopKpiCard from "@/components/markedsinnsikt/Top-kpi-card"
import { constructMetadata } from "@/lib/utils"

export const metadata = constructMetadata({
  title: "Markedsinnsikt for næringseiendom | Propdock",
  description:
    "Få tilgang til markedsdata og analyser for næringseiendom. Oppdaterte trender, yield-analyser og demografiske data for bedre investeringer.",
})

export default function MarkedsinnsiktPage() {
  return (
    <main className="min-h-screen pt-32">
      <div className="p-4 sm:p-6 lg:p-8">
        <TopKpiCard />
        <ChartMainPage />
      </div>
    </main>
  )
}
