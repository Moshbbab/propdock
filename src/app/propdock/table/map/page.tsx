import { TablePageNavigation } from "@/components/propdock/TablePageNavigation"

export default function MapPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6">
      <TablePageNavigation />
      <div className="mt-8 space-y-8">
        <div className="rounded-lg bg-warm-white/50 p-6 shadow-sm ring-1 ring-warm-grey-2/20 dark:bg-warm-grey/30 dark:ring-warm-grey-1/20">
          <div className="flex h-[500px] items-center justify-center">
            <p className="text-lg text-warm-grey-2 dark:text-warm-grey-1">
              Kartoversikt over eiendommer kommer her
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
