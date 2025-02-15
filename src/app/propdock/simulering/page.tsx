"use client"

import { DcfChart } from "@/components/propdock/DcfChart"
import { PropdockNavigation } from "@/components/propdock/Navigation"
import { YieldLineChart } from "@/components/propdock/YieldLineChart"
import { InvestmentParameters } from "@/components/propdock/simulering/InvestmentParameters"
import { KeyMetrics } from "@/components/propdock/simulering/KeyMetrics"
import { MarketAnalysis } from "@/components/propdock/simulering/MarketAnalysis"
import { ScenarioComparison } from "@/components/propdock/simulering/ScenarioComparison"
import { ScenarioManager } from "@/components/propdock/simulering/ScenarioManager"
import { SimulationStats } from "@/types/simulation"
import { useState } from "react"

const defaultStats: SimulationStats = {
  purchasePrice: 100000000,
  loanAmount: 65000000,
  interestRate: 5.5,
  loanTerm: 20,
  rentalIncome: 7000000,
  occupancyRate: 95,
  operatingCosts: 1000000,
  maintenanceCosts: 500000,
  propertyTax: 200000,
  insuranceCosts: 150000,
  rentGrowth: 2.5,
  costGrowth: 2.0,
  exitYear: 10,
  exitYield: 5.8,
}

export default function SimuleringPage() {
  const [stats, setStats] = useState<SimulationStats>(defaultStats)
  const [selectedScenarios, setSelectedScenarios] = useState<
    Array<{
      id: string
      name: string
      stats: SimulationStats
    }>
  >([])

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof SimulationStats,
  ) => {
    const value = parseFloat(event.target.value)
    if (!isNaN(value)) {
      setStats((prev) => ({ ...prev, [field]: value }))
    }
  }

  const handleLoadScenario = (newStats: SimulationStats) => {
    setStats(newStats)
  }

  const handleScenariosChange = (
    scenarios: Array<{
      id: string
      name: string
      stats: SimulationStats
    }>,
  ) => {
    setSelectedScenarios(scenarios)
  }

  // Calculate key metrics
  const effectiveRentalIncome = (stats.rentalIncome * stats.occupancyRate) / 100
  const totalOperatingCosts =
    stats.operatingCosts +
    stats.maintenanceCosts +
    stats.propertyTax +
    stats.insuranceCosts
  const netOperatingIncome = effectiveRentalIncome - totalOperatingCosts
  const debtService =
    (stats.loanAmount *
      (stats.interestRate / 100 / 12) *
      Math.pow(1 + stats.interestRate / 100 / 12, stats.loanTerm * 12)) /
    (Math.pow(1 + stats.interestRate / 100 / 12, stats.loanTerm * 12) - 1)
  const annualDebtService = debtService * 12
  const cashFlow = netOperatingIncome - annualDebtService
  const cashOnCash = (cashFlow / (stats.purchasePrice - stats.loanAmount)) * 100
  const currentYield = (netOperatingIncome / stats.purchasePrice) * 100

  return (
    <main className="container mx-auto px-4 sm:px-6">
      <PropdockNavigation />
      <div className="mt-8 space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <InvestmentParameters
            stats={stats}
            onStatsChange={handleInputChange}
          />
          <KeyMetrics
            effectiveRentalIncome={effectiveRentalIncome}
            totalOperatingCosts={totalOperatingCosts}
            netOperatingIncome={netOperatingIncome}
            annualDebtService={annualDebtService}
            cashFlow={cashFlow}
            currentYield={currentYield}
          />
        </div>

        <MarketAnalysis stats={stats} />

        <ScenarioManager
          currentStats={stats}
          onLoadScenario={handleLoadScenario}
          onScenariosSelect={handleScenariosChange}
        />

        {selectedScenarios.length > 0 && (
          <ScenarioComparison scenarios={selectedScenarios} />
        )}

        <YieldLineChart
          netOperatingIncome={netOperatingIncome}
          currentYield={currentYield}
        />

        <DcfChart
          rentalIncome={effectiveRentalIncome}
          operatingCosts={totalOperatingCosts}
          discountRate={stats.interestRate + 2} // Risk premium
          exitYield={stats.exitYield}
          years={stats.exitYear}
          growthRate={stats.rentGrowth}
        />
      </div>
    </main>
  )
}
