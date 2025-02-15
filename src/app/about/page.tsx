import { Badge } from "@/components/Badge"
import { Button } from "@/components/Button"
import Benefits from "@/components/ui/Benefits"
import TeamGallery from "@/components/ui/TeamGallery"
import { cx } from "@/lib/utils"
import Balancer from "react-wrap-balancer"

export default function About() {
  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="about-overview"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>Om Propdock</Badge>
        <h1
          id="about-overview"
          className="mt-2 inline-block bg-gradient-to-t from-warm-grey to-warm-grey-3 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-warm-white dark:to-warm-grey-1"
        >
          <Balancer>
            Vi er utviklere, som bygger database platformen du ønsker.
          </Balancer>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-warm-grey-2 dark:text-warm-grey-1">
          Eiendomsmarkedet er i konstant endring, og data er nøkkelen til bedre
          beslutninger. <br />
          Propdock er kjernen i denne transformasjonen.
        </p>
      </section>
      <TeamGallery />
      <Benefits />
      <section aria-labelledby="vision-title" className="mx-auto mt-40">
        <h2
          id="vision-title"
          className="inline-block bg-gradient-to-t from-warm-grey to-warm-grey-3 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent md:text-5xl dark:from-warm-white dark:to-warm-grey-1"
        >
          Vår Visjon
        </h2>
        <div className="mt-6 max-w-prose space-y-4 text-warm-grey-2 dark:text-warm-grey-1">
          <p className="text-lg leading-8">
            Vi ser for oss en fremtid der analyse av næringseiendom ikke lenger
            er en kompleks utfordring, men et kraftig konkurransefortrinn. Ved å
            integrere avansert teknologi med markedsdata, transformerer vi
            rådata til strategiske beslutningsgrunnlag.
          </p>
          <p className="text-lg leading-8">
            Vi tror på å fjerne barrierene for kompleks eiendomsanalyse, slik at
            team kan fokusere på innsikt og muligheter fremfor tidkrevende
            manuelt arbeid. Vårt mål er å gi hver organisasjon verktøyene de
            trenger for å utnytte det fulle potensialet i sin
            eiendomsportefølje.
          </p>
          <p
            className={cx(
              "w-fit rotate-3 font-handwriting text-3xl text-light-blue dark:text-light-blue",
            )}
          >
            – Christer Hagen
          </p>
        </div>
        <Button className="mt-32 h-10 w-full bg-warm-grey text-warm-white shadow-xl shadow-light-blue/20 hover:bg-warm-grey-3 dark:bg-warm-grey-2 dark:hover:bg-warm-grey-1">
          Se ledige stillinger
        </Button>
      </section>
    </div>
  )
}
