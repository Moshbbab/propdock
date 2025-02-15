"use client"

import { PropdockNavigation } from "@/components/propdock/Navigation"
import ChartMainAccounting from "@/components/propdock/regnskap/ChartMainAccouting"
import KpiAccountCards from "@/components/propdock/regnskap/KpiAccountCards"
import TableAccounting from "@/components/propdock/regnskap/TableAccounting"

const chartData = [
  {
    date: "2019",
    "Sum driftsinntekter": 0,
    Driftsresultat: 0,
  },
  {
    date: "2020",
    "Sum driftsinntekter": 45,
    Driftsresultat: 2,
  },
  {
    date: "2021",
    "Sum driftsinntekter": 75,
    Driftsresultat: 20,
  },
  {
    date: "2022",
    "Sum driftsinntekter": 15,
    Driftsresultat: -35,
  },
  {
    date: "2023",
    "Sum driftsinntekter": 95,
    Driftsresultat: 45,
  },
]

const summaryData = [
  {
    name: "Sum driftsinntekter",
    value: "95",
    bgColor: "bg-light-blue",
  },
  {
    name: "Driftsresultat",
    value: "45",
    bgColor: "bg-warm-grey-2",
  },
  {
    name: "Resultat før skatt",
    value: "44",
    bgColor: "bg-warm-grey-1",
  },
  {
    name: "Årsresultat",
    value: "44",
    bgColor: "bg-warm-grey",
  },
  {
    name: "Sum eiendeler",
    value: "188",
    bgColor: "bg-warm-grey-2",
  },
  {
    name: "Valuta",
    value: "NOK",
    bgColor: "bg-warm-grey-1",
  },
]

interface KpiData {
  name: string
  stat: string
  previousStat: string
  change: string
  changeType: "positive" | "negative"
  year: string
}

const kpiData: KpiData[] = [
  {
    name: "Sum driftsinntekter",
    stat: "95 MNOK",
    previousStat: "15 MNOK",
    change: "533%",
    changeType: "positive",
    year: "2023",
  },
  {
    name: "Driftsresultat",
    stat: "45 MNOK",
    previousStat: "-35 MNOK",
    change: "229%",
    changeType: "positive",
    year: "2023",
  },
  {
    name: "Sum eiendeler",
    stat: "188 MNOK",
    previousStat: "150 MNOK",
    change: "25%",
    changeType: "positive",
    year: "2023",
  },
]

const financialData = [
  {
    item: "Valuta",
    values: {
      "2019-12": "NOK",
      "2020-12": "NOK",
      "2021-12": "NOK",
      "2022-12": "NOK",
      "2023-12": "NOK",
    },
    isMainCategory: true,
  },
  {
    item: "Sum salgsinntekter",
    values: {
      "2019-12": 0,
      "2020-12": 43,
      "2021-12": 71,
      "2022-12": 9,
      "2023-12": 95,
    },
    isMainCategory: true,
  },
  {
    item: "Annen driftsinntekt",
    values: {
      "2019-12": "-",
      "2020-12": "-",
      "2021-12": "-",
      "2022-12": "-",
      "2023-12": "-",
    },
  },
  {
    item: "Sum driftsinntekter",
    values: {
      "2019-12": 0,
      "2020-12": 43,
      "2021-12": 71,
      "2022-12": 9,
      "2023-12": 95,
    },
    isMainCategory: true,
  },
  {
    item: "Varekostnad",
    values: {
      "2019-12": "-",
      "2020-12": "-",
      "2021-12": "-",
      "2022-12": "-",
      "2023-12": 18,
    },
  },
  {
    item: "Beholdningsendringer",
    values: {
      "2019-12": "-",
      "2020-12": "-",
      "2021-12": "-",
      "2022-12": "-",
      "2023-12": "-",
    },
  },
  {
    item: "Lønnskostnader",
    values: {
      "2019-12": "-",
      "2020-12": "-",
      "2021-12": "-",
      "2022-12": "-",
      "2023-12": "-",
    },
  },
  {
    item: "Herav kun lønn",
    values: {
      "2019-12": "-",
      "2020-12": 0,
      "2021-12": "-",
      "2022-12": "-",
      "2023-12": "-",
    },
    isSubCategory: true,
  },
  {
    item: "Ordinære avskrivninger",
    values: {
      "2019-12": "-",
      "2020-12": "-",
      "2021-12": "-",
      "2022-12": "-",
      "2023-12": "-",
    },
  },
  {
    item: "Nedskrivning",
    values: {
      "2019-12": "-",
      "2020-12": "-",
      "2021-12": "-",
      "2022-12": "-",
      "2023-12": "-",
    },
  },
  {
    item: "Andre driftskostnader",
    values: {
      "2019-12": 2,
      "2020-12": 43,
      "2021-12": 51,
      "2022-12": 51,
      "2023-12": 33,
    },
  },
  {
    item: "Driftsresultat",
    values: {
      "2019-12": -2,
      "2020-12": 0,
      "2021-12": 19,
      "2022-12": -42,
      "2023-12": 45,
    },
    isMainCategory: true,
  },
  {
    item: "Sum finansinntekter",
    values: {
      "2019-12": 0,
      "2020-12": 2,
      "2021-12": 2,
      "2022-12": 0,
      "2023-12": 0,
    },
    isMainCategory: true,
  },
  {
    item: "Sum finanskostnader",
    values: {
      "2019-12": "-",
      "2020-12": 1,
      "2021-12": 1,
      "2022-12": 0,
      "2023-12": 0,
    },
    isMainCategory: true,
  },
  {
    item: "Resultat før skatt",
    values: {
      "2019-12": -2,
      "2020-12": 1,
      "2021-12": 20,
      "2022-12": -42,
      "2023-12": 44,
    },
    isMainCategory: true,
  },
  {
    item: "Sum skatt",
    values: {
      "2019-12": "-",
      "2020-12": "-",
      "2021-12": "-",
      "2022-12": "-",
      "2023-12": "-",
    },
  },
  {
    item: "Ordinært resultat",
    values: {
      "2019-12": -2,
      "2020-12": 1,
      "2021-12": 20,
      "2022-12": -42,
      "2023-12": 44,
    },
    isMainCategory: true,
  },
  {
    item: "Årsresultat",
    values: {
      "2019-12": -2,
      "2020-12": 1,
      "2021-12": 20,
      "2022-12": -42,
      "2023-12": 44,
    },
    isMainCategory: true,
  },
]

export default function Regnskap() {
  return (
    <main className="container mx-auto px-4 sm:px-6">
      <PropdockNavigation />
      <div className="mt-8 space-y-8">
        <KpiAccountCards data={kpiData} />
        <ChartMainAccounting
          chartData={chartData}
          summaryData={summaryData}
          period="2023-12"
        />
        <TableAccounting data={financialData} />
      </div>
    </main>
  )
}
