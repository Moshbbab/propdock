import { usage } from "@/components/data/data"
import { PropdockNavigation } from "@/components/propdock/Navigation"
import { columns } from "@/components/ui/data-table/columns"
import { DataTable } from "@/components/ui/data-table/DataTable"

export default function TablePage() {
  return (
    <main className="container mx-auto px-4 sm:px-6">
      <PropdockNavigation />
      <div className="mt-8 space-y-8">
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold tracking-tight text-warm-grey dark:text-warm-white">
            Næringseiendommer
          </h1>
          <p className="mt-2 text-warm-grey-2 dark:text-warm-grey-1">
            Detaljert oversikt over næringseiendommer.
          </p>
        </div>

        <div className="rounded-lg bg-warm-white/50 p-6 shadow-sm ring-1 ring-warm-grey-2/20 dark:bg-warm-grey/30 dark:ring-warm-grey-1/20">
          <DataTable data={usage} columns={columns} />
        </div>
      </div>
    </main>
  )
}
