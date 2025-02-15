const benefits = [
  {
    title: "Avansert teknologi",
    description:
      "Vi bruker de nyeste teknologiene for å levere markedsledende analyseløsninger.",
  },
  {
    title: "Kontinuerlig utvikling",
    description:
      "Vi oppdaterer og forbedrer plattformen basert på brukertilbakemeldinger og markedsbehov.",
  },
  {
    title: "Datadrevet innsikt",
    description:
      "Tilgang til omfattende markedsdata og analyser for bedre beslutninger.",
  },
  {
    title: "Skalerbar løsning",
    description:
      "Plattformen vokser med dine behov, fra enkelteiendommer til store porteføljer.",
  },
  {
    title: "Kundesupport",
    description:
      "Dedikert støtte og opplæring for å sikre maksimal verdi av plattformen.",
  },
  {
    title: "Sikkerhet i fokus",
    description:
      "Høyeste standarder for datasikkerhet og personvern i alle ledd.",
  },
  {
    title: "API-tilgang",
    description:
      "Integrer Propdock med dine eksisterende systemer via vårt moderne API.",
  },
  {
    title: "Markedsinnsikt",
    description:
      "Få tilgang til sanntidsdata og markedstrender for bedre analyser.",
  },
]

export default function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="mx-auto mt-44">
      <h2
        id="benefits-title"
        className="inline-block bg-gradient-to-t from-warm-grey to-warm-grey-3 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent md:text-5xl dark:from-warm-white dark:to-warm-grey-1"
      >
        Fordeler med Propdock
      </h2>
      <dl className="mt-8 grid grid-cols-4 gap-x-10 gap-y-8 sm:mt-12 sm:gap-y-10">
        {benefits.map((benefit, index) => (
          <div key={index} className="col-span-4 sm:col-span-2 lg:col-span-1">
            <dt className="font-semibold text-warm-grey dark:text-warm-white">
              {benefit.title}
            </dt>
            <dd className="mt-2 leading-7 text-warm-grey-2 dark:text-warm-grey-1">
              {benefit.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
