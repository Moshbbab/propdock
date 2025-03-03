"use client"

import ExitStrategyPlanning from "@/components/propdock/exit-strategi/ExitStrategyPlanning"
import { PropdockNavigation } from "@/components/propdock/Navigation"

export default function ExitStrategyPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6">
      <PropdockNavigation />
      <div className="mt-8 space-y-8">
        <ExitStrategyPlanning />
      </div>
    </main>
  )
}
