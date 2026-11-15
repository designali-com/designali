import { ArrowDownLeftIcon, ArrowUpRightIcon, ReceiptIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { cn } from "@workspace/ui/lib/utils"

const transactions = [
  {
    id: "t1",
    merchant: "Corner Bakery",
    category: "Food",
    amount: -8.4,
    date: "Nov 14",
    ref: "POS 4471 · Card ending 2290",
  },
  {
    id: "t2",
    merchant: "Salary · Fernway Ltd",
    category: "Income",
    amount: 4250,
    date: "Nov 13",
    ref: "BACS · Ref NOV-PAYROLL",
  },
  {
    id: "t3",
    merchant: "City Transit",
    category: "Transport",
    amount: -32,
    date: "Nov 12",
    ref: "Monthly pass · Auto top-up",
  },
]

export default function BankTransactionDetails() {
  return (
    <div className="w-full max-w-sm divide-y border">
      {transactions.map((tx) => (
        <Collapsible key={tx.id}>
          <CollapsibleTrigger
            render={
              <Button
                variant="ghost"
                className="h-auto w-full justify-start gap-3 px-3 py-2.5"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-muted">
                  {tx.amount > 0 ? <ArrowDownLeftIcon /> : <ArrowUpRightIcon />}
                </span>
                <span className="flex-1 text-left">
                  <span className="block text-sm">{tx.merchant}</span>
                  <span className="block text-xs font-normal text-muted-foreground">
                    {tx.category} · {tx.date}
                  </span>
                </span>
                <span
                  className={cn(
                    "text-sm",
                    tx.amount > 0 && "text-emerald-600 dark:text-emerald-400"
                  )}
                >
                  {tx.amount > 0 ? "+" : "-"}${Math.abs(tx.amount).toFixed(2)}
                </span>
              </Button>
            }
          />
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <div className="flex items-center justify-between gap-2 bg-muted/50 px-3 py-2 text-xs">
              <span className="text-muted-foreground">{tx.ref}</span>
              <Button variant="outline" size="xs">
                <ReceiptIcon />
                Receipt
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}
