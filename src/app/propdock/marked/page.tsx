"use client"

import { Card } from "@/components/Card"
import { LineChart } from "@/components/LineChart"
import { PropdockNavigation } from "@/components/propdock/Navigation"
import { DemographicAnalysis } from "@/components/propdock/marked/DemographicAnalysis"
import { MarketSentiment } from "@/components/propdock/marked/MarketSentiment"
import { MarketStatistics } from "@/components/propdock/marked/MarketStatistics"
import { cx } from "@/lib/utils"
import { RiBuilding2Line, RiRoadMapLine } from "@remixicon/react"

// Market data
const marketData = {
  location: {
    name: "Harstad",
    region: "Troms og Finnmark",
  },
  nearbyDevelopments: [
    {
      name: "Harstad Havn Utvikling",
      type: "Mixed-use",
      status: "Under construction",
      completion: "2025",
      impact: "positive",
    },
    {
      name: "Sjøkanten Senter",
      type: "Retail",
      status: "Planned",
      completion: "2026",
      impact: "neutral",
    },
  ],
  comparableProperties: [
    {
      name: "Mercurveien 1",
      type: "Warehouse",
      size: 3200,
      rent: 1380,
      yield: 5.9,
    },
    {
      name: "Storåkeren 5",
      type: "Industrial",
      size: 2500,
      rent: 1420,
      yield: 5.7,
    },
    {
      name: "Rødbergveien 8",
      type: "Logistics",
      size: 3800,
      rent: 1350,
      yield: 6.1,
    },
  ],
}

// Historical rent data
const rentData = [
  {
    date: "2019",
    Harstad: 1250,
    "Regional Average": 1180,
  },
  {
    date: "2020",
    Harstad: 1280,
    "Regional Average": 1200,
  },
  {
    date: "2021",
    Harstad: 1320,
    "Regional Average": 1250,
  },
  {
    date: "2022",
    Harstad: 1380,
    "Regional Average": 1290,
  },
  {
    date: "2023",
    Harstad: 1450,
    "Regional Average": 1340,
  },
]

export default function MarkedPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6">
      <PropdockNavigation />
      <div className="mt-8 space-y-8">
        {/* Market Statistics */}
        <MarketStatistics />

        {/* Market Sentiment */}
        <MarketSentiment />

        {/* Demographic Analysis */}
        <DemographicAnalysis />

        {/* Rent Development Chart */}
        <Card>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <RiBuilding2Line className="size-5 text-warm-grey-2 dark:text-warm-grey-1" />
              <h3 className="font-medium text-warm-grey dark:text-warm-white">
                Leieprisutvikling
              </h3>
            </div>
            <LineChart
              data={rentData}
              index="date"
              categories={["Harstad", "Regional Average"]}
              colors={["light-blue", "warm-grey-2"]}
              valueFormatter={(value) => `${value} kr/m²`}
              yAxisWidth={80}
              className="h-[400px]"
            />
          </div>
        </Card>

        {/* Comparable Properties */}
        <Card>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <RiBuilding2Line className="size-5 text-warm-grey-2 dark:text-warm-grey-1" />
              <h3 className="font-medium text-warm-grey dark:text-warm-white">
                Sammenlignbare eiendommer
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {marketData.comparableProperties.map((property) => (
                <div
                  key={property.name}
                  className="rounded-lg bg-warm-white/50 p-4 dark:bg-warm-grey/30"
                >
                  <h4 className="font-medium text-warm-grey dark:text-warm-white">
                    {property.name}
                  </h4>
                  <p className="mt-1 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                    {property.type}
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        Størrelse
                      </span>
                      <span className="text-sm font-medium text-warm-grey dark:text-warm-white">
                        {property.size} m²
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        Leie
                      </span>
                      <span className="text-sm font-medium text-warm-grey dark:text-warm-white">
                        {property.rent} kr/m²
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        Yield
                      </span>
                      <span className="text-sm font-medium text-warm-grey dark:text-warm-white">
                        {property.yield}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Development Projects */}
        <Card>
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <RiRoadMapLine className="size-5 text-warm-grey-2 dark:text-warm-grey-1" />
              <h3 className="font-medium text-warm-grey dark:text-warm-white">
                Utviklingsprosjekter i området
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {marketData.nearbyDevelopments.map((project) => (
                <div
                  key={project.name}
                  className="rounded-lg bg-warm-white/50 p-4 dark:bg-warm-grey/30"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-warm-grey dark:text-warm-white">
                        {project.name}
                      </h4>
                      <p className="mt-1 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        {project.type}
                      </p>
                    </div>
                    <span
                      className={cx(
                        "rounded-full px-2 py-1 text-xs font-medium",
                        project.impact === "positive"
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400"
                          : "bg-warm-grey-2/20 text-warm-grey-2 dark:bg-warm-grey-1/20 dark:text-warm-grey-1",
                      )}
                    >
                      {project.impact === "positive" ? "Positiv" : "Nøytral"}
                    </span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        Status
                      </span>
                      <span className="text-sm font-medium text-warm-grey dark:text-warm-white">
                        {project.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        Ferdigstillelse
                      </span>
                      <span className="text-sm font-medium text-warm-grey dark:text-warm-white">
                        {project.completion}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
