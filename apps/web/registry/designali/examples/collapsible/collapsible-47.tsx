import { ArchiveIcon, ChevronDownIcon, DownloadIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const past = [
  { month: "October 2026", amount: "$49.00" },
  { month: "September 2026", amount: "$49.00" },
  { month: "August 2026", amount: "$29.00" },
]

export default function PastInvoicesHistory() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="flex items-center justify-between border p-3">
        <div>
          <p className="text-sm font-medium">November 2026</p>
          <p className="text-xs text-muted-foreground">
            Due Dec 1 · Visa ending 4242
          </p>
        </div>
        <span className="text-sm font-semibold">$49.00</span>
      </div>
      <Collapsible>
        <CollapsibleTrigger
          render={
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start"
            />
          }
        >
          <ArchiveIcon />
          Past invoices
          <ChevronDownIcon className="ml-auto transition-transform group-data-panel-open/button:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
          <ul className="divide-y border">
            {past.map((invoice) => (
              <li
                key={invoice.month}
                className="flex items-center gap-2 px-3 py-2 text-sm"
              >
                <span className="flex-1">{invoice.month}</span>
                <span className="text-muted-foreground">{invoice.amount}</span>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label={"Download " + invoice.month}
                >
                  <DownloadIcon />
                </Button>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
