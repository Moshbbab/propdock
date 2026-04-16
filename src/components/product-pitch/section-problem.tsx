import type { PitchContext } from "./types"

type Props = {
  ctx: PitchContext
}

export function SectionProblem({ ctx }: Props) {
  const { clientName, portefolje } = ctx
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center bg-warm-grey pb-56 pt-24 text-warm-white md:pb-48 md:pt-32">
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-warm-grey-2">02</span>
            <h2 className="text-xl font-medium tracking-tight">Utfordringen</h2>
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

        <div className="space-y-12">
          {portefolje && (
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-2xl border border-light-blue/30 bg-light-blue/10 px-6 py-4">
              <span className="text-xs font-medium uppercase tracking-widest text-light-blue">
                Din portefølje
              </span>
              <span className="text-base text-warm-white">{portefolje}</span>
            </div>
          )}

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-medium leading-tight md:text-4xl">
                Fragmenterte leverandører stjeler tid og innsikt fra{" "}
                {clientName}
              </h3>
              <p className="text-lg text-warm-grey-1">
                Næringseiendomsaktører jonglerer meglere, forvaltere,
                verdsettere og analytikere — med data spredt i regneark og
                e-poster. Resultatet: kostbare feilbeslutninger og tapte
                muligheter.
              </p>
            </div>

            <div className="rounded-2xl bg-warm-grey-2/10 p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-5xl font-medium">4–6</p>
                  <p className="mt-2 text-warm-grey-1">
                    ulike leverandører for én eiendomsportefølje
                  </p>
                </div>
                <div className="h-px bg-warm-grey-2/20" />
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-2xl font-medium">80%</p>
                    <p className="mt-1 text-sm text-warm-grey-1">
                      bruker fortsatt regneark til analyse
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-medium">12+ t</p>
                    <p className="mt-1 text-sm text-warm-grey-1">
                      per måned på manuell rapportering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
