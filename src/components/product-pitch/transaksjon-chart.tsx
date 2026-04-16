"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
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

const totals = data.map((d) => ({
  year: d.year,
  total: d.kontor + d.logistikk + d.handel,
}))

const yoy = totals.map((t, i) => {
  if (i === 0) return { ...t, pct: null as number | null }
  const prev = totals[i - 1].total
  return { ...t, pct: Math.round(((t.total - prev) / prev) * 100) }
})

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

function TotalLabel(props: any) {
  const { x, y, width, index } = props
  const entry = yoy[index]
  if (!entry) return null
  return (
    <g>
      <text
        x={x + width / 2}
        y={y - 18}
        textAnchor="middle"
        fill="#f3f1ef"
        fontSize={12}
        fontWeight={500}
      >
        {entry.total} M
      </text>
      {entry.pct !== null && (
        <text
          x={x + width / 2}
          y={y - 4}
          textAnchor="middle"
          fill="#cbeef2"
          fontSize={10}
          fontWeight={500}
        >
          +{entry.pct}%
        </text>
      )}
    </g>
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
          <p className="text-xs text-light-blue">+32% YoY</p>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 36, right: 16, left: -8, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="2 4"
              stroke="rgba(255,255,255,0.08)"
              vertical={false}
            />
            <XAxis
              dataKey="year"
              stroke="rgba(255,255,255,0.4)"
              tick={{ fontSize: 12, fill: "rgba(255,255,255,0.7)" }}
              axisLine={false}
              tickLine={false}
              dy={4}
            />
            <YAxis
              stroke="rgba(255,255,255,0.4)"
              tick={{ fontSize: 11, fill: "rgba(255,255,255,0.55)" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v}M`}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(255,255,255,0.04)" }}
            />
            <Legend
              wrapperStyle={{ fontSize: 11, paddingTop: 12 }}
              iconType="circle"
              iconSize={8}
              formatter={(value) => (
                <span className="capitalize text-warm-grey-1">{value}</span>
              )}
            />
            <Bar
              dataKey="kontor"
              stackId="a"
              fill="#cbeef2"
              isAnimationActive={false}
            />
            <Bar
              dataKey="logistikk"
              stackId="a"
              fill="#d7d0c8"
              isAnimationActive={false}
            />
            <Bar
              dataKey="handel"
              stackId="a"
              fill="#57504a"
              radius={[4, 4, 0, 0]}
              isAnimationActive={false}
            >
              <LabelList dataKey="handel" content={<TotalLabel />} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
