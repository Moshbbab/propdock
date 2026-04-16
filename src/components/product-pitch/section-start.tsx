import type { PitchContext } from "./types"

type Props = {
  ctx: PitchContext
}

export function SectionStart({ ctx }: Props) {
  const { clientName, presenter, presenterRole, dato } = ctx
  const hasMeetingMeta = Boolean(presenter || dato)

  return (
    <section className="relative flex min-h-screen w-full flex-col bg-warm-grey pb-56 pt-12 text-warm-white md:pb-48 md:pt-16">
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-warm-grey-2">01</span>
            <h2 className="text-xl font-medium tracking-tight">
              Advanti Estate
            </h2>
          </div>
          <span className="text-warm-grey-2">Produktpresentasjon</span>
        </div>

        <div className="flex flex-col items-center pt-8 md:pt-12">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-warm-grey-2">
            Til {clientName}
          </p>
          <h1 className="text-balance break-words text-center text-4xl font-medium leading-tight tracking-tight text-warm-white sm:text-5xl md:text-6xl lg:text-7xl">
            Din komplette partner
            <br className="hidden sm:inline" />{" "}
            for næringseiendom
          </h1>
          <p className="mt-6 max-w-xl text-center text-xl text-warm-grey-1">
            Verdivurdering, forvaltning, transaksjon og markedsinnsikt — samlet
            hos én partner.
          </p>

          {hasMeetingMeta && (
            <div className="mt-12 grid w-full max-w-xl gap-px overflow-hidden rounded-2xl bg-warm-grey-2/20 text-sm sm:grid-cols-3">
              <div className="bg-warm-grey px-4 py-3">
                <p className="text-xs uppercase tracking-widest text-warm-grey-2">
                  Forberedt for
                </p>
                <p className="mt-1 font-medium text-warm-white">{clientName}</p>
              </div>
              {presenter && (
                <div className="bg-warm-grey px-4 py-3">
                  <p className="text-xs uppercase tracking-widest text-warm-grey-2">
                    Av
                  </p>
                  <p className="mt-1 font-medium text-warm-white">
                    {presenter}
                  </p>
                  {presenterRole && (
                    <p className="text-xs text-warm-grey-1">{presenterRole}</p>
                  )}
                </div>
              )}
              {dato && (
                <div className="bg-warm-grey px-4 py-3">
                  <p className="text-xs uppercase tracking-widest text-warm-grey-2">
                    Dato
                  </p>
                  <p className="mt-1 font-medium text-warm-white">{dato}</p>
                </div>
              )}
            </div>
          )}

          <div className="mt-12 flex items-center gap-3 text-sm text-warm-grey-2">
            <span>Advanti Estate</span>
            <span>•</span>
            <span>advantiestate.no</span>
          </div>
        </div>
      </div>
    </section>
  )
}
