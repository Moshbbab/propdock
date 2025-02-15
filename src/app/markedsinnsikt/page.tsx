import ChartMainPage from "@/components/markedsinnsikt/Chart-main-page"
import TopKpiCard from "@/components/markedsinnsikt/Top-kpi-card"

export const metadata = {
  title: "Markedsinnsikt | Advanti",
  description: "Få innsikt i markedet for næringseiendom ",
}

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
