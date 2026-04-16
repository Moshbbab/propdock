
const packages = [
  {
    name: "Markedspuls",
    tagline: "Innsikt for beslutningstakere",
    price: "150.000",
    period: "NOK / år",
    features: [
      "Markedspuls — kvartalsvise rapporter",
      "Skreddersydd nyhetsbrev",
      "Tilgang til analytiker",
    ],
    highlighted: false,
  },
  {
    name: "Partner",
    tagline: "Full eiendomspartner",
    price: "Fra 350.000",
    period: "NOK / år",
    features: [
      "Alt i Markedspuls",
      "Utleid eiendomssjef",
      "Verdivurdering 2x i året",
      "Energimerking av portefølje",
      "Støtte ved utleie og leieavtaler",
    ],
    highlighted: true,
  },
  {
    name: "Transaksjon",
    tagline: "Ved kjøp eller salg",
    price: "Suksesshonorar",
    period: "per oppdrag",
    features: [
      "Transaksjonsoppdrag",
      "Kjøpsrådgivning og søk",
      "Tilgang til eksklusiv portefølje",
      "Forhandling og oppgjør",
    ],
    highlighted: false,
  },
]

export function SectionPricing() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center bg-warm-grey pb-40 pt-24 text-warm-white md:pb-48 md:pt-32">
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-warm-grey-2">11</span>
            <h2 className="text-xl font-medium tracking-tight">Pris & Pakker</h2>
          </div>
          <a href="https://www.advantiestate.no" target="_blank" rel="noopener noreferrer" className="text-warm-grey-2 transition-colors hover:text-warm-grey-1">advantiestate.no</a>
        </div>

        <div className="mb-12 max-w-2xl space-y-4">
          <h3 className="text-3xl font-medium leading-tight md:text-5xl">
            Tre måter å komme i gang
          </h3>
          <p className="text-lg text-warm-grey-1">
            Start med innsikt, utvid til full partnerrolle, og legg til
            transaksjonsoppdrag ved behov.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={
                pkg.highlighted
                  ? "relative rounded-2xl bg-warm-grey-2/20 p-8 ring-1 ring-light-blue/40"
                  : "relative rounded-2xl bg-warm-grey-2/10 p-8 ring-1 ring-warm-grey-2/20"
              }
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-light-blue px-3 py-1 text-xs font-medium text-warm-grey">
                  Mest populær
                </span>
              )}
              <div className="space-y-2">
                <h4 className="text-xl font-medium">{pkg.name}</h4>
                <p className="text-sm text-warm-grey-2">{pkg.tagline}</p>
              </div>
              <div className="my-6 flex items-baseline gap-2">
                <span className="text-4xl font-medium">{pkg.price}</span>
                <span className="text-sm text-warm-grey-1">{pkg.period}</span>
              </div>
              <div className="mb-6 h-px bg-warm-grey-2/20" />
              <ul className="space-y-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-warm-grey-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-warm-grey-2">
          Alle pakker kan skreddersys etter porteføljestørrelse og behov.
        </p>
      </div>
    </section>
  )
}
