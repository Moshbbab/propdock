"use client"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Label } from "@/components/Label"
import { DcfChart } from "@/components/propdock/DcfChart"
import { PropdockNavigation } from "@/components/propdock/Navigation"
import { ProgressCircle } from "@/components/propdock/ProgressCircle"
import { PropertyMapOverview } from "@/components/propdock/PropertyMapOverview"
import { sampleProperties } from "@/components/propdock/sampleProperties"
import { YieldLineChart } from "@/components/propdock/YieldLineChart"
import { Slider } from "@/components/Slider"
import { Divider } from "@/components/ui/Divider"
import { valueFormatter } from "@/lib/formatters"
import { RiResetLeftLine } from "@remixicon/react"
import React from "react"

export default function Eiendomsvurdering() {
  const [targetOccupancyRate, setTargetOccupancyRate] =
    React.useState<number>(0)
  const [rentableArea, setRentableArea] = React.useState<number>(2500)
  const [rentPerSqm, setRentPerSqm] = React.useState<number>(1500)
  const [operatingCosts, setOperatingCosts] = React.useState<number>(20)
  const [yieldRate, setYieldRate] = React.useState<number>(8)

  const VALUATION_ASSUMPTIONS = React.useMemo(
    () => ({
      avgRentPerSqftAnnually: rentPerSqm,
      operatingExpenseRatio: operatingCosts / 100,
      yieldRate: yieldRate / 100,
      vacancyLoss: 0.05,
    }),
    [rentPerSqm, operatingCosts, yieldRate],
  )

  const actualOccupancyRate = React.useMemo(() => {
    return Math.round(((rentableArea * 0.8) / rentableArea) * 100)
  }, [rentableArea])

  React.useEffect(() => {
    setTargetOccupancyRate(actualOccupancyRate)
  }, [actualOccupancyRate])

  const calculatePercentage = (numerator: number, denominator: number) => {
    if (denominator === 0) return 0
    return (numerator / denominator) * 100
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Math.max(0, Number(event.target.value)), 100)
    setTargetOccupancyRate(value)
  }

  const handleRentableAreaChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = Math.max(0, Number(event.target.value))
    setRentableArea(value)
  }

  const handleRentPerSqmChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = Math.max(0, Number(event.target.value))
    setRentPerSqm(value)
  }

  const handleOperatingCostsChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = Math.max(0, Math.min(100, Number(event.target.value)))
    setOperatingCosts(value)
  }

  const handleYieldRateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = Math.max(0, Math.min(100, Number(event.target.value)))
    setYieldRate(value)
  }

  const displayStats = React.useMemo(() => {
    return {
      total_sqft: rentableArea,
      rented_sqft: Math.round((targetOccupancyRate / 100) * rentableArea),
      vacant_sqft: Math.round(
        ((100 - targetOccupancyRate) / 100) * rentableArea,
      ),
      stable_income: Math.round(
        (targetOccupancyRate / 100) * rentableArea * rentPerSqm,
      ),
      potential_income: Math.round(
        ((100 - targetOccupancyRate) / 100) * rentableArea * rentPerSqm,
      ),
    }
  }, [targetOccupancyRate, rentableArea, rentPerSqm])

  const calculateValuation = (stats: typeof displayStats) => {
    const potentialGrossIncome = stats.total_sqft * rentPerSqm

    const effectiveGrossIncome =
      potentialGrossIncome *
      (1 - VALUATION_ASSUMPTIONS.vacancyLoss) *
      (stats.rented_sqft / stats.total_sqft)

    const operatingExpenses =
      effectiveGrossIncome * VALUATION_ASSUMPTIONS.operatingExpenseRatio

    const netOperatingIncome = effectiveGrossIncome - operatingExpenses

    const propertyValue = netOperatingIncome / VALUATION_ASSUMPTIONS.yieldRate

    return {
      potentialGrossIncome,
      effectiveGrossIncome,
      operatingExpenses,
      netOperatingIncome,
      propertyValue,
    }
  }

  const currentValuation = React.useMemo(
    () => calculateValuation(displayStats),
    [displayStats, rentPerSqm, VALUATION_ASSUMPTIONS],
  )

  const scenarioValuation = React.useMemo(() => {
    if (targetOccupancyRate === actualOccupancyRate) {
      return { ...currentValuation, valuationDiff: 0 }
    }

    const newValuation = calculateValuation(displayStats)
    return {
      ...newValuation,
      valuationDiff:
        (newValuation.propertyValue - currentValuation.propertyValue) /
        currentValuation.propertyValue,
    }
  }, [
    currentValuation,
    displayStats,
    targetOccupancyRate,
    actualOccupancyRate,
    rentPerSqm,
    VALUATION_ASSUMPTIONS,
  ])

  return (
    <main className="container mx-auto px-4 sm:px-6">
      <PropdockNavigation />
      <div className="mt-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex w-full flex-wrap items-start gap-6 rounded-lg bg-warm-white/50 p-6 ring-1 ring-warm-grey-2/20 dark:bg-warm-grey/30 dark:ring-warm-grey-1/20">
            <div className="grid w-full gap-6">
              <div>
                <Label
                  htmlFor="rentable-area"
                  className="text-base font-medium text-warm-grey sm:text-sm dark:text-warm-white"
                >
                  Utleiebart areal (kvm)
                </Label>
                <div className="mt-2">
                  <Input
                    id="rentable-area"
                    type="number"
                    value={rentableArea}
                    onChange={handleRentableAreaChange}
                    min={0}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="rent-per-sqm"
                  className="text-base font-medium text-warm-grey sm:text-sm dark:text-warm-white"
                >
                  Leie per kvm (årlig)
                </Label>
                <div className="mt-2">
                  <Input
                    id="rent-per-sqm"
                    type="number"
                    value={rentPerSqm}
                    onChange={handleRentPerSqmChange}
                    min={0}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="operating-costs"
                  className="text-base font-medium text-warm-grey sm:text-sm dark:text-warm-white"
                >
                  Driftskostnader (% av leieinntekter)
                </Label>
                <div className="mt-2">
                  <Input
                    id="operating-costs"
                    type="number"
                    value={operatingCosts}
                    onChange={handleOperatingCostsChange}
                    min={0}
                    max={100}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="yield-rate"
                  className="text-base font-medium text-warm-grey sm:text-sm dark:text-warm-white"
                >
                  Yield (%)
                </Label>
                <div className="mt-2">
                  <Input
                    id="yield-rate"
                    type="number"
                    value={yieldRate}
                    onChange={handleYieldRateChange}
                    min={0}
                    max={100}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="occupancy-rate"
                  className="text-base font-medium text-warm-grey sm:text-sm dark:text-warm-white"
                >
                  Ønsket utleiegrad (%)
                </Label>
                <div className="mt-2 flex items-center gap-4">
                  <Slider
                    value={[targetOccupancyRate]}
                    onValueChange={([value]) => setTargetOccupancyRate(value)}
                    min={0}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <Input
                    id="occupancy-rate"
                    type="number"
                    value={targetOccupancyRate}
                    onChange={handleInputChange}
                    min={0}
                    max={100}
                    className="w-20 sm:w-16"
                  />
                  {targetOccupancyRate !== actualOccupancyRate ? (
                    <Button
                      onClick={() =>
                        setTargetOccupancyRate(actualOccupancyRate)
                      }
                      variant="ghost"
                      className="group -ml-2.5 py-2.5 sm:py-2"
                    >
                      <RiResetLeftLine className="size-5 text-warm-grey-2 transition group-hover:-rotate-45 group-hover:text-warm-grey dark:text-warm-grey-1 group-hover:dark:text-warm-white" />
                      <span className="sr-only">Tilbakestill</span>
                    </Button>
                  ) : null}
                </div>
                <p className="mt-1 flex items-center gap-2 text-sm tabular-nums">
                  <span className="text-warm-grey-2 dark:text-warm-grey-1">
                    Nåværende: {actualOccupancyRate}%
                  </span>
                  <span className="text-warm-grey dark:text-warm-white">
                    Ønsket: {targetOccupancyRate}%
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-medium text-warm-grey dark:text-warm-white">
              Verdivurderingsoversikt
            </h2>
            <div className="grid gap-6">
              <div className="relative rounded-md border border-warm-grey-2/20 bg-warm-white px-4 py-3 shadow-sm dark:border-warm-grey-1/20 dark:bg-warm-grey">
                <span
                  className="absolute inset-x-0 top-1/2 h-10 w-1 -translate-y-1/2 rounded-r-md bg-blue-500 dark:bg-blue-500"
                  aria-hidden="true"
                />
                <div>
                  <p className="flex items-center justify-between gap-2">
                    <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                      Nåværende verdi
                    </span>
                    <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                      {calculatePercentage(
                        displayStats.rented_sqft,
                        displayStats.total_sqft,
                      ).toFixed(1)}
                      % utleid
                    </span>
                  </p>
                  <p className="flex items-center justify-between gap-2">
                    <span className="text-lg font-medium text-warm-grey dark:text-warm-white">
                      {valueFormatter(
                        (displayStats.stable_income *
                          (1 - operatingCosts / 100)) /
                          (yieldRate / 100),
                      )}{" "}
                      kr
                    </span>
                  </p>
                </div>
              </div>

              <div className="relative rounded-md border border-warm-grey-2/20 bg-warm-white px-4 py-3 shadow-sm dark:border-warm-grey-1/20 dark:bg-warm-grey">
                <span
                  className="absolute inset-x-0 top-1/2 h-10 w-1 -translate-y-1/2 rounded-r-md bg-blue-500 dark:bg-blue-500"
                  aria-hidden="true"
                />
                <div>
                  <p className="flex items-center justify-between gap-2">
                    <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                      Potensiell verdi
                    </span>
                    <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                      100% utleid
                    </span>
                  </p>
                  <p className="flex items-center justify-between gap-2">
                    <span className="text-lg font-medium text-warm-grey dark:text-warm-white">
                      {valueFormatter(
                        ((displayStats.stable_income +
                          displayStats.potential_income) *
                          (1 - operatingCosts / 100)) /
                          (yieldRate / 100),
                      )}{" "}
                      kr
                    </span>
                  </p>
                </div>
              </div>

              <div className="relative rounded-md border border-warm-grey-2/20 bg-warm-white px-4 py-3 shadow-sm dark:border-warm-grey-1/20 dark:bg-warm-grey">
                <span
                  className="absolute inset-x-0 top-1/2 h-10 w-1 -translate-y-1/2 rounded-r-md bg-emerald-500 dark:bg-emerald-500"
                  aria-hidden="true"
                />
                <div>
                  <p className="flex items-center justify-between gap-2">
                    <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                      Verdiøkning
                    </span>
                    <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                      ved full utleie
                    </span>
                  </p>
                  <p className="flex items-center justify-between gap-2">
                    <span className="text-lg font-medium text-warm-grey dark:text-warm-white">
                      {valueFormatter(
                        ((displayStats.stable_income +
                          displayStats.potential_income) *
                          (1 - operatingCosts / 100)) /
                          (yieldRate / 100) -
                          (displayStats.stable_income *
                            (1 - operatingCosts / 100)) /
                            (yieldRate / 100),
                      )}{" "}
                      kr
                    </span>
                    <span className="text-base font-medium text-emerald-600 dark:text-emerald-400">
                      +
                      {(
                        ((displayStats.potential_income /
                          displayStats.stable_income) *
                          100) |
                        0
                      ).toFixed(1)}
                      %
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative mt-12 overflow-x-scroll p-4">
        <div className="relative grid min-w-[40rem] grid-cols-5">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-nowrap text-sm font-medium text-warm-grey dark:text-warm-white">
              1. Totalt areal
            </h2>
            <div className="flex justify-center">
              <ProgressCircle
                radius={45}
                strokeWidth={6}
                value={displayStats.total_sqft}
              >
                <div className="flex flex-col items-center">
                  <span className="mt-1 font-medium tabular-nums text-warm-grey dark:text-warm-white">
                    {valueFormatter(displayStats.total_sqft)}
                  </span>
                  <span className="text-xs font-medium tabular-nums text-warm-grey-2 dark:text-warm-grey-1">
                    kvm
                  </span>
                </div>
              </ProgressCircle>
            </div>
          </div>
          <div className="mt-24 min-w-32">
            <div className="w-full border-t border-dashed border-warm-grey-2/30 dark:border-warm-grey-1/30" />
            <div className="mx-auto h-48 w-px border-l border-dashed border-warm-grey-2/30 dark:border-warm-grey-1/30" />
            <div className="ml-auto w-1/2 border-t border-dashed border-warm-grey-2/30 dark:border-warm-grey-1/30" />
          </div>
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-nowrap text-sm font-medium text-warm-grey dark:text-warm-white">
              2. Utleiegrad
            </h2>
            <div>
              <div className="flex justify-center">
                <ProgressCircle
                  radius={45}
                  strokeWidth={6}
                  value={calculatePercentage(
                    displayStats.rented_sqft,
                    displayStats.total_sqft,
                  )}
                >
                  <div className="flex flex-col items-center">
                    <span className="mt-1 font-medium tabular-nums text-warm-grey dark:text-warm-white">
                      {valueFormatter(displayStats.rented_sqft)}
                    </span>
                    <span className="text-xs font-medium tabular-nums text-warm-grey-2 dark:text-warm-grey-1">
                      {calculatePercentage(
                        displayStats.rented_sqft,
                        displayStats.total_sqft,
                      ).toFixed(1)}
                      %
                    </span>
                  </div>
                </ProgressCircle>
              </div>
              <p className="mt-4 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                Utleid areal
              </p>
            </div>
            <div className="mt-10">
              <div className="flex justify-center">
                <ProgressCircle
                  radius={45}
                  strokeWidth={6}
                  value={calculatePercentage(
                    displayStats.vacant_sqft,
                    displayStats.total_sqft,
                  )}
                >
                  <div className="flex flex-col items-center">
                    <span className="mt-1 font-medium tabular-nums text-warm-grey dark:text-warm-white">
                      {valueFormatter(displayStats.vacant_sqft)}
                    </span>
                    <span className="text-xs font-medium tabular-nums text-warm-grey-2 dark:text-warm-grey-1">
                      {calculatePercentage(
                        displayStats.vacant_sqft,
                        displayStats.total_sqft,
                      ).toFixed(1)}
                      %
                    </span>
                  </div>
                </ProgressCircle>
              </div>
              <p className="mt-4 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                Ledig areal
              </p>
            </div>
          </div>
          <div className="mt-24 min-w-32">
            <div className="w-full border-t border-dashed border-warm-grey-2/30 dark:border-warm-grey-1/30" />
            <div className="mx-auto h-48 w-px border-l border-dashed border-warm-grey-2/30 dark:border-warm-grey-1/30" />
            <div className="ml-auto w-1/2 border-t border-dashed border-warm-grey-2/30 dark:border-warm-grey-1/30" />
          </div>
          <div className="flex flex-col items-center gap-6">
            <div>
              <h2 className="text-nowrap text-sm font-medium text-warm-grey dark:text-warm-white">
                3. Inntektsoversikt
              </h2>
            </div>
            <div>
              <div className="flex justify-center">
                <ProgressCircle
                  variant="success"
                  radius={45}
                  strokeWidth={6}
                  value={calculatePercentage(
                    displayStats.stable_income,
                    displayStats.stable_income + displayStats.potential_income,
                  )}
                >
                  <div className="flex flex-col items-center">
                    <span className="mt-1 font-medium tabular-nums text-warm-grey dark:text-warm-white">
                      {valueFormatter(displayStats.stable_income)}
                    </span>
                    <span className="text-xs font-medium tabular-nums text-warm-grey-2 dark:text-warm-grey-1">
                      kr/år
                    </span>
                  </div>
                </ProgressCircle>
              </div>
              <p className="mt-4 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                Faktisk leieinntekt
              </p>
            </div>
            <div className="mt-10">
              <div className="flex justify-center">
                <ProgressCircle
                  variant="warning"
                  radius={45}
                  strokeWidth={6}
                  value={calculatePercentage(
                    displayStats.potential_income,
                    displayStats.stable_income + displayStats.potential_income,
                  )}
                >
                  <div className="flex flex-col items-center">
                    <span className="mt-1 font-medium tabular-nums text-warm-grey dark:text-warm-white">
                      {valueFormatter(displayStats.potential_income)}
                    </span>
                    <span className="text-xs font-medium tabular-nums text-warm-grey-2 dark:text-warm-grey-1">
                      kr/år
                    </span>
                  </div>
                </ProgressCircle>
              </div>
              <p className="mt-4 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                Potensiell leieinntekt
              </p>
            </div>
          </div>
        </div>
      </section>

      <Divider className="my-12" />
      <section className="relative mt-12">
        <h2 className="font-medium text-warm-grey dark:text-warm-white">
          Verdivurderingsoversikt
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="relative rounded-md border border-warm-grey-2/20 bg-warm-white px-4 py-3 shadow-sm dark:border-warm-grey-1/20 dark:bg-warm-grey">
            <span
              className="absolute inset-x-0 top-1/2 h-10 w-1 -translate-y-1/2 rounded-r-md bg-blue-500 dark:bg-blue-500"
              aria-hidden="true"
            />
            <div>
              <p className="flex items-center justify-between gap-2">
                <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                  Nåværende verdi
                </span>
                <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                  {calculatePercentage(
                    displayStats.rented_sqft,
                    displayStats.total_sqft,
                  ).toFixed(1)}
                  % utleid
                </span>
              </p>
              <p className="flex items-center justify-between gap-2">
                <span className="text-lg font-medium text-warm-grey dark:text-warm-white">
                  {valueFormatter(
                    (displayStats.stable_income * (1 - operatingCosts / 100)) /
                      (yieldRate / 100),
                  )}{" "}
                  kr
                </span>
              </p>
            </div>
          </div>

          <div className="relative rounded-md border border-warm-grey-2/20 bg-warm-white px-4 py-3 shadow-sm dark:border-warm-grey-1/20 dark:bg-warm-grey">
            <span
              className="absolute inset-x-0 top-1/2 h-10 w-1 -translate-y-1/2 rounded-r-md bg-blue-500 dark:bg-blue-500"
              aria-hidden="true"
            />
            <div>
              <p className="flex items-center justify-between gap-2">
                <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                  Potensiell verdi
                </span>
                <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                  100% utleid
                </span>
              </p>
              <p className="flex items-center justify-between gap-2">
                <span className="text-lg font-medium text-warm-grey dark:text-warm-white">
                  {valueFormatter(
                    ((displayStats.stable_income +
                      displayStats.potential_income) *
                      (1 - operatingCosts / 100)) /
                      (yieldRate / 100),
                  )}{" "}
                  kr
                </span>
              </p>
            </div>
          </div>

          <div className="relative rounded-md border border-warm-grey-2/20 bg-warm-white px-4 py-3 shadow-sm dark:border-warm-grey-1/20 dark:bg-warm-grey">
            <span
              className="absolute inset-x-0 top-1/2 h-10 w-1 -translate-y-1/2 rounded-r-md bg-emerald-500 dark:bg-emerald-500"
              aria-hidden="true"
            />
            <div>
              <p className="flex items-center justify-between gap-2">
                <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                  Verdiøkning
                </span>
                <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                  ved full utleie
                </span>
              </p>
              <p className="flex items-center justify-between gap-2">
                <span className="text-lg font-medium text-warm-grey dark:text-warm-white">
                  {valueFormatter(
                    ((displayStats.stable_income +
                      displayStats.potential_income) *
                      (1 - operatingCosts / 100)) /
                      (yieldRate / 100) -
                      (displayStats.stable_income *
                        (1 - operatingCosts / 100)) /
                        (yieldRate / 100),
                  )}{" "}
                  kr
                </span>
                <span className="text-base font-medium text-emerald-600 dark:text-emerald-400">
                  +
                  {(
                    ((displayStats.potential_income /
                      displayStats.stable_income) *
                      100) |
                    0
                  ).toFixed(1)}
                  %
                </span>
              </p>
            </div>
          </div>

          {/* Second row of cards for income, expenses, and net income */}
          <div className="relative rounded-md border border-warm-grey-2/20 bg-warm-white px-4 py-3 shadow-sm dark:border-warm-grey-1/20 dark:bg-warm-grey">
            <span
              className="absolute inset-x-0 top-1/2 h-10 w-1 -translate-y-1/2 rounded-r-md bg-light-blue dark:bg-light-blue"
              aria-hidden="true"
            />
            <div>
              <p className="flex items-center justify-between gap-2">
                <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                  Leieinntekter
                </span>
                <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                  Årlig
                </span>
              </p>
              <p className="flex items-center justify-between gap-2">
                <span className="text-lg font-medium text-warm-grey dark:text-warm-white">
                  {valueFormatter(displayStats.stable_income)} kr
                </span>
              </p>
            </div>
          </div>

          <div className="relative rounded-md border border-warm-grey-2/20 bg-warm-white px-4 py-3 shadow-sm dark:border-warm-grey-1/20 dark:bg-warm-grey">
            <span
              className="absolute inset-x-0 top-1/2 h-10 w-1 -translate-y-1/2 rounded-r-md bg-red-500 dark:bg-red-500"
              aria-hidden="true"
            />
            <div>
              <p className="flex items-center justify-between gap-2">
                <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                  Driftskostnader
                </span>
                <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                  {operatingCosts}% av inntekter
                </span>
              </p>
              <p className="flex items-center justify-between gap-2">
                <span className="text-lg font-medium text-warm-grey dark:text-warm-white">
                  {valueFormatter(
                    displayStats.stable_income * (operatingCosts / 100),
                  )}{" "}
                  kr
                </span>
              </p>
            </div>
          </div>

          <div className="relative rounded-md border border-warm-grey-2/20 bg-warm-white px-4 py-3 shadow-sm dark:border-warm-grey-1/20 dark:bg-warm-grey">
            <span
              className="absolute inset-x-0 top-1/2 h-10 w-1 -translate-y-1/2 rounded-r-md bg-emerald-500 dark:bg-emerald-500"
              aria-hidden="true"
            />
            <div>
              <p className="flex items-center justify-between gap-2">
                <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                  Netto driftsinntekt
                </span>
                <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                  NOI
                </span>
              </p>
              <p className="flex items-center justify-between gap-2">
                <span className="text-lg font-medium text-warm-grey dark:text-warm-white">
                  {valueFormatter(
                    displayStats.stable_income * (1 - operatingCosts / 100),
                  )}{" "}
                  kr
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-warm-grey dark:text-warm-white">
              Driftsmetrikk
            </h3>
            <ul
              role="list"
              className="mt-2 divide-y divide-warm-grey-2/20 text-sm dark:divide-warm-grey-1/20"
            >
              {[
                {
                  label: "Faktisk leieinntekt",
                  value: displayStats.stable_income,
                  info: "Utleid areal × Leie per kvm",
                },
                {
                  label: "Potensiell leieinntekt",
                  value: displayStats.potential_income,
                  info: "Ledig areal × Leie per kvm",
                },
                {
                  label: "Driftskostnader",
                  value: displayStats.stable_income * (operatingCosts / 100),
                  info: `${operatingCosts}% av faktisk leieinntekt (inkl. vedlikehold)`,
                },
                {
                  label: "Netto driftsinntekt",
                  value:
                    displayStats.stable_income * (1 - operatingCosts / 100),
                  info: "Leieinntekt - Driftskostnader",
                },
                {
                  label: "Eiendomsverdi",
                  value:
                    (displayStats.stable_income * (1 - operatingCosts / 100)) /
                    (yieldRate / 100),
                  info: `Netto driftsinntekt / Yield (${yieldRate}%)`,
                },
              ].map((metric) => (
                <li
                  key={metric.label}
                  className="flex items-center justify-between py-3"
                >
                  <div>
                    <span>{metric.label}</span>
                    <p className="text-xs text-warm-grey-2 dark:text-warm-grey-1">
                      {metric.info}
                    </p>
                  </div>
                  <span className="font-medium text-warm-grey dark:text-warm-white">
                    {valueFormatter(Math.round(metric.value))} kr
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-warm-grey dark:text-warm-white">
              Beregningsforklaring
            </h3>
            <div className="mt-4 space-y-4 text-sm">
              <div>
                <h4 className="font-medium text-warm-grey dark:text-warm-white">
                  1. Leieinntekter
                </h4>
                <ul className="mt-2 list-disc space-y-2 pl-4 text-warm-grey-2 dark:text-warm-grey-1">
                  <li>
                    Faktisk leieinntekt beregnes fra utleid areal (
                    {valueFormatter(displayStats.rented_sqft)} kvm) × leie per
                    kvm ({valueFormatter(rentPerSqm)} kr)
                  </li>
                  <li>
                    Potensiell leieinntekt beregnes fra ledig areal (
                    {valueFormatter(displayStats.vacant_sqft)} kvm) × leie per
                    kvm ({valueFormatter(rentPerSqm)} kr)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-warm-grey dark:text-warm-white">
                  2. Kostnader
                </h4>
                <ul className="mt-2 list-disc space-y-2 pl-4 text-warm-grey-2 dark:text-warm-grey-1">
                  <li>
                    Driftskostnader (inkl. vedlikehold) beregnes som{" "}
                    {operatingCosts}% av faktisk leieinntekt (
                    {valueFormatter(displayStats.stable_income)} kr)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-warm-grey dark:text-warm-white">
                  3. Verdiberegning
                </h4>
                <ul className="mt-2 list-disc space-y-2 pl-4 text-warm-grey-2 dark:text-warm-grey-1">
                  <li>
                    Nåværende netto driftsinntekt:{" "}
                    {valueFormatter(
                      displayStats.stable_income * (1 - operatingCosts / 100),
                    )}{" "}
                    kr
                  </li>
                  <li>
                    Potensiell netto driftsinntekt:{" "}
                    {valueFormatter(
                      (displayStats.stable_income +
                        displayStats.potential_income) *
                        (1 - operatingCosts / 100),
                    )}{" "}
                    kr
                  </li>
                  <li>Yield: {yieldRate}%</li>
                  <li>
                    Nåværende verdi: Netto driftsinntekt / Yield ={" "}
                    {valueFormatter(
                      (displayStats.stable_income *
                        (1 - operatingCosts / 100)) /
                        (yieldRate / 100),
                    )}{" "}
                    kr
                  </li>
                  <li>
                    Potensiell verdi: Potensiell netto driftsinntekt / Yield ={" "}
                    {valueFormatter(
                      ((displayStats.stable_income +
                        displayStats.potential_income) *
                        (1 - operatingCosts / 100)) /
                        (yieldRate / 100),
                    )}{" "}
                    kr
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <YieldLineChart
        netOperatingIncome={
          displayStats.stable_income * (1 - operatingCosts / 100)
        }
        currentYield={yieldRate}
      />

      <DcfChart
        rentalIncome={displayStats.stable_income}
        operatingCosts={displayStats.stable_income * (operatingCosts / 100)}
        discountRate={yieldRate + 2}
        exitYield={yieldRate}
        years={10}
        growthRate={2.0}
      />

      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <h3 className="text-sm font-medium text-warm-grey dark:text-warm-white">
            DCF Metrikk
          </h3>
          <ul
            role="list"
            className="mt-2 divide-y divide-warm-grey-2/20 text-sm dark:divide-warm-grey-1/20"
          >
            {[
              {
                label: "Startinntekt",
                value: displayStats.stable_income,
                info: "Nåværende årlig leieinntekt",
              },
              {
                label: "Driftskostnader",
                value: displayStats.stable_income * (operatingCosts / 100),
                info: `${operatingCosts}% av leieinntekter (inkl. vedlikehold)`,
              },
              {
                label: "Årlig vekst",
                value: "2.0%",
                info: "Forventet årlig økning i inntekter og kostnader",
              },
              {
                label: "Diskonteringsrente",
                value: `${(yieldRate + 2).toFixed(1)}%`,
                info: `Yield + 2% risikopremie`,
              },
              {
                label: "Exit yield",
                value: `${yieldRate.toFixed(1)}%`,
                info: "Yield ved salg år 10",
              },
              {
                label: "Terminalverdi",
                value:
                  (displayStats.stable_income *
                    (1 - operatingCosts / 100) *
                    Math.pow(1.02, 10)) /
                  (yieldRate / 100),
                info: "NOI år 10 / Exit yield",
              },
            ].map((metric) => (
              <li
                key={metric.label}
                className="flex items-center justify-between py-3"
              >
                <div>
                  <span>{metric.label}</span>
                  <p className="text-xs text-warm-grey-2 dark:text-warm-grey-1">
                    {metric.info}
                  </p>
                </div>
                <span className="font-medium text-warm-grey dark:text-warm-white">
                  {typeof metric.value === "string"
                    ? metric.value
                    : `${valueFormatter(Math.round(metric.value))} kr`}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium text-warm-grey dark:text-warm-white">
            DCF Beregningsforklaring
          </h3>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <h4 className="font-medium text-warm-grey dark:text-warm-white">
                1. Kontantstrømmer
              </h4>
              <ul className="mt-2 list-disc space-y-2 pl-4 text-warm-grey-2 dark:text-warm-grey-1">
                <li>
                  Starter med nåværende leieinntekt på{" "}
                  {valueFormatter(displayStats.stable_income)} kr
                </li>
                <li>
                  Trekker fra driftskostnader på {operatingCosts}% (
                  {valueFormatter(
                    displayStats.stable_income * (operatingCosts / 100),
                  )}{" "}
                  kr)
                </li>
                <li>Øker med 2% årlig for inflasjon og markedsvekst</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-warm-grey dark:text-warm-white">
                2. Nåverdiberegning
              </h4>
              <ul className="mt-2 list-disc space-y-2 pl-4 text-warm-grey-2 dark:text-warm-grey-1">
                <li>
                  Diskonteringsrente på {(yieldRate + 2).toFixed(1)}%
                  reflekterer:
                  <ul className="ml-4 mt-1 list-[circle]">
                    <li>Grunnleggende yield: {yieldRate}%</li>
                    <li>Risikopremie: 2%</li>
                  </ul>
                </li>
                <li>
                  Hver fremtidig kontantstrøm diskonteres tilbake til dagens
                  verdi
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-warm-grey dark:text-warm-white">
                3. Terminalverdi
              </h4>
              <ul className="mt-2 list-disc space-y-2 pl-4 text-warm-grey-2 dark:text-warm-grey-1">
                <li>
                  Beregnes som NOI i år 10 delt på exit yield ({yieldRate}%)
                </li>
                <li>Representerer forventet salgsverdi etter 10 år</li>
                <li>
                  Diskonteres tilbake til dagens verdi med samme
                  diskonteringsrente
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Divider className="my-12" />

      <section className="mt-12">
        <PropertyMapOverview properties={sampleProperties} />
      </section>
    </main>
  )
}
