import { TransaksjonChart } from "./transaksjon-chart"

export function SectionTransaksjon() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center bg-warm-grey pb-40 pt-24 text-warm-white md:pb-48 md:pt-32">
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-warm-grey-2">07</span>
            <h2 className="text-xl font-medium tracking-tight">
              Transaksjon & Rådgivning
            </h2>
          </div>
          <a href="https://www.advantiestate.no" target="_blank" rel="noopener noreferrer" className="text-warm-grey-2 transition-colors hover:text-warm-grey-1">advantiestate.no</a>
        </div>

        <div className="space-y-12">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="max-w-3xl space-y-4 lg:col-span-2">
              <h3 className="text-3xl font-medium leading-tight md:text-4xl">
                Riktig pris — i riktig marked — til riktig kjøper
              </h3>
              <p className="text-lg text-warm-grey-1">
                Vi leder kjøp- og salgsprosessen fra strategi til oppgjør, med
                datadrevet prising og et bredt nettverk av kjøpere og selgere.
              </p>
            </div>
            <div className="lg:col-span-3">
              <TransaksjonChart />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl bg-warm-grey-2/10 p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-light-blue/20 text-light-blue">
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
                  >
                    <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3Z" />
                    <path d="M8 17v1a4 4 0 0 0 8 0v-1" />
                  </svg>
                </span>
                <h4 className="text-2xl font-medium">Transaksjon</h4>
              </div>
              <p className="mb-6 text-warm-grey-1">
                Full gjennomføring av eiendomssalg med strukturerte prosesser,
                konfidensialitet og maksimal verdi.
              </p>
              <ul className="space-y-2 text-sm text-warm-grey-1">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-light-blue">→</span>
                  Strategisk prising basert på markedsdata
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-light-blue">→</span>
                  Tilgang til kuratert kjøpernettverk
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-light-blue">→</span>
                  Due diligence-støtte og forhandling
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-light-blue">→</span>
                  Oppgjør og dokumentasjon
                </li>
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-warm-grey-2/10 p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-light-blue/20 text-light-blue">
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
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </span>
                <h4 className="text-2xl font-medium">
                  Kjøpsoppdrag / Rådgivning
                </h4>
              </div>
              <p className="mb-6 text-warm-grey-1">
                Vi identifiserer, analyserer og forhandler fram eiendommer som
                passer din porteføljestrategi — også i off-market.
              </p>
              <ul className="space-y-2 text-sm text-warm-grey-1">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-light-blue">→</span>
                  Søk etter riktige objekter — også off-market
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-light-blue">→</span>
                  Verdiberegning og yield-analyse
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-light-blue">→</span>
                  Forhandlingsstøtte og budstrategi
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-light-blue">→</span>
                  Porteføljerådgivning og strategi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
