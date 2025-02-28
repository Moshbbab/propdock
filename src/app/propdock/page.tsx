import { usage } from "@/components/data/data"
import { TablePageNavigation } from "@/components/propdock/TablePageNavigation"
import { columns } from "@/components/ui/data-table/columns"
import { DataTable } from "@/components/ui/data-table/DataTable"

export default function TablePage() {
  return (
    <main className="container mx-auto px-4 sm:px-6">
      <TablePageNavigation />
      <div className="mt-8 space-y-8">
        <div className="rounded-lg bg-warm-white/50 p-6 shadow-sm ring-1 ring-warm-grey-2/20 dark:bg-warm-grey/30 dark:ring-warm-grey-1/20">
          <DataTable data={usage} columns={columns} />
        </div>
      </div>
    </main>
  )
}
