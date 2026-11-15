import { DownloadIcon, ReceiptIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const invoices = [
  { id: "INV-2041", date: "Mar 1, 2026", amount: "$249.00", status: "Paid" },
  { id: "INV-1987", date: "Feb 1, 2026", amount: "$249.00", status: "Paid" },
  {
    id: "INV-1932",
    date: "Jan 1, 2026",
    amount: "$199.00",
    status: "Refunded",
  },
  { id: "INV-1874", date: "Dec 1, 2025", amount: "$199.00", status: "Paid" },
]

export default function InvoicesWideSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <ReceiptIcon data-icon="inline-start" />
        Billing history
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-xl">
        <SheetHeader>
          <SheetTitle>Billing history</SheetTitle>
          <SheetDescription>
            Invoices for Fernhill Labs, billed monthly.
          </SheetDescription>
        </SheetHeader>
        <div className="px-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-end">Amount</TableHead>
                <TableHead>
                  <span className="sr-only">Download</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell className="font-medium">{inv.id}</TableCell>
                  <TableCell>{inv.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={inv.status === "Paid" ? "secondary" : "outline"}
                    >
                      {inv.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-end tabular-nums">
                    {inv.amount}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      aria-label={"Download " + inv.id}
                    >
                      <DownloadIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </SheetContent>
    </Sheet>
  )
}
