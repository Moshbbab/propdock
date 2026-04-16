// Static yield zone data for Oslo commercial real estate.
// Used by SectionMap. Numbers are illustrative and based on public market reports.

export type ZoneTier = "prime" | "normal" | "secondary"

export type OsloZone = {
  name: string
  tier: ZoneTier
  yield: number
  rentNormal: number
  bbox: [[number, number], [number, number]]
}

export const osloZones: OsloZone[] = [
  {
    name: "Vika",
    tier: "prime",
    yield: 4.5,
    rentNormal: 5200,
    bbox: [
      [59.9085, 10.715],
      [59.918, 10.732],
    ],
  },
  {
    name: "Aker Brygge",
    tier: "prime",
    yield: 4.7,
    rentNormal: 5000,
    bbox: [
      [59.907, 10.726],
      [59.913, 10.739],
    ],
  },
  {
    name: "Bjørvika",
    tier: "prime",
    yield: 4.9,
    rentNormal: 4800,
    bbox: [
      [59.904, 10.748],
      [59.913, 10.768],
    ],
  },
  {
    name: "Kvadraturen",
    tier: "normal",
    yield: 5.4,
    rentNormal: 4200,
    bbox: [
      [59.908, 10.738],
      [59.914, 10.752],
    ],
  },
  {
    name: "Skøyen",
    tier: "normal",
    yield: 5.6,
    rentNormal: 3900,
    bbox: [
      [59.918, 10.673],
      [59.928, 10.695],
    ],
  },
  {
    name: "Nydalen",
    tier: "normal",
    yield: 6.2,
    rentNormal: 3300,
    bbox: [
      [59.948, 10.758],
      [59.957, 10.778],
    ],
  },
  {
    name: "Lysaker",
    tier: "secondary",
    yield: 6.5,
    rentNormal: 3100,
    bbox: [
      [59.908, 10.628],
      [59.918, 10.65],
    ],
  },
  {
    name: "Helsfyr",
    tier: "secondary",
    yield: 7.2,
    rentNormal: 2700,
    bbox: [
      [59.913, 10.798],
      [59.922, 10.82],
    ],
  },
  {
    name: "Bryn",
    tier: "secondary",
    yield: 7.5,
    rentNormal: 2500,
    bbox: [
      [59.91, 10.815],
      [59.92, 10.835],
    ],
  },
  {
    name: "Økern",
    tier: "secondary",
    yield: 7.8,
    rentNormal: 2400,
    bbox: [
      [59.928, 10.808],
      [59.94, 10.828],
    ],
  },
]

export const tierStyle: Record<
  ZoneTier,
  { color: string; fillOpacity: number; label: string }
> = {
  prime: {
    color: "#9EC5FE",
    fillOpacity: 0.45,
    label: "Prime",
  },
  normal: {
    color: "#6B8BC9",
    fillOpacity: 0.38,
    label: "Normal",
  },
  secondary: {
    color: "#3F5A8A",
    fillOpacity: 0.32,
    label: "Sekundær",
  },
}
