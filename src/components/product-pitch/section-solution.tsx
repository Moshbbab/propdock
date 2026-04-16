
type Props = {
  clientName: string
}

const products = [
  {
    title: "Markedspuls",
    description: "Kontinuerlig markedsovervåking",
    badge: "Flagship",
  },
  {
    title: "Utleid eiendomssjef",
    description: "Outsourcet forvaltning og leieavtaler",
  },
  {
    title: "Verdivurdering",
    description: "Profesjonell verdivurdering 2x i året",
  },
  {
    title: "Transaksjon",
    description: "Salg og gjennomføring av eiendomshandler",
  },
  {
    title: "Kjøpsoppdrag",
    description: "Rådgivning ved tilvekst i porteføljen",
  },
  {
    title: "Utleie",
    description: "Aktivt utleiearbeid mot riktige leietakere",
  },
  {
    title: "Energimerking",
    description: "Lovpålagt merking og rådgivning",
  },
  {
    title: "Nyhetsbrev",
    description: "Skreddersydd innsikt for ditt marked",
  },
  {
    title: "Eksklusiv portefølje",
    description: "Førsterett til utvalgte transaksjoner",
  },
]

export function SectionSolution({ clientName }: Props) {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center bg-warm-white pb-56 pt-24 text-warm-grey md:pb-48 md:pt-32 dark:bg-warm-grey dark:text-warm-white">
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-warm-grey-2">03</span>
            <h2 className="text-xl font-medium tracking-tight">Løsningen</h2>
          </div>
          <a href="https://www.advantiestate.no" target="_blank" rel="noopener noreferrer" className="hidden text-warm-grey-2 transition-colors hover:text-warm-grey-1 sm:inline">advantiestate.no</a>
        </div>

        <div className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium uppercase tracking-widest text-warm-grey-2">
              Én partner — ni tjenester
            </p>
            <h3 className="text-3xl font-medium leading-tight md:text-5xl">
              Alt {clientName} trenger for å drifte, utvikle og skalere
              næringseiendom
            </h3>
            <p className="text-lg text-warm-grey-2 dark:text-warm-grey-1">
              Fra daglig forvaltning til strategisk rådgivning — vi samler
              ekspertise, data og teknologi i én gjennomgående tjeneste.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.title}
                className="group relative rounded-2xl bg-warm-grey-2/5 p-6 transition-colors hover:bg-warm-grey-2/10 dark:bg-warm-grey-2/10 dark:hover:bg-warm-grey-2/20"
              >
                {product.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-light-blue/20 px-2 py-0.5 text-xs font-medium text-light-blue">
                    {product.badge}
                  </span>
                )}
                <div className="space-y-2">
                  <h4 className="font-medium">{product.title}</h4>
                  <p className="text-sm text-warm-grey-2 dark:text-warm-grey-1">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
