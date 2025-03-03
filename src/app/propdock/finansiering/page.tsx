"use client"

import { FixedVsVariableRateChart } from "@/components/propdock/exit-strategi/FixedVsVariableRateChart"
import { LoanAmortizationChart } from "@/components/propdock/exit-strategi/LoanAmortizationChart"
import DebtStructuring from "@/components/propdock/finansiering/DebtStructuring"
import { PropdockNavigation } from "@/components/propdock/Navigation"
export default function FinansieringPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6">
      <PropdockNavigation />
      <div className="mt-8 space-y-8">
        <DebtStructuring />

        <div className="space-y-8">
          <LoanAmortizationChart />
          <FixedVsVariableRateChart />
        </div>
      </div>
    </main>
  )
}
