"use client"

import { Card } from "@/components/Card"
import { PropdockNavigation } from "@/components/propdock/Navigation"
import { PropertyMap } from "@/components/propdock/eiendom/PropertyMap"
import { cx } from "@/lib/utils"
import {
  RiBuilding2Line,
  RiBuildingLine,
  RiCalendarLine,
  RiCheckboxCircleLine,
  RiFlashlightLine,
  RiMapPin2Line,
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
      value: "1 av 1 bygning",
      subValue: "2006",
      isMainCategory: true,
    },
    {
      label: "BRA Matrikkel",
      value: "1 av 1 bygning",
      subValue: "2819",
      isMainCategory: true,
    },
    {
      label: "BTA Beregnet",
      value: "−",
    },
    {
      label: "BTA Annonsert",
      value: "−",
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
  return (
    <main className="container mx-auto px-4 sm:px-6">
      <PropdockNavigation />
      <div className="mt-8 space-y-8">
        {/* Top section with map and key info */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="h-full">
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <RiBuilding2Line className="size-5 text-warm-grey-2 dark:text-warm-grey-1" />
                    <h2 className="text-xl font-semibold text-warm-grey dark:text-warm-white">
                      {propertyData.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiMapPin2Line className="size-4 text-warm-grey-2 dark:text-warm-grey-1" />
                    <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                      {propertyData.address}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="rounded-full bg-warm-grey-2/10 px-3 py-1 text-sm text-warm-grey-2 dark:bg-warm-grey-1/10 dark:text-warm-grey-1">
                    {propertyData.type}
                  </div>
                  <p className="mt-2 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                    {propertyData.propertyId}
                  </p>
                </div>
              </div>

              {/* Key Information */}
              <div className="mt-8 flex-1">
                <h3 className="font-medium text-warm-grey dark:text-warm-white">
                  Nøkkelinfo
                </h3>
                <div className="mt-4 divide-y divide-warm-grey-2/20 dark:divide-warm-grey-1/20">
                  {propertyData.keyInfo.map((info) => (
                    <div
                      key={info.label}
                      className={cx(
                        "flex items-center justify-between py-4",
                        info.isMainCategory
                          ? "font-medium text-warm-grey dark:text-warm-white"
                          : "text-warm-grey-2 dark:text-warm-grey-1",
                      )}
                    >
                      <div className="flex-1">
                        <span>{info.label}</span>
                        {info.subValue && (
                          <span className="ml-2 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                            {info.subValue}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <span>
                          {typeof info.value === "number"
                            ? new Intl.NumberFormat("no").format(info.value)
                            : info.value}
                        </span>
                        {info.unit && (
                          <span
                            className={cx(
                              info.isMainCategory
                                ? "text-warm-grey dark:text-warm-white"
                                : "text-warm-grey-2 dark:text-warm-grey-1",
                            )}
                          >
                            {info.unit}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card className="h-full">
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
                  <h3 className="font-medium text-warm-grey dark:text-warm-white">
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
                <h3 className="font-medium text-warm-grey dark:text-warm-white">
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
