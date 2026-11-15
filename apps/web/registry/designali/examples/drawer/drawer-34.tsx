import { DownloadIcon, ReceiptTextIcon, SendIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const lines = [
  { item: "Pro plan · 12 seats", amount: 288 },
  { item: "Additional storage · 200 GB", amount: 40 },
  { item: "Priority support", amount: 99 },
]

export default function InvoicePreviewDrawer() {
  const subtotal = lines.reduce((sum, line) => sum + line.amount, 0)
  const tax = subtotal * 0.21

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger render={<Button variant="outline" />}>
        <ReceiptTextIcon data-icon="inline-start" />
        INV-2026-1107
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex-row items-start justify-between">
          <div>
            <DrawerTitle>INV-2026-1107</DrawerTitle>
            <DrawerDescription>Issued Nov 7 · Due Dec 7</DrawerDescription>
          </div>
          <Badge variant="outline">Open</Badge>
        </DrawerHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-muted-foreground">Billed to</p>
              <p className="font-medium">Quarry Labs B.V.</p>
              <p className="text-muted-foreground">Utrecht, NL</p>
            </div>
            <div>
              <p className="text-muted-foreground">Amount due</p>
              <p className="font-heading text-lg font-semibold">
                {"€" + (subtotal + tax).toFixed(2)}
              </p>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead className="text-end">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lines.map((line) => (
                <TableRow key={line.item}>
                  <TableCell className="whitespace-normal">
                    {line.item}
                  </TableCell>
                  <TableCell className="text-end tabular-nums">
                    {"€" + line.amount.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="text-muted-foreground">VAT 21%</TableCell>
                <TableCell className="text-end tabular-nums">
                  {"€" + tax.toFixed(2)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <DrawerFooter className="border-t pt-4">
          <Button>
            <SendIcon data-icon="inline-start" />
            Send reminder
          </Button>
          <Button variant="outline">
            <DownloadIcon data-icon="inline-start" />
            Download PDF
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
