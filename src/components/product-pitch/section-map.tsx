import dynamic from "next/dynamic"

const YieldMap = dynamic(
  () => import("./yield-map").then((m) => m.YieldMap),
  { ssr: false },
)

export function SectionMap() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center bg-warm-white pb-40 pt-24 text-warm-grey md:pb-48 md:pt-32 dark:bg-warm-grey dark:text-warm-white">
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-warm-grey-2">05</span>
            <h2 className="text-xl font-medium tracking-tight">Markedet</h2>
          </div>
          <a
            href="https://www.advantiestate.no"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-grey-2 transition-colors hover:text-warm-grey-1"
          >
            advantiestate.no
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-3xl font-medium leading-tight md:text-4xl">
              Oslo i ett blikk —
              <br />
              prime, normal, sekundær
            </h3>
            <p className="text-warm-grey-2 dark:text-warm-grey-1">
              Vi følger ti aktive yield-soner kontinuerlig. Hver sone har
              oppdaterte tall for yield, leiepris og volum, slik at
              beslutningene dine starter med riktig markedsbilde.
            </p>
            <ul className="space-y-2 pt-2 text-sm text-warm-grey-2 dark:text-warm-grey-1">
              <li className="flex items-start gap-2">
                <span className="text-light-blue">→</span>
                Vika &amp; Aker Brygge holder seg under 5%
              </li>
              <li className="flex items-start gap-2">
                <span className="text-light-blue">→</span>
                Bjørvika på vei opp etter renteoppgang
              </li>
              <li className="flex items-start gap-2">
                <span className="text-light-blue">→</span>
                Sekundære soner spreader seg fra prime
              </li>
            </ul>
          </div>
          <div className="h-[420px] lg:col-span-3 lg:h-[480px]">
            <YieldMap />
          </div>
        </div>
      </div>
    </section>
  )
}
