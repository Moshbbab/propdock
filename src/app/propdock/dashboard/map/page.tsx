import {
  AreaPolygon,
  PropertyMapOverview,
} from "@/components/propdock/PropertyMapOverview"
import { TablePageNavigation } from "@/components/propdock/TablePageNavigation"
import { parseRepresentasjonspunkt } from "@/lib/coordinateUtils"

export default function MapPage() {
  // Convert UTM coordinates to WGS84 for the building
  let dronningensGateCoords: [number, number] | undefined
  try {
    const point = parseRepresentasjonspunkt("7463026 473244 (32633)")
    dronningensGateCoords = point.coordinates
  } catch (error) {
    console.error("Failed to parse UTM coordinates:", error)
  }

  // Define a building polygon for Dronningens gate 18 if coordinates were successfully converted
  const areas: AreaPolygon[] = []

  if (dronningensGateCoords) {
    // Create a small polygon around the building point coordinates
    // Creating a small square (approximately 20m x 20m) around the point
    const buildingSize = 0.0002 // Roughly 20m in degrees
    const buildingPolygon: AreaPolygon = {
      id: "dronningens-gate-18",
      name: "Dronningens gate 18",
      description: "Bygning ved Dronningens gate 18",
      coordinates: [
        [
          [
            dronningensGateCoords[0] - buildingSize / 2,
            dronningensGateCoords[1] - buildingSize / 2,
          ],
          [
            dronningensGateCoords[0] + buildingSize / 2,
            dronningensGateCoords[1] - buildingSize / 2,
          ],
          [
            dronningensGateCoords[0] + buildingSize / 2,
            dronningensGateCoords[1] + buildingSize / 2,
          ],
          [
            dronningensGateCoords[0] - buildingSize / 2,
            dronningensGateCoords[1] + buildingSize / 2,
          ],
          [
            dronningensGateCoords[0] - buildingSize / 2,
            dronningensGateCoords[1] - buildingSize / 2,
          ], // Close the polygon
        ],
      ],
      fillColor: "#ef4444", // Red
      borderColor: "#b91c1c", // Darker red
    }

    areas.push(buildingPolygon)
  }

  return (
    <main className="container mx-auto px-4 sm:px-6">
      <TablePageNavigation />
      <div className="mt-8 space-y-8">
        <div className="rounded-lg bg-warm-white/50 p-6 shadow-sm ring-1 ring-warm-grey-2/20 dark:bg-warm-grey/30 dark:ring-warm-grey-1/20">
          <PropertyMapOverview
            properties={[]} // Empty array to prevent any markers from showing
            areas={areas}
            centerCoordinates={dronningensGateCoords || [14.365, 67.285]}
            zoom={18}
          />
        </div>

        <div className="rounded-lg bg-warm-white/50 p-6 shadow-sm ring-1 ring-warm-grey-2/20 dark:bg-warm-grey/30 dark:ring-warm-grey-1/20">
          <h2 className="text-lg font-medium text-warm-grey dark:text-warm-white">
            Dronningens gate 18
          </h2>
          <div className="mt-4 space-y-4 text-sm text-warm-grey-2 dark:text-warm-grey-1">
            {dronningensGateCoords && (
              <div className="rounded-md bg-warm-white p-3 shadow-sm dark:bg-warm-grey/50">
                <p className="font-medium text-warm-grey dark:text-warm-white">
                  Eiendomsinformasjon
                </p>
                <p className="mb-2">
                  Koordinater for representasjonspunktet til hovedteigen
                  (hoveddelen av eiendommen). Oppgitt i meter (nord, øst)
                  EUREF89 og UTM sone (EPSG kode).
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-warm-grey-2 dark:text-warm-grey-1">
                      UTM-koordinater
                    </p>
                    <p className="font-medium text-warm-grey dark:text-warm-white">
                      7463026 473244 (32633)
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-warm-grey-2 dark:text-warm-grey-1">
                      WGS84-koordinater
                    </p>
                    <p className="font-medium text-warm-grey dark:text-warm-white">
                      {dronningensGateCoords[1].toFixed(6)}°N,{" "}
                      {dronningensGateCoords[0].toFixed(6)}°E
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-warm-grey-2 dark:text-warm-grey-1">
                      Areal
                    </p>
                    <p className="font-medium text-warm-grey dark:text-warm-white">
                      1200 m²
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-warm-grey-2 dark:text-warm-grey-1">
                      Adresse
                    </p>
                    <p className="font-medium text-warm-grey dark:text-warm-white">
                      Dronningens gate 18, 8006 Bodø
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs">
                  Bygningen er representert med rød polygon på kartet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
