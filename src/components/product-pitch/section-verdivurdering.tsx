
export function SectionVerdivurdering() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center bg-warm-white pb-40 pt-24 text-warm-grey md:pb-48 md:pt-32 dark:bg-warm-grey dark:text-warm-white">
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-warm-grey-2">07</span>
            <h2 className="text-xl font-medium tracking-tight">
              Verdivurdering & Innsikt
            </h2>
          </div>
          <a href="https://www.advantiestate.no" target="_blank" rel="noopener noreferrer" className="text-warm-grey-2 transition-colors hover:text-warm-grey-1">advantiestate.no</a>
        </div>

        <div className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <h3 className="text-3xl font-medium leading-tight md:text-5xl">
              Vet du egentlig hva porteføljen er verdt?
            </h3>
            <p className="text-lg text-warm-grey-2 dark:text-warm-grey-1">
              Vi leverer profesjonell verdivurdering, løpende markedsinnsikt og
              eksklusiv tilgang til transaksjoner — alt bygget på data fra
              Advanti Estates egen analyseplattform.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-warm-grey-2/5 p-6 dark:bg-warm-grey-2/10">
              <div className="mb-4 flex items-baseline gap-2">
                <span className="text-4xl font-medium">2x</span>
                <span className="text-sm text-warm-grey-2">/ år</span>
              </div>
              <h4 className="mb-2 text-xl font-medium">Verdivurdering</h4>
              <p className="mb-4 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                Profesjonell verdivurdering to ganger i året — ferdig
                dokumentert for styret, banken og regnskap.
              </p>
              <ul className="space-y-1.5 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                <li>→ DCF- og yield-basert metodikk</li>
                <li>→ Sammenlignbare transaksjoner</li>
                <li>→ Signert av sertifisert verdsetter</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-warm-grey-2/5 p-6 dark:bg-warm-grey-2/10">
              <div className="mb-4 flex items-baseline gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-light-blue"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z" />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-medium">Nyhetsbrev</h4>
              <p className="mb-4 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                Månedlig nyhetsbrev skreddersydd ditt segment og din region —
                med konkrete handlingsmuligheter.
              </p>
              <ul className="space-y-1.5 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                <li>→ Segment- og regionsspesifikt</li>
                <li>→ Transaksjoner og leiepriser</li>
                <li>→ Kommentarer fra analytiker</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-warm-grey-2/5 p-6 dark:bg-warm-grey-2/10">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-light-blue/20 px-2 py-0.5 text-xs font-medium text-light-blue">
                  Eksklusivt
                </span>
              </div>
              <h4 className="mb-2 text-xl font-medium">Eksklusiv portefølje</h4>
              <p className="mb-4 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                Tilgang til utvalgte off-market transaksjoner og partnerskap før
                de når åpent marked.
              </p>
              <ul className="space-y-1.5 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                <li>→ Førsterett til transaksjoner</li>
                <li>→ Co-investering med nettverket</li>
                <li>→ Direkte dialog med selgere</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
