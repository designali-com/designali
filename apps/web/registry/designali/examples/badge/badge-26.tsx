import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"

const invoices = [
  {
    id: "INV-1042",
    client: "Brand identity project",
    amount: "$2,400.00",
    status: "Paid",
  },
  {
    id: "INV-1043",
    client: "Next.js website build",
    amount: "$860.00",
    status: "Overdue",
  },
  {
    id: "INV-1044",
    client: "UI/UX design sprint",
    amount: "$1,125.50",
    status: "Scheduled",
  },
  { id: "INV-1045", client: "3D & motion assets", amount: "$340.00", status: "Draft" },
]

export default function InvoiceStatusList() {
  return (
    <div className="w-full max-w-md divide-y border">
      {invoices.map((invoice) => (
        <div key={invoice.id} className="flex items-center gap-3 p-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{invoice.client}</p>
            <p className="font-sans text-xs text-muted-foreground">
              {invoice.id}
            </p>
          </div>
          <span className="text-sm tabular-nums">{invoice.amount}</span>
          <Badge
            variant={
              invoice.status === "Overdue"
                ? "destructive"
                : invoice.status === "Draft"
                  ? "outline"
                  : "secondary"
            }
            className={cn(
              "w-20",
              invoice.status === "Paid" &&
                "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1"
            )}
          >
            {invoice.status}
          </Badge>
        </div>
      ))}
    </div>
  )
}
