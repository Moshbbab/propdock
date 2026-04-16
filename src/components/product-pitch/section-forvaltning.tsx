
const services = [
  {
    title: "Utleid eiendomssjef",
    description:
      "En dedikert eiendomssjef på utleie — uten fast ansettelse. Håndterer drift, leietakeroppfølging og rapportering.",
    highlights: [
      "Daglig drift og oppfølging",
      "Kvartalsvis eierrapportering",
      "Leietakerkontakt og reforhandling",
    ],
  },
  {
    title: "Leieavtaler",
    description:
      "Profesjonell utforming og reforhandling av leieavtaler som sikrer verdien i eiendommen.",
    highlights: [
      "Juridisk kvalitetssikret",
      "Markedsriktige vilkår",
      "Indekserings- og opsjonsstrategi",
    ],
  },
  {
    title: "Utleie",
    description:
      "Aktivt utleiearbeid mot målgrupper som passer eiendommen — fra markedsføring til signert kontrakt.",
    highlights: [
      "Målrettet markedsføring",
      "Screening av leietakere",
      "Minimerte tomgangsperioder",
    ],
  },
  {
    title: "Energimerking",
    description:
      "Lovpålagt energimerking og rådgivning for å løfte eiendommens energiklasse.",
    highlights: [
      "Sertifisert energimerking",
      "Tiltaksplan for forbedring",
      "Rapportering mot EU-taksonomi",
    ],
  },
]

export function SectionForvaltning() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center bg-warm-white pb-56 pt-24 text-warm-grey md:pb-48 md:pt-32 dark:bg-warm-grey dark:text-warm-white">
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-warm-grey-2">06</span>
            <h2 className="text-xl font-medium tracking-tight">Forvaltning</h2>
          </div>
          <a href="https://www.advantiestate.no" target="_blank" rel="noopener noreferrer" className="hidden text-warm-grey-2 transition-colors hover:text-warm-grey-1 sm:inline">advantiestate.no</a>
        </div>

        <div className="space-y-12">
          <div className="max-w-3xl space-y-4">
            <h3 className="text-3xl font-medium leading-tight md:text-5xl">
              Daglig drift — uten å bygge egen organisasjon
            </h3>
            <p className="text-lg text-warm-grey-2 dark:text-warm-grey-1">
              Få tilgang til erfarne eiendomssjefer, juridisk ekspertise og
              tekniske rådgivere som om de var del av teamet ditt.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-warm-grey-2/5 p-6 dark:bg-warm-grey-2/10"
              >
                <h4 className="mb-2 text-xl font-medium">{service.title}</h4>
                <p className="mb-4 text-sm text-warm-grey-2 dark:text-warm-grey-1">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-warm-grey-2 dark:text-warm-grey-1"
                    >
                      <span className="text-light-blue">→</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
