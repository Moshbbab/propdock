const beforeAfter = [
  { metric: "Yield", before: "5,8%", after: "6,5%", delta: "+70 bps" },
  {
    metric: "Belegg",
    before: "82%",
    after: "97%",
    delta: "+15 pp",
  },
  {
    metric: "FDV-kost / kvm",
    before: "412 kr",
    after: "338 kr",
    delta: "−18%",
  },
  {
    metric: "Verdiestimat",
    before: "1.20 mrd",
    after: "1.42 mrd",
    delta: "+220 MNOK",
  },
]

export function SectionCaseStudy() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center bg-warm-grey pb-40 pt-24 text-warm-white md:pb-48 md:pt-32">
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-warm-grey-2">09</span>
            <h2 className="text-xl font-medium tracking-tight">Kundecase</h2>
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

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-light-blue/20 px-3 py-1 text-sm font-medium text-light-blue">
              Anonymisert kunde
            </span>
            <h3 className="text-3xl font-medium leading-tight md:text-5xl">
              Slik økte vi yield med 70 bps på 12 måneder
            </h3>
            <p className="text-lg text-warm-grey-1">
              En privateid kontorportefølje på 24.000 kvm i Oslo og Asker. Vi
              tok over forvaltning, reforhandlet leieavtaler og strukturerte
              porteføljen for salg.
            </p>

            <div className="rounded-2xl border-l-2 border-light-blue bg-warm-grey-2/10 p-6">
              <p className="text-warm-white">
                «Vi gikk fra fire ulike leverandører til ett team. Resultatet
                ble synlig på bunnlinjen allerede etter halvåret.»
              </p>
              <p className="mt-3 text-sm text-warm-grey-2">
                Investeringsdirektør, eier av portefølje på 24.000 kvm
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-widest text-warm-grey-2">
              Før vs etter — 12 mnd
            </h4>
            <div className="overflow-hidden rounded-2xl border border-warm-grey-2/20">
              <div className="grid grid-cols-4 bg-warm-grey-2/10 px-6 py-3 text-xs font-medium uppercase tracking-widest text-warm-grey-2">
                <span>Nøkkeltall</span>
                <span className="text-right">Før</span>
                <span className="text-right">Etter</span>
                <span className="text-right">Endring</span>
              </div>
              {beforeAfter.map((row, i) => (
                <div
                  key={row.metric}
                  className={`grid grid-cols-4 items-baseline px-6 py-4 ${
                    i !== beforeAfter.length - 1
                      ? "border-b border-warm-grey-2/10"
                      : ""
                  }`}
                >
                  <span className="font-medium">{row.metric}</span>
                  <span className="text-right text-warm-grey-2 line-through">
                    {row.before}
                  </span>
                  <span className="text-right font-medium text-warm-white">
                    {row.after}
                  </span>
                  <span className="text-right font-medium text-light-blue">
                    {row.delta}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-warm-grey-2">
              Tall delt med tillatelse fra eier. Detaljerte case sendes ved
              forespørsel under NDA.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
