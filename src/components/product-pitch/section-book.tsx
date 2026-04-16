import { CalEmbed } from "@/components/cal-embed"

type Props = {
  clientName: string
}

export function SectionBook({ clientName }: Props) {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center bg-warm-white pb-40 pt-24 text-warm-grey md:pb-48 md:pt-32 dark:bg-warm-grey dark:text-warm-white">
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-warm-grey-2">12</span>
            <h2 className="text-xl font-medium tracking-tight">Neste steg</h2>
          </div>
          <a href="https://www.advantiestate.no" target="_blank" rel="noopener noreferrer" className="text-warm-grey-2 transition-colors hover:text-warm-grey-1">advantiestate.no</a>
        </div>

        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-warm-grey-2">
            La oss snakke — {clientName}
          </p>
          <h3 className="text-3xl font-medium leading-tight md:text-5xl">
            Book et uforpliktende møte
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-warm-grey-2 dark:text-warm-grey-1">
            Vi går gjennom porteføljen din og viser hvor vi kan skape mest verdi
            — konkret og uforpliktende.
          </p>
        </div>

        <div className="flex h-[400px] flex-col items-center justify-center px-4 md:h-[600px] md:px-0">
          <CalEmbed calLink="propdock/30min" />
        </div>
      </div>
    </section>
  )
}
