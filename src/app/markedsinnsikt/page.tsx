import ChartMainPage from "@/components/markedsinnsikt/Chart-main-page"
import TopKpiCard from "@/components/markedsinnsikt/Top-kpi-card"
import { constructMetadata } from "@/lib/utils"

export const metadata = constructMetadata({
  title: "Markedsinnsikt for næringseiendom | Propdock",
  description:
    "Få tilgang til omfattende markedsdata og analyser for næringseiendom. Sanntids markedstrender, yield-analyser og demografiske data for bedre investeringsbeslutninger.",
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
