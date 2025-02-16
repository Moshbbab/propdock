import ContactForm from "@/components/forms/ContactForm"
import { constructMetadata } from "@/lib/utils"
import { RiMailLine, RiMapPin2Line, RiPhoneLine } from "@remixicon/react"

export const metadata = constructMetadata({
  title: "Kontakt oss | Propdock",
  description:
    "Ta kontakt med oss for å lære mer om hvordan Propdock kan hjelpe deg med verdsettelse og analyse av næringseiendom.",
})

export default function KontaktPage() {
  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <div className="mx-auto mt-8 grid w-full max-w-6xl gap-16 lg:grid-cols-2">
        {/* Left column - Text content */}
        <div>
          <h1 className="text-balance bg-gradient-to-t from-warm-grey to-warm-grey-3 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl dark:from-warm-white dark:to-warm-grey-1">
            La oss hjelpe deg med din næringseiendom
          </h1>
          <p className="mt-6 max-w-xl text-lg text-warm-grey-2 dark:text-warm-grey-1">
            Ta kontakt med oss for en uforpliktende samtale om dine behov innen
            næringseiendom. Vi hjelper deg med alt fra verdivurdering til kjøp
            og salg.
          </p>

          {/* Contact information */}
          <div className="mt-12">
            <h2 className="text-lg font-semibold text-warm-grey dark:text-warm-white">
              Kontaktinformasjon
            </h2>
            <dl className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <dt className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-warm-grey/5 ring-1 ring-warm-grey/5 dark:bg-warm-grey/20 dark:ring-warm-white/5">
                  <RiPhoneLine className="size-5 text-warm-grey dark:text-warm-white" />
                </dt>
                <dd>
                  <p className="font-medium text-warm-grey dark:text-warm-white">
                    Ring oss
                  </p>
                  <p className="text-warm-grey-2 dark:text-warm-grey-1">
                    <a
                      href="tel:+4799999999"
                      className="hover:text-warm-grey-3 dark:hover:text-warm-grey-1"
                    >
                      +47 999 99 999
                    </a>
                  </p>
                </dd>
              </div>

              <div className="flex items-start gap-3">
                <dt className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-warm-grey/5 ring-1 ring-warm-grey/5 dark:bg-warm-grey/20 dark:ring-warm-white/5">
                  <RiMailLine className="size-5 text-warm-grey dark:text-warm-white" />
                </dt>
                <dd>
                  <p className="font-medium text-warm-grey dark:text-warm-white">
                    Send e-post
                  </p>
                  <p className="text-warm-grey-2 dark:text-warm-grey-1">
                    <a
                      href="mailto:post@propdock.no"
                      className="hover:text-warm-grey-3 dark:hover:text-warm-grey-1"
                    >
                      post@propdock.no
                    </a>
                  </p>
                </dd>
              </div>

              <div className="flex items-start gap-3">
                <dt className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-warm-grey/5 ring-1 ring-warm-grey/5 dark:bg-warm-grey/20 dark:ring-warm-white/5">
                  <RiMapPin2Line className="size-5 text-warm-grey dark:text-warm-white" />
                </dt>
                <dd>
                  <p className="font-medium text-warm-grey dark:text-warm-white">
                    Besøk oss
                  </p>
                  <p className="text-warm-grey-2 dark:text-warm-grey-1">
                    Storgata 1<br />
                    8006 Bodø
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Right column - Form */}
        <div>
          <div className="rounded-xl bg-warm-grey/5 p-6 ring-1 ring-warm-grey/5 dark:bg-warm-grey/10 dark:ring-warm-white/5">
            <h2 className="text-lg font-semibold text-warm-grey dark:text-warm-white">
              Send oss en melding
            </h2>
            <p className="mt-2 text-warm-grey-2 dark:text-warm-grey-1">
              Fyll ut skjemaet under, så tar vi kontakt med deg så snart som
              mulig.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
