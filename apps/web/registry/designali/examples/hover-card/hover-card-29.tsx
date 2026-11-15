import { ReceiptIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { Separator } from "@workspace/ui/components/separator"

const invoices = [
  {
    id: "INV-0092",
    date: "Mar 1, 2025",
    lines: [
      ["Team plan × 8 seats", "$144.00"],
      ["Extra storage", "$6.00"],
    ],
    total: "$150.00",
  },
  {
    id: "INV-0081",
    date: "Feb 1, 2025",
    lines: [["Team plan × 6 seats", "$108.00"]],
    total: "$108.00",
  },
]

export default function InvoiceLineItemsHoverCard() {
  return (
    <div className="w-full max-w-sm divide-y border text-sm">
      {invoices.map((inv) => (
        <div
          key={inv.id}
          className="flex items-center justify-between px-3 py-2"
        >
          <HoverCard>
            <HoverCardTrigger
              href="#"
              className="flex items-center gap-2 hover:underline"
            >
              <ReceiptIcon className="size-4 text-muted-foreground" />
              {inv.id}
            </HoverCardTrigger>
            <HoverCardContent align="start" className="w-64">
              <p className="mb-2 font-medium">
                {inv.id} · {inv.date}
              </p>
              <div className="flex flex-col gap-1">
                {inv.lines.map(([label, amount]) => (
                  <div key={label} className="flex justify-between">
                    <span className="text-muted-foreground">{label}</span>
                    <span>{amount}</span>
                  </div>
                ))}
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>{inv.total}</span>
              </div>
            </HoverCardContent>
          </HoverCard>
          <Badge variant="secondary">Paid</Badge>
        </div>
      ))}
    </div>
  )
}
