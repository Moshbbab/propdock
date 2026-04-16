"use client"

import { MapContainer, Rectangle, TileLayer, Tooltip } from "react-leaflet"
import { osloZones, tierStyle } from "./oslo-yield-zones"

const OSLO_CENTER: [number, number] = [59.918, 10.752]

export function YieldMap() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-warm-grey-2/20">
      <MapContainer
        center={OSLO_CENTER}
        zoom={12}
        minZoom={11}
        maxZoom={14}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", background: "#1a1a1a" }}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png" />
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png"
          opacity={0.6}
        />
        {osloZones.map((zone) => {
          const style = tierStyle[zone.tier]
          return (
            <Rectangle
              key={zone.name}
              bounds={zone.bbox}
              pathOptions={{
                color: style.color,
                fillColor: style.color,
                fillOpacity: style.fillOpacity,
                weight: 1.5,
                opacity: 0.8,
              }}
            >
              <Tooltip direction="top" offset={[0, -4]} opacity={1}>
                <div className="space-y-1 font-sans">
                  <p className="text-xs font-semibold uppercase tracking-wider">
                    {zone.name}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">{zone.yield}%</span> yield ·{" "}
                    {zone.rentNormal.toLocaleString("nb-NO")} kr/kvm
                  </p>
                  <p className="text-[10px] uppercase tracking-wider opacity-70">
                    {style.label}
                  </p>
                </div>
              </Tooltip>
            </Rectangle>
          )
        })}
      </MapContainer>

      <div className="pointer-events-none absolute bottom-4 left-4 flex flex-col gap-1.5 rounded-xl border border-warm-grey-2/20 bg-warm-grey/85 p-3 text-xs backdrop-blur">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-warm-grey-2">
          Yield-soner
        </p>
        {(["prime", "normal", "secondary"] as const).map((tier) => (
          <div key={tier} className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{
                backgroundColor: tierStyle[tier].color,
                opacity: tierStyle[tier].fillOpacity + 0.3,
              }}
            />
            <span className="text-warm-grey-1">{tierStyle[tier].label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
