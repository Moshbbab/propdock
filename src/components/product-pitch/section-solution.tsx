
type Props = {
  clientName: string
}

const flagshipIncludes = [
  "Kvartalsvise markedsrapporter per segment",
  "Sanntids transaksjonsdata og yield-utvikling",
  "Varsler ved vesentlige markedsbevegelser",
  "Direkte tilgang til analytiker",
]

type ServiceGroup = {
  label: string
  caption: string
  services: Array<{ title: string; description: string }>
}

const groups: ServiceGroup[] = [
  {
    label: "Forvaltning",
    caption: "Daglig drift — uten egen organisasjon",
    services: [
      {
        title: "Utleid eiendomssjef",
        description: "Dedikert ansvarlig for drift og leietakere",
      },
      {
        title: "Utleie",
        description: "Aktivt utleiearbeid mot riktige leietakere",
      },
      {
        title: "Energimerking",
        description: "Lovpålagt merking og rådgivning",
      },
    ],
  },
  {
    label: "Transaksjoner",
    caption: "Riktig pris — i riktig marked",
    services: [
      {
        title: "Salg",
        description: "Full gjennomføring av eiendomssalg",
      },
      {
        title: "Kjøpsoppdrag",
        description: "Søk, analyse og forhandling — også off-market",
      },
    ],
  },
  {
    label: "Innsikt",
    caption: "Beslutninger bygget på data",
    services: [
      {
        title: "Verdivurdering",
        description: "Profesjonell verdivurdering 2x i året",
      },
      {
        title: "Nyhetsbrev",
        description: "Skreddersydd innsikt for ditt marked",
      },
      {
        title: "Eksklusiv portefølje",
        description: "Førsterett til utvalgte transaksjoner",
      },
    ],
  },
]

function pad(n: number) {
  return String(n).padStart(2, "0")
}

export function SectionSolution({ clientName }: Props) {
  let counter = 1
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center bg-warm-white pb-56 pt-24 text-warm-grey md:pb-48 md:pt-32 dark:bg-warm-grey dark:text-warm-white">
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-warm-grey-2">03</span>
            <h2 className="text-xl font-medium tracking-tight">Løsningen</h2>
          </div>
          <a
            href="https://www.advantiestate.no"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-warm-grey-2 transition-colors hover:text-warm-grey-1 sm:inline"
          >
            advantiestate.no
          </a>
        </div>

        <div className="mb-12 max-w-3xl space-y-4">
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

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Flagship hero */}
          <div className="relative overflow-hidden rounded-2xl bg-warm-grey-2/10 p-8 ring-1 ring-light-blue/30 dark:bg-warm-grey-2/15 lg:col-span-2">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-light-blue/10 blur-3xl" />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-light-blue/25 px-2.5 py-0.5 text-xs font-medium tracking-wide text-light-blue">
                  Flagship
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-warm-grey-2">
                  00 · Markedspuls
                </span>
              </div>

              <h4 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                Kontinuerlig markedsintelligens — direkte til ditt
                beslutningsbord
              </h4>

              <p className="mt-3 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                Vårt abonnementsprodukt. Data, analyse og varsler fra teamet
                som kjenner markedet du opererer i.
              </p>

              <ul className="mt-6 space-y-2.5">
                {flagshipIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-warm-grey-2 dark:text-warm-grey-1"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-light-blue"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-baseline justify-between border-t border-warm-grey-2/20 pt-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-warm-grey-2">
                    Fra
                  </p>
                  <p className="mt-0.5 text-2xl font-medium tracking-tight">
                    150.000{" "}
                    <span className="text-sm font-normal text-warm-grey-2 dark:text-warm-grey-1">
                      NOK / år
                    </span>
                  </p>
                </div>
                <span className="text-xs text-warm-grey-2">
                  Fast årspris
                </span>
              </div>
            </div>
          </div>

          {/* Service groups */}
          <div className="space-y-10 lg:col-span-3">
            {groups.map((group) => (
              <div key={group.label} className="space-y-3">
                <div className="flex items-baseline justify-between border-b border-warm-grey-2/20 pb-2">
                  <h4 className="text-sm font-medium uppercase tracking-widest text-warm-grey-2">
                    {group.label}
                  </h4>
                  <p className="text-xs text-warm-grey-2 dark:text-warm-grey-1">
                    {group.caption}
                  </p>
                </div>
                <ul className="divide-y divide-warm-grey-2/10">
                  {group.services.map((service) => {
                    const num = pad(counter++)
                    return (
                      <li
                        key={service.title}
                        className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-3"
                      >
                        <span className="font-mono text-xs tabular-nums text-warm-grey-2">
                          {num}
                        </span>
                        <span className="font-medium">{service.title}</span>
                        <span className="text-right text-xs text-warm-grey-2 dark:text-warm-grey-1 md:text-sm">
                          {service.description}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
