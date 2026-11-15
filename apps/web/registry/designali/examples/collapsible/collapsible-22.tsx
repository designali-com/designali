import { ChevronRightIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const invoices = [
  {
    id: "INV-2041",
    customer: "Bluefin Studio",
    status: "Paid",
    lines: [
      { label: "Design retainer, October", amount: 3200 },
      { label: "Stock illustrations", amount: 180 },
    ],
  },
  {
    id: "INV-2042",
    customer: "Kettle & Co.",
    status: "Overdue",
    lines: [
      { label: "Website audit", amount: 950 },
      { label: "Analytics setup", amount: 400 },
      { label: "Hosting, 12 months", amount: 240 },
    ],
  },
]

export default function InvoiceLineItems() {
  return (
    <div className="w-full max-w-md border">
      {invoices.map((invoice) => {
        const total = invoice.lines.reduce((sum, line) => sum + line.amount, 0)
        return (
          <Collapsible key={invoice.id} className="border-b last:border-b-0">
            <div className="flex items-center gap-2 px-2 py-2 text-sm">
              <CollapsibleTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label={"Toggle " + invoice.id}
                  >
                    <ChevronRightIcon className="transition-transform group-data-panel-open/button:rotate-90" />
                  </Button>
                }
              />
              <span className="font-mono text-xs">{invoice.id}</span>
              <span className="flex-1 truncate">{invoice.customer}</span>
              <Badge
                variant={
                  invoice.status === "Paid" ? "secondary" : "destructive"
                }
              >
                {invoice.status}
              </Badge>
              <span className="w-16 text-right font-medium">
                ${total.toLocaleString()}
              </span>
            </div>
            <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
              <div className="space-y-1 bg-muted/50 px-11 py-2 text-xs">
                {invoice.lines.map((line) => (
                  <div key={line.label} className="flex justify-between">
                    <span className="text-muted-foreground">{line.label}</span>
                    <span>${line.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        )
      })}
    </div>
  )
}
