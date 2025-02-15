import AnalycitsDashboard from "@/components/ui/Analycits-dashboard"
import Cta from "@/components/ui/Cta"
import CtaMiddle from "@/components/ui/Cta-middle"
import FeatureDivider from "@/components/ui/FeatureDivider"
import Features2 from "@/components/ui/Features2"
import { Hero2 } from "@/components/ui/Hero2"
import LogoCloud from "@/components/ui/LogoCloud"
export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <div className="pt-56">
        <Hero2 />
      </div>
      <LogoCloud />
      <FeatureDivider className="-mb-24 mt-24 max-w-6xl" />
      <Features2 />
      <CtaMiddle />
      <FeatureDivider className="-mb-24 mt-24 max-w-6xl" />

      <AnalycitsDashboard />
      <Cta />
    </main>
  )
}
