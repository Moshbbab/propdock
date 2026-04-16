"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const data = [
  { month: "Q1 '24", yield: 4.2, leiepris: 3100 },
  { month: "Q2 '24", yield: 4.3, leiepris: 3150 },
  { month: "Q3 '24", yield: 4.5, leiepris: 3180 },
  { month: "Q4 '24", yield: 4.7, leiepris: 3220 },
  { month: "Q1 '25", yield: 4.8, leiepris: 3280 },
  { month: "Q2 '25", yield: 4.9, leiepris: 3340 },
  { month: "Q3 '25", yield: 4.85, leiepris: 3410 },
  { month: "Q4 '25", yield: 4.75, leiepris: 3480 },
  { month: "Q1 '26", yield: 4.7, leiepris: 3560 },
]

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-md border border-warm-grey-2/20 bg-warm-grey p-3 shadow-md">
      <p className="mb-1 text-xs font-medium text-warm-white">{label}</p>
      <p className="text-xs text-warm-grey-1">
        Yield:{" "}
        <span className="font-medium text-warm-white">
          {payload[0].value.toFixed(2)}%
        </span>
      </p>
      <p className="text-xs text-warm-grey-1">
        Leiepris:{" "}
        <span className="font-medium text-warm-white">
          {payload[0].payload.leiepris} kr/m²
        </span>
      </p>
    </div>
  )
}

export function MarkedspulsChart() {
  return (
    <div className="rounded-2xl bg-warm-grey-2/10 p-6">
      <div className="mb-4 flex items-baseline justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-warm-grey-2">
            Eksempel: Oslo kontor, prime
          </p>
          <p className="mt-1 text-sm text-warm-grey-1">
            Yield-utvikling siste 9 kvartaler
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-medium text-warm-white">4,7%</p>
          <p className="text-xs text-warm-grey-2">+50 bps YoY</p>
        </div>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="yieldGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9EC5FE" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#9EC5FE" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="2 4"
              stroke="rgba(255,255,255,0.08)"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              stroke="rgba(255,255,255,0.4)"
              tick={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="rgba(255,255,255,0.4)"
              tick={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              domain={[4, 5.2]}
              ticks={[4, 4.25, 4.5, 4.75, 5]}
              tickFormatter={(v: number) => `${v.toFixed(2)}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="yield"
              stroke="#9EC5FE"
              strokeWidth={2}
              fill="url(#yieldGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-xs text-warm-grey-2">
        Faktisk rapport leveres kvartalsvis med segment- og regionsdata tilpasset
        porteføljen.
      </p>
    </div>
  )
}
