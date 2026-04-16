"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const data = [
  { year: "2023", kontor: 420, logistikk: 180, handel: 95 },
  { year: "2024", kontor: 510, logistikk: 260, handel: 120 },
  { year: "2025", kontor: 680, logistikk: 340, handel: 155 },
]

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  const total = payload.reduce((sum: number, p: any) => sum + p.value, 0)
  return (
    <div className="rounded-md border border-warm-grey-2/20 bg-warm-grey p-3 shadow-md">
      <p className="mb-2 text-xs font-medium text-warm-white">{label}</p>
      {payload.map((p: any) => (
        <p
          key={p.dataKey}
          className="flex items-center justify-between gap-6 text-xs text-warm-grey-1"
        >
          <span className="capitalize">{p.dataKey}:</span>
          <span className="font-medium text-warm-white">
            {p.value} MNOK
          </span>
        </p>
      ))}
      <div className="mt-2 border-t border-warm-grey-2/20 pt-2">
        <p className="flex items-center justify-between gap-6 text-xs">
          <span className="text-warm-grey-2">Totalt:</span>
          <span className="font-medium text-warm-white">{total} MNOK</span>
        </p>
      </div>
    </div>
  )
}

export function TransaksjonChart() {
  return (
    <div className="min-w-0 overflow-hidden rounded-2xl bg-warm-grey-2/10 p-4 md:p-6">
      <div className="mb-4 flex items-baseline justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-warm-grey-2">
            Formidlet transaksjonsvolum
          </p>
          <p className="mt-1 text-sm text-warm-grey-1">
            Siste tre år — fordelt på segment
          </p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-medium text-warm-white">1,2 mrd</p>
          <p className="text-xs text-warm-grey-2">NOK i 2025</p>
        </div>
      </div>
      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="2 4"
              stroke="rgba(255,255,255,0.08)"
              vertical={false}
            />
            <XAxis
              dataKey="year"
              stroke="rgba(255,255,255,0.4)"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="rgba(255,255,255,0.4)"
              tick={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v}M`}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(255,255,255,0.04)" }}
            />
            <Legend
              wrapperStyle={{ fontSize: 11, paddingTop: 8 }}
              iconType="circle"
            />
            <Bar
              dataKey="kontor"
              stackId="a"
              fill="#9EC5FE"
              radius={[0, 0, 0, 0]}
            />
            <Bar dataKey="logistikk" stackId="a" fill="#6B8BC9" />
            <Bar
              dataKey="handel"
              stackId="a"
              fill="#3F5A8A"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
