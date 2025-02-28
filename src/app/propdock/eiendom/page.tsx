"use client"

import { Card } from "@/components/Card"
import { PropdockNavigation } from "@/components/propdock/Navigation"
import { PropertyMap } from "@/components/propdock/eiendom/PropertyMap"
import {
  RiArchiveLine,
  RiBuilding2Line,
  RiBuildingLine,
  RiCalendarLine,
  RiCheckboxCircleLine,
  RiEarthLine,
  RiFlashlightLine,
  RiHomeOfficeLine,
  RiInformationLine,
  RiMapPin2Line,
  RiPrinterLine,
  RiQuestionLine,
  RiRulerLine,
  RiShareLine,
  RiUser3Line,
} from "@remixicon/react"

interface PropertyInfo {
  label: string
  value: string | number
  unit?: string
  subValue?: string
  isMainCategory?: boolean
}

interface PropertyData {
  name: string
  address: string
  type: string
  propertyId: string
  coordinates: [number, number]
  keyInfo: PropertyInfo[]
  energyInfo: {
    rating: string
    coverage: string
    buildingsRated: string
    validCertificates: number
    issuedDate: string
    issuer: string
    certificateId: string
    buildingId: string
  }
  buildingInfo: {
    type: string
    buildingId: string
    status: string
    area: number
    energyRating: string
  }
}

const propertyData: PropertyData = {
  name: "Klubbholmen 2",
  address: "9409 HARSTAD",
  type: "Næring (lager/logistikk)",
  propertyId: "5503-54/463/0/0",
  coordinates: [16.5418, 68.7982] as [number, number],
  energyInfo: {
    rating: "C Rød",
    coverage: "100%",
    buildingsRated: "1 av 1 bygninger energimerket",
    validCertificates: 1,
    issuedDate: "29.03.2023",
    issuer: "Enova",
    certificateId: "fbb77e9f-ee7e-4a8a-81f2-3d58def5eb4d",
    buildingId: "20249668",
  },
  buildingInfo: {
    type: "Lagerbygg",
    buildingId: "20249668000",
    status: "Tatt i bruk",
    area: 2819,
    energyRating: "C Rød",
  },
  keyInfo: [
    {
      label: "Selveier tomt",
      value: 4974,
      unit: "m²",
      isMainCategory: true,
    },
    {
      label: "Bygninger",
      value: 1,
      isMainCategory: true,
    },
    {
      label: "Bygningstyper",
      value: 1,
      subValue: "Lagerhall",
      isMainCategory: true,
    },
    {
      label: "Byggeår",
      value: "2006",
      subValue: "1 av 1 bygning",
      isMainCategory: true,
    },
    {
      label: "BRA Matrikkel",
      value: 2819,
      unit: "m²",
      subValue: "1 av 1 bygning",
      isMainCategory: true,
    },
    {
      label: "Virksomheter på eiendom",
      value: 1,
      isMainCategory: true,
    },
    {
      label: "Ansatte på eiendom",
      value: 19,
      isMainCategory: true,
    },
  ],
}

export default function EiendomPage() {
  // Extract the key highlights for the hero section
  const keyHighlights = [
    {
      icon: <RiRulerLine className="size-5" />,
      label: "Areal (BRA)",
      value: `${new Intl.NumberFormat("no").format(propertyData.buildingInfo.area)} m²`,
      color:
        "bg-blue-500/10 text-blue-500 dark:bg-blue-400/10 dark:text-blue-400",
    },
    {
      icon: <RiBuilding2Line className="size-5" />,
      label: "Bygningstype",
      value: propertyData.buildingInfo.type,
      color:
        "bg-amber-500/10 text-amber-500 dark:bg-amber-400/10 dark:text-amber-400",
    },
    {
      icon: <RiCalendarLine className="size-5" />,
      label: "Byggeår",
      value: "2006",
      color:
        "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10 dark:text-emerald-400",
    },
    {
      icon: <RiUser3Line className="size-5" />,
      label: "Virksomheter",
      value:
        typeof propertyData.keyInfo[5].value === "number"
          ? new Intl.NumberFormat("no").format(propertyData.keyInfo[5].value)
          : propertyData.keyInfo[5].value,
      color:
        "bg-purple-500/10 text-purple-500 dark:bg-purple-400/10 dark:text-purple-400",
    },
  ]

  return (
    <main className="container mx-auto px-4 sm:px-6">
      <PropdockNavigation />

      {/* Hero Section */}
      <div className="mt-6 border-b border-warm-grey-2/10 pb-6 dark:border-warm-grey-1/10">
        <div className="space-y-5">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-warm-grey-2/10 dark:bg-warm-grey-1/20">
                  <RiBuilding2Line className="size-5 text-warm-grey-2 dark:text-warm-grey-1" />
                </div>
                <div className="inline-block rounded-full bg-warm-grey-2/10 px-3 py-0.5 text-sm text-warm-grey-2 dark:bg-warm-grey-1/20 dark:text-warm-grey-1">
                  {propertyData.type}
                </div>
              </div>
              <div className="space-y-1">
                <h1 className="text-2xl font-bold text-warm-grey md:text-3xl dark:text-warm-white">
                  {propertyData.name}
                </h1>
                <div className="flex items-center gap-2">
                  <RiMapPin2Line className="size-4 text-warm-grey-2 dark:text-warm-grey-1" />
                  <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                    {propertyData.address}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 rounded-full bg-warm-grey-2/5 px-3 py-1.5 text-sm text-warm-grey-2 transition-colors hover:bg-warm-grey-2/10 dark:bg-warm-grey-1/10 dark:text-warm-grey-1 dark:hover:bg-warm-grey-1/20">
                    <RiShareLine className="size-4" />
                    <span>Del</span>
                  </button>
                  <button className="flex items-center gap-1 rounded-full bg-warm-grey-2/5 px-3 py-1.5 text-sm text-warm-grey-2 transition-colors hover:bg-warm-grey-2/10 dark:bg-warm-grey-1/10 dark:text-warm-grey-1 dark:hover:bg-warm-grey-1/20">
                    <RiPrinterLine className="size-4" />
                    <span>Skriv ut</span>
                  </button>
                </div>
                <div className="group relative">
                  <div className="flex cursor-help items-center gap-1.5">
                    <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                      Eiendoms-ID: {propertyData.propertyId}
                    </p>
                    <RiQuestionLine className="size-3.5 text-warm-grey-2/70 dark:text-warm-grey-1/70" />
                  </div>
                  <div className="dark:bg-warm-grey-4 invisible absolute right-0 top-full z-10 mt-1 w-60 rounded-lg bg-white p-3 text-xs shadow-lg transition-all group-hover:visible dark:text-warm-grey-1">
                    Eiendoms-ID er en unik identifikator for eiendommen i det
                    nasjonale eiendomsregisteret.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
            {keyHighlights.map((highlight, index) => (
              <Card
                key={index}
                className="overflow-hidden p-0 transition-transform duration-200 hover:scale-[1.02]"
              >
                <div className="relative flex h-full flex-col">
                  <div
                    className={`absolute left-0 top-0 h-full w-1 ${highlight.color}`}
                  ></div>
                  <div className="flex flex-1 items-center gap-3 p-3 pl-3.5">
                    <div className={`rounded-full p-2 ${highlight.color}`}>
                      {highlight.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-warm-grey-2 dark:text-warm-grey-1">
                        {highlight.label}
                      </p>
                      <p className="text-base font-semibold text-warm-grey dark:text-warm-white">
                        {highlight.value}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {/* Property details and map section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="h-full">
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="mb-6 flex items-center gap-2">
                <RiInformationLine className="size-5 text-warm-grey-2 dark:text-warm-grey-1" />
                <h2 className="text-xl font-semibold text-warm-grey dark:text-warm-white">
                  Detaljert eiendomsinformasjon
                </h2>
              </div>

              {/* Key Information - Enhanced version */}
              <div className="flex-1 space-y-6">
                {/* Category: Tomteinformasjon */}
                <div>
                  <div className="flex items-center gap-2 border-b border-warm-grey-2/10 pb-2 dark:border-warm-grey-1/10">
                    <RiEarthLine className="size-4 text-blue-500 dark:text-blue-400" />
                    <h3 className="font-medium text-warm-grey dark:text-warm-white">
                      Tomteinformasjon
                    </h3>
                  </div>
                  <div className="mt-2 divide-y divide-warm-grey-2/10 dark:divide-warm-grey-1/10">
                    <div className="flex items-center justify-between py-3">
                      <div className="flex-1">
                        <span className="text-warm-grey dark:text-warm-white">
                          {propertyData.keyInfo[0].label}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-warm-grey dark:text-warm-white">
                          {typeof propertyData.keyInfo[0].value === "number"
                            ? new Intl.NumberFormat("no").format(
                                propertyData.keyInfo[0].value,
                              )
                            : propertyData.keyInfo[0].value}
                        </span>
                        {propertyData.keyInfo[0].unit && (
                          <span className="text-warm-grey dark:text-warm-white">
                            {propertyData.keyInfo[0].unit}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category: Bygningsinformasjon */}
                <div>
                  <div className="flex items-center gap-2 border-b border-warm-grey-2/10 pb-2 dark:border-warm-grey-1/10">
                    <RiBuildingLine className="size-4 text-amber-500 dark:text-amber-400" />
                    <h3 className="font-medium text-warm-grey dark:text-warm-white">
                      Bygningsinformasjon
                    </h3>
                  </div>
                  <div className="mt-2 divide-y divide-warm-grey-2/10 dark:divide-warm-grey-1/10">
                    {propertyData.keyInfo.slice(1, 5).map((info) => (
                      <div
                        key={info.label}
                        className="group flex items-center justify-between py-3 transition-colors hover:bg-warm-grey-2/5 dark:hover:bg-warm-grey-1/5"
                      >
                        <div className="flex-1">
                          <span className="text-warm-grey dark:text-warm-white">
                            {info.label}
                          </span>
                          {info.subValue && (
                            <span className="ml-2 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                              {info.subValue}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-medium text-warm-grey dark:text-warm-white">
                            {typeof info.value === "number"
                              ? new Intl.NumberFormat("no").format(info.value)
                              : info.value}
                          </span>
                          {info.unit && (
                            <span className="text-warm-grey dark:text-warm-white">
                              {info.unit}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category: Virksomhetsinformasjon */}
                <div>
                  <div className="flex items-center gap-2 border-b border-warm-grey-2/10 pb-2 dark:border-warm-grey-1/10">
                    <RiHomeOfficeLine className="size-4 text-purple-500 dark:text-purple-400" />
                    <h3 className="font-medium text-warm-grey dark:text-warm-white">
                      Virksomhetsinformasjon
                    </h3>
                  </div>
                  <div className="mt-2 divide-y divide-warm-grey-2/10 dark:divide-warm-grey-1/10">
                    {propertyData.keyInfo.slice(5).map((info) => (
                      <div
                        key={info.label}
                        className="group flex items-center justify-between py-3 transition-colors hover:bg-warm-grey-2/5 dark:hover:bg-warm-grey-1/5"
                      >
                        <div className="flex-1">
                          <span className="text-warm-grey dark:text-warm-white">
                            {info.label}
                          </span>
                          {info.subValue && (
                            <span className="ml-2 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                              {info.subValue}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-medium text-warm-grey dark:text-warm-white">
                            {typeof info.value === "number"
                              ? new Intl.NumberFormat("no").format(info.value)
                              : info.value}
                          </span>
                          {info.unit && (
                            <span className="text-warm-grey dark:text-warm-white">
                              {info.unit}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Property ID Information */}
                <div className="mt-auto flex items-center justify-between border-t border-warm-grey-2/10 pt-4 dark:border-warm-grey-1/10">
                  <div className="flex items-center gap-2">
                    <RiArchiveLine className="size-4 text-warm-grey-2 dark:text-warm-grey-1" />
                    <span className="text-warm-grey-2 dark:text-warm-grey-1">
                      Registerinformasjon
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                      Eiendoms-ID:
                    </span>
                    <span className="font-medium text-warm-grey dark:text-warm-white">
                      {propertyData.propertyId}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="h-full">
            <div className="mb-6 flex items-center gap-2">
              <RiMapPin2Line className="size-5 text-warm-grey-2 dark:text-warm-grey-1" />
              <h2 className="text-xl font-semibold text-warm-grey dark:text-warm-white">
                Kartplassering
              </h2>
            </div>
            <PropertyMap
              address={propertyData.address}
              coordinates={propertyData.coordinates}
            />
          </Card>
        </div>

        {/* Bottom section with energy and building info */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Energy Information */}
          <Card>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <RiFlashlightLine className="size-5 text-warm-grey-2 dark:text-warm-grey-1" />
                  <h3 className="text-xl font-semibold text-warm-grey dark:text-warm-white">
                    Energimerke
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <RiCalendarLine className="size-4 text-warm-grey-2 dark:text-warm-grey-1" />
                  <span className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                    Utstedt {propertyData.energyInfo.issuedDate}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-lg bg-warm-white/50 p-4 dark:bg-warm-grey/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        Energirating
                      </p>
                      <p className="mt-1 text-lg font-medium text-warm-grey dark:text-warm-white">
                        {propertyData.energyInfo.rating}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        Dekningsgrad
                      </p>
                      <p className="mt-1 text-lg font-medium text-emerald-600 dark:text-emerald-400">
                        {propertyData.energyInfo.coverage}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-warm-white/50 p-4 dark:bg-warm-grey/30">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        Bygninger merket
                      </p>
                      <p className="font-medium text-warm-grey dark:text-warm-white">
                        {propertyData.energyInfo.buildingsRated}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        Gyldige sertifikater
                      </p>
                      <p className="font-medium text-warm-grey dark:text-warm-white">
                        {propertyData.energyInfo.validCertificates}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-warm-white/50 p-4 dark:bg-warm-grey/30">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                      Utstedt av
                    </p>
                    <p className="font-medium text-warm-grey dark:text-warm-white">
                      {propertyData.energyInfo.issuer}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                      Sertifikat ID
                    </p>
                    <p className="font-medium text-warm-grey dark:text-warm-white">
                      {propertyData.energyInfo.certificateId}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Building Information */}
          <Card>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <RiBuildingLine className="size-5 text-warm-grey-2 dark:text-warm-grey-1" />
                <h3 className="text-xl font-semibold text-warm-grey dark:text-warm-white">
                  Bygningsinformasjon
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-lg bg-warm-white/50 p-4 dark:bg-warm-grey/30">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        Type
                      </p>
                      <p className="font-medium text-warm-grey dark:text-warm-white">
                        {propertyData.buildingInfo.type}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        Status
                      </p>
                      <div className="flex items-center gap-1">
                        <RiCheckboxCircleLine className="size-4 text-emerald-500" />
                        <p className="font-medium text-warm-grey dark:text-warm-white">
                          {propertyData.buildingInfo.status}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-warm-white/50 p-4 dark:bg-warm-grey/30">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        Bygnings ID
                      </p>
                      <p className="font-medium text-warm-grey dark:text-warm-white">
                        {propertyData.buildingInfo.buildingId}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                        BRA
                      </p>
                      <p className="font-medium text-warm-grey dark:text-warm-white">
                        {new Intl.NumberFormat("no").format(
                          propertyData.buildingInfo.area,
                        )}{" "}
                        m²
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
