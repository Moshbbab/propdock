import { Badge } from "@/components/Badge"
import { AnimatedCTA } from "@/components/ui/AnimatedCTA"
import DisplayCards from "@/components/ui/DisplayCards"
import FeatureDivider from "@/components/ui/FeatureDivider"
import LineChartTjeneste from "@/components/ui/LineChartTjeneste"
import { RiArrowRightUpLine, RiBuildingLine } from "@remixicon/react"
import Balancer from "react-wrap-balancer"

export const metadata = {
  title: "Salg av næringseiendom | Advanti",
  description:
    "Vi er ledende innen salg av næringseiendom i Nord-Norge. Få profesjonell rådgivning og maksimer verdien av din eiendom.",
}

export default function SalgPage() {
  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="salg-overview"
        className="mx-auto w-full max-w-6xl animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>Salg av næringseiendom</Badge>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h1
              id="salg-overview"
              className="mt-2 inline-block bg-gradient-to-t from-warm-grey to-warm-grey-3 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-warm-white dark:to-warm-grey-1"
            >
              <Balancer>
                Maksimer verdien av din næringseiendom med vår ekspertise
              </Balancer>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-warm-grey-2 dark:text-warm-grey-1">
              Med solid markedsinnsikt og lang erfaring hjelper vi deg med å
              maksimere potensialet i din næringseiendom. Vi tilbyr profesjonell
              rådgivning og skreddersydde løsninger for din virksomhet.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="aspect-[4/3] rounded-2xl bg-warm-grey/5 shadow-lg shadow-light-blue/10 ring-1 ring-warm-grey/5 dark:bg-warm-grey/20 dark:shadow-light-blue/10 dark:ring-warm-white/5" />
          </div>
        </div>
      </section>

      <FeatureDivider className="mx-auto mt-24 max-w-6xl" />

      <section className="mx-auto mt-24 w-full max-w-6xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <Badge>Markedsanalyse</Badge>
          <h2 className="text-balance bg-gradient-to-t from-warm-grey to-warm-grey-3 bg-clip-text text-4xl font-semibold tracking-tighter text-transparent md:text-6xl dark:from-warm-white dark:to-warm-grey-1">
            Markedsinnsikt og nøkkeltall
          </h2>
          <p className="max-w-2xl text-lg text-warm-grey-2 dark:text-warm-grey-1">
            <Balancer>
              Vi analyserer kontinuerlig markedet for næringseiendom i
              Nord-Norge. Her er noen nøkkeltall fra våre siste transaksjoner.
            </Balancer>
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="relative">
            <LineChartTjeneste />
          </div>
          <div className="relative flex items-center justify-center md:border-l md:border-warm-grey-2/20 md:pl-8">
            <DisplayCards
              cards={[
                {
                  title: "Kontor Sentrum",
                  description: "Yield: 5.8% - 43,000 kr/m²",
                  date: "Pris: 43 MNOK",
                  className:
                    "[grid-area:stack] hover:-translate-y-10 grayscale-[100%] hover:grayscale-0 transition-all duration-300",
                },
                {
                  title: "Handel Kjøpesenter",
                  description: "Yield: 6.2% - 38,000 kr/m²",
                  date: "Pris: 85 MNOK",
                  className:
                    "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 grayscale-[100%] hover:grayscale-0 transition-all duration-300",
                },
                {
                  title: "Logistikk Industri",
                  description: "Yield: 7.1% - 22,000 kr/m²",
                  date: "Pris: 28 MNOK",
                  className:
                    "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10 grayscale-[100%] hover:grayscale-0 transition-all duration-300",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 w-full max-w-6xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <Badge>Vår prosess</Badge>
          <h2 className="text-balance bg-gradient-to-t from-warm-grey to-warm-grey-3 bg-clip-text text-4xl font-semibold tracking-tighter text-transparent md:text-6xl dark:from-warm-white dark:to-warm-grey-1">
            Slik hjelper vi deg
          </h2>
          <p className="max-w-2xl text-lg text-warm-grey-2 dark:text-warm-grey-1">
            <Balancer>
              Vi har en grundig og profesjonell tilnærming til salgsprosessen.
              Dette sikrer optimal verdi for din eiendom og en trygg
              gjennomføring av salget.
            </Balancer>
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex flex-col gap-4 rounded-xl p-6 transition-all hover:bg-warm-grey/[2.5%] dark:hover:bg-warm-grey-3/50"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-warm-grey/5 ring-1 ring-warm-grey/5 dark:bg-warm-grey/20 dark:ring-warm-white/5">
                <RiBuildingLine className="size-6 text-warm-grey transition-transform group-hover:scale-110 dark:text-warm-white" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-warm-grey dark:text-warm-white">
                  {feature.title}
                  <RiArrowRightUpLine className="size-4 transition-transform group-hover:translate-x-1" />
                </h3>
                <p className="text-balance text-base text-warm-grey-2 dark:text-warm-grey-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto mt-24 w-full max-w-6xl">
        <AnimatedCTA
          badge="Ta kontakt"
          title="Ønsker du en verdsettelse av din eiendom?"
          description="Vi hjelper deg med å finne den reelle verdien av din eiendom. Kontakt oss i dag for en uforpliktende samtale."
          primaryAction={{
            label: "Kontakt oss",
            href: "/kontakt",
          }}
          secondaryAction={{
            label: "Les mer om våre tjenester",
            href: "/tjenester",
          }}
          size="default"
        />
      </section>
    </div>
  )
}

const features = [
  {
    title: "Verdivurdering",
    description:
      "Vi starter med en grundig verdivurdering basert på markedsanalyse og vår lokale ekspertise.",
  },
  {
    title: "Markedsføring",
    description:
      "Vi utvikler en skreddersydd markedsføringsstrategi for å nå de rette kjøperne.",
  },
  {
    title: "Forhandlinger",
    description:
      "Vi sikrer dine interesser gjennom hele prosessen og oppnår best mulig pris.",
  },
  {
    title: "Dokumentasjon",
    description:
      "Vi sørger for all nødvendig dokumentasjon og at alt er i orden før salget.",
  },
  {
    title: "Gjennomføring",
    description:
      "Vi koordinerer hele salgsprosessen og sørger for en trygg gjennomføring.",
  },
  {
    title: "Oppfølging",
    description:
      "Vi følger opp alle detaljer og sikrer en smidig overgang til ny eier.",
  },
]
