import {
  Download as DownloadIcon,
  Receipt as ReceiptIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const invoices = Array.from({ length: 10 }, (_, i) => ({
  id: "INV-" + (2050 - i),
  date:
    ["Nov", "Oct", "Sep", "Aug", "Jul", "Jun", "May", "Apr", "Mar", "Feb"][i] +
    " 1, 2026",
  amount: i === 4 ? "$0.00" : "$29.00",
  status: i === 0 ? "Due" : "Paid",
}))

export default function BillingHistoryList() {
  return (
    <Card className="w-full max-w-md gap-0 py-0">
      <CardHeader className="border-b py-4">
        <CardTitle>Billing history</CardTitle>
        <CardDescription>Download invoices for your records.</CardDescription>
      </CardHeader>
      <ScrollArea className="h-60">
        <div className="flex flex-col divide-y">
          {invoices.map((inv) => (
            <div
              key={inv.id}
              className="flex items-center gap-3 px-4 py-2.5 text-xs"
            >
              <ReceiptIcon className="size-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <p className="font-medium">{inv.id}</p>
                <p className="text-muted-foreground">{inv.date}</p>
              </div>
              <span className="tabular-nums">{inv.amount}</span>
              <Badge variant={inv.status === "Due" ? "default" : "secondary"}>
                {inv.status}
              </Badge>
              <Button
                size="icon-xs"
                variant="ghost"
                aria-label={"Download " + inv.id}
              >
                <DownloadIcon />
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}
