"use client"

import { parseRepresentasjonspunkt } from "@/lib/coordinateUtils"
import { RiMapPin2Line } from "@remixicon/react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { useEffect, useRef, useState } from "react"

// Initialize Mapbox
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ""

export interface Property {
  id: string
  name: string
  address: string
  coordinates?: [number, number] // Standard WGS84 [lng, lat]
  representasjonspunkt?: string // Format: "northing easting (epsg)" e.g. "7460592 516375 (32633)"
  area?: number
  rentPerSqm?: number
  yieldRate?: number
}

export interface AreaPolygon {
  id: string
  name: string
  description?: string
  // GeoJSON polygon coordinates: [[[lng, lat], [lng, lat], ...]]
  coordinates: [number, number][][]
  fillColor?: string
  borderColor?: string
}

interface PropertyMapOverviewProps {
  properties?: Property[]
  areas?: AreaPolygon[]
  centerCoordinates?: [number, number]
  zoom?: number
}

export function PropertyMapOverview({
  properties = [],
  areas = [],
  centerCoordinates = [14.365, 67.285], // Default to Bodø center
  zoom = 12,
}: PropertyMapOverviewProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const markers = useRef<mapboxgl.Marker[]>([])
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null)
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [processedProperties, setProcessedProperties] = useState<Property[]>([])

  // Process properties to ensure all have valid coordinates
  useEffect(() => {
    if (!properties.length) return

    // For each property, ensure it has valid coordinates
    const processed = properties.map((property) => {
      // If property already has coordinates, use them
      if (property.coordinates) {
        return property
      }

      // If property has representasjonspunkt, parse it
      if (property.representasjonspunkt) {
        try {
          const point = parseRepresentasjonspunkt(property.representasjonspunkt)
          return {
            ...property,
            coordinates: point.coordinates, // [longitude, latitude]
          }
        } catch (error) {
          console.error(
            `Failed to parse representasjonspunkt for property ${property.id}:`,
            error,
          )
        }
      }

      // Return property without coordinates if we couldn't process it
      return property
    })

    setProcessedProperties(processed)
  }, [properties])

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: centerCoordinates,
      zoom: zoom,
    })

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right")

    return () => {
      clearMarkers()
      map.current?.remove()
      map.current = null
    }
  }, [centerCoordinates, zoom])

  // Add markers when properties change or map is initialized
  useEffect(() => {
    if (!map.current || !processedProperties.length) return

    clearMarkers()

    // Filter out properties without coordinates
    const validProperties = processedProperties.filter(
      (property) => property.coordinates,
    )

    // Add new markers
    validProperties.forEach((property) => {
      if (!property.coordinates) return // Skip properties without coordinates

      const el = document.createElement("div")
      el.className = "marker-container"

      // Create marker element
      const markerElement = document.createElement("div")
      markerElement.className =
        "flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white shadow-md transition-transform hover:scale-110 dark:bg-red-600"
      markerElement.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path></svg>`
      el.appendChild(markerElement)

      // Add tooltip content
      const tooltip = document.createElement("div")
      tooltip.className = "marker-tooltip"
      tooltip.innerHTML = `
        <div class="marker-tooltip-content">
          <div class="font-medium text-warm-grey dark:text-warm-white">${property.name}</div>
          <div class="text-xs text-warm-grey-2 dark:text-warm-grey-1">${property.address}</div>
          ${property.area ? `<div class="text-xs text-warm-grey-2 dark:text-warm-grey-1">Areal: ${property.area} m²</div>` : ""}
          ${property.rentPerSqm ? `<div class="text-xs text-warm-grey-2 dark:text-warm-grey-1">Leie: ${property.rentPerSqm} kr/m²/år</div>` : ""}
          ${property.yieldRate ? `<div class="text-xs text-warm-grey-2 dark:text-warm-grey-1">Yield: ${property.yieldRate}%</div>` : ""}
        </div>
      `
      el.appendChild(tooltip)

      // Create and add the marker
      const marker = new mapboxgl.Marker(el)
        .setLngLat(property.coordinates)
        .addTo(map.current!)

      // Add click event for marker
      el.addEventListener("click", () => {
        setSelectedProperty(
          property.id === selectedProperty ? null : property.id,
        )
      })

      markers.current.push(marker)
    })

    // Add map styling for markers and tooltips
    if (!document.getElementById("marker-styles")) {
      const style = document.createElement("style")
      style.id = "marker-styles"
      style.innerHTML = `
        .marker-container {
          position: relative;
          cursor: pointer;
        }
        .marker-tooltip {
          display: none;
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: 0.375rem;
          padding: 0.75rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          white-space: nowrap;
          z-index: 10;
          margin-bottom: 8px;
          border: 1px solid rgba(229, 231, 235, 0.2);
          min-width: 180px;
        }
        .marker-container:hover .marker-tooltip {
          display: block;
        }
        .marker-tooltip:after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -8px;
          width: 0;
          height: 0;
          border-top: 8px solid white;
          border-right: 8px solid transparent;
          border-left: 8px solid transparent;
        }
        @media (prefers-color-scheme: dark) {
          .marker-tooltip {
            background: #374151;
            border-color: rgba(255, 255, 255, 0.05);
          }
          .marker-tooltip:after {
            border-top-color: #374151;
          }
        }
      `
      document.head.appendChild(style)
    }
  }, [processedProperties, map.current, selectedProperty])

  // Add areas to the map
  useEffect(() => {
    if (!map.current || !areas.length) return

    const mapInstance = map.current

    // Wait for the map to be loaded
    mapInstance.on("load", () => {
      // Add areas as GeoJSON sources and layers
      areas.forEach((area) => {
        // Create a GeoJSON source
        const sourceId = `area-source-${area.id}`
        const layerId = `area-layer-${area.id}`
        const outlineLayerId = `area-outline-${area.id}`

        // Add source if it doesn't exist
        if (!mapInstance.getSource(sourceId)) {
          mapInstance.addSource(sourceId, {
            type: "geojson",
            data: {
              type: "Feature",
              geometry: {
                type: "Polygon",
                coordinates: area.coordinates,
              },
              properties: {
                name: area.name,
                description: area.description || "",
              },
            },
          })

          // Add fill layer
          mapInstance.addLayer({
            id: layerId,
            type: "fill",
            source: sourceId,
            layout: {},
            paint: {
              "fill-color": area.fillColor || "#0ea5e9",
              "fill-opacity": 0.5,
            },
          })

          // Add outline layer
          mapInstance.addLayer({
            id: outlineLayerId,
            type: "line",
            source: sourceId,
            layout: {},
            paint: {
              "line-color": area.borderColor || "#0369a1",
              "line-width": 2,
            },
          })

          // Add click event for the area
          mapInstance.on("click", layerId, (e) => {
            if (e.features && e.features.length > 0) {
              setSelectedArea(area.id === selectedArea ? null : area.id)
            }
          })

          // Change cursor when hovering over the area
          mapInstance.on("mouseenter", layerId, () => {
            mapInstance.getCanvas().style.cursor = "pointer"
          })

          mapInstance.on("mouseleave", layerId, () => {
            mapInstance.getCanvas().style.cursor = ""
          })
        }
      })

      // Fit bounds to include all areas and markers if we have any
      if ((areas.length > 0 || processedProperties.length > 0) && mapInstance) {
        const bounds = new mapboxgl.LngLatBounds()

        // Add area coordinates to bounds
        areas.forEach((area) => {
          area.coordinates[0].forEach((coord) => {
            bounds.extend(coord as [number, number])
          })
        })

        // Add marker coordinates to bounds
        processedProperties.forEach((property) => {
          if (property.coordinates) {
            bounds.extend(property.coordinates)
          }
        })

        // Only fit bounds if we have coordinates
        if (!bounds.isEmpty()) {
          mapInstance.fitBounds(bounds, {
            padding: { top: 50, bottom: 50, left: 50, right: 50 },
            maxZoom: 15,
          })
        }
      }
    })

    // Clean up
    return () => {
      if (mapInstance && mapInstance.loaded()) {
        areas.forEach((area) => {
          const sourceId = `area-source-${area.id}`
          const layerId = `area-layer-${area.id}`
          const outlineLayerId = `area-outline-${area.id}`

          if (mapInstance.getLayer(outlineLayerId)) {
            mapInstance.removeLayer(outlineLayerId)
          }
          if (mapInstance.getLayer(layerId)) {
            mapInstance.removeLayer(layerId)
          }
          if (mapInstance.getSource(sourceId)) {
            mapInstance.removeSource(sourceId)
          }
        })
      }
    }
  }, [areas, map.current, selectedArea])

  // Clear all markers
  const clearMarkers = () => {
    if (markers.current.length) {
      markers.current.forEach((marker) => marker.remove())
      markers.current = []
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-medium text-warm-grey dark:text-warm-white">
            Eiendomsoversikt
          </h3>
          <p className="mt-1 text-sm text-warm-grey-2 dark:text-warm-grey-1">
            {processedProperties.length} eiendommer i porteføljen
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-warm-grey-2 dark:text-warm-grey-1">
          <RiMapPin2Line className="size-4" />
          <span>Kart</span>
        </div>
      </div>

      <div className="aspect-[16/9] w-full overflow-hidden rounded-lg shadow-sm ring-1 ring-warm-grey-2/20 dark:ring-warm-grey-1/20">
        <div ref={mapContainer} className="h-full w-full" />
      </div>
    </div>
  )
}
