"use client"

import { Card } from "@/components/Card"
import { PropdockNavigation } from "@/components/propdock/Navigation"
import TableLeietakere from "@/components/propdock/leietakere/TableLeietakere"

export default function Leietakere() {
  return (
    <main className="container mx-auto px-4 sm:px-6">
      <PropdockNavigation />
      <div className="mt-8 space-y-8">
        <div className="grid grid-cols-1 gap-8">
          <Card>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-warm-grey dark:text-warm-white">
                  Leietakeroversikt
                </h3>
                <p className="mt-1 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                  Oversikt over alle leietakere og deres kontrakter
                </p>
              </div>

              <TableLeietakere />
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
