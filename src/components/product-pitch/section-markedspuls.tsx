import { MarkedspulsChart } from "./markedspuls-chart"

const features = [
  "Kvartalsvise markedsrapporter skreddersydd ditt segment",
  "Sanntids transaksjonsdata og yield-utvikling",
  "Varsler ved vesentlige markedsbevegelser",
  "Direkte tilgang til vår analytikerteam",
  "Benchmarking mot sammenlignbare aktører",
  "Prognoser og scenarioanalyser",
]

export function SectionMarkedspuls() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center bg-warm-grey pb-40 pt-24 text-warm-white md:pb-48 md:pt-32">
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-warm-grey-2">04</span>
            <h2 className="text-xl font-medium tracking-tight">Markedspuls</h2>
          </div>
          <a href="https://www.advantiestate.no" target="_blank" rel="noopener noreferrer" className="text-warm-grey-2 transition-colors hover:text-warm-grey-1">advantiestate.no</a>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="inline-block rounded-full bg-light-blue/20 px-3 py-1 text-sm font-medium text-light-blue">
                Flagship-tjeneste
              </span>
              <h3 className="text-3xl font-medium leading-tight md:text-5xl">
                Ligg alltid ett skritt foran markedet
              </h3>
              <p className="text-lg text-warm-grey-1">
                Markedspuls er kontinuerlig markedsintelligens levert direkte
                til ditt beslutningsbord. Vi samler data, analyserer trender og
                varsler før endringene slår inn.
              </p>
            </div>

            <MarkedspulsChart />

            <div className="rounded-2xl bg-warm-grey-2/10 p-6">
              <div className="flex items-baseline justify-between">
                <div>
                  <p className="text-sm text-warm-grey-2">Fra</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-4xl font-medium">150.000</span>
                    <span className="text-sm text-warm-grey-1">NOK / år</span>
                  </div>
                </div>
                <p className="max-w-[12rem] text-right text-xs text-warm-grey-1">
                  Fast årspris — uten skjulte kostnader
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-widest text-warm-grey-2">
              Inkludert i abonnementet
            </h4>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-xl bg-warm-grey-2/5 p-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 flex-shrink-0 text-light-blue"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="text-warm-grey-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
