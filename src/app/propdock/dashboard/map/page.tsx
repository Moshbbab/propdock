import { PropertyMapOverview } from "@/components/propdock/PropertyMapOverview"
import { TablePageNavigation } from "@/components/propdock/TablePageNavigation"

export default function MapPage() {
  // Bodø coordinates (WGS84)
  const bodøCoordinates: [number, number] = [14.365, 67.285]

  return (
    <main className="container mx-auto px-4 sm:px-6">
      <TablePageNavigation />
      <div className="mt-8 space-y-8">
        <div className="rounded-lg bg-warm-white/50 p-6 shadow-sm ring-1 ring-warm-grey-2/20 dark:bg-warm-grey/30 dark:ring-warm-grey-1/20">
          <PropertyMapOverview
            centerCoordinates={bodøCoordinates}
            zoom={12}
            showPropertyBorders={true}
          />
        </div>

        <div className="rounded-lg bg-warm-white/50 p-6 shadow-sm ring-1 ring-warm-grey-2/20 dark:bg-warm-grey/30 dark:ring-warm-grey-1/20">
          <h2 className="text-lg font-medium text-warm-grey dark:text-warm-white">
            Bodø
          </h2>
          <div className="mt-4 space-y-4 text-sm text-warm-grey-2 dark:text-warm-grey-1">
            <div className="rounded-md bg-warm-white p-3 shadow-sm dark:bg-warm-grey/50">
              <p className="font-medium text-warm-grey dark:text-warm-white">
                Oversikt
              </p>
              <p className="mt-2">
                Dette kartet viser en oversikt over Bodø. Zoom inn for å se
                offisielle eiendomsgrenser fra Kartverkets Matrikkelkart
                (WMS-tjeneste). Eiendomsgrensene vises som grønne linjer som
                definerer tomtegrensene for hver eiendom.
              </p>
              <p className="mt-2">
                Kartet viser to lag fra Matrikkelen:
                <ul className="ml-5 mt-1 list-disc">
                  <li>
                    TeigMedGnrBnr - Eiendomsområder med gårds- og bruksnumre
                    (vises svakt i bakgrunnen for orientering)
                  </li>
                  <li>
                    Eiendomsgrense - Offisielle eiendomsgrenser (vises som
                    tydelige grønne linjer som definerer eiendomsgrensene)
                  </li>
                </ul>
              </p>
              <p className="mt-2">
                Tallene på kartet er gårds- og bruksnumre (f.eks. 138/4722) som
                identifiserer hver eiendom i Matrikkelen. Eiendomsgrensene viser
                de offisielle grensene til hver eiendom.
              </p>
              <p className="mt-2 text-xs">
                Data fra Kartverket/Matrikkelen. Oppdateres daglig.
                Eiendomsgrensene blir tydeligere jo nærmere du zoomer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
