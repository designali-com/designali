import { BanIcon, CopyIcon, EyeIcon, SendIcon } from "lucide-react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const invoices = [
  {
    id: "INV-2041",
    customer: "Brightside Bakery",
    amount: "$1,240.00",
    status: "Paid",
  },
  {
    id: "INV-2042",
    customer: "Northwind Travel",
    amount: "$860.50",
    status: "Due",
  },
  {
    id: "INV-2043",
    customer: "Lumen Studio",
    amount: "$3,100.00",
    status: "Overdue",
  },
]

export default function TableRowContextActions() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead className="text-end">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <ContextMenu key={invoice.id}>
              <ContextMenuTrigger
                render={<TableRow className="data-popup-open:bg-muted" />}
              >
                <TableCell className="font-mono text-xs">
                  {invoice.id}
                </TableCell>
                <TableCell>{invoice.customer}</TableCell>
                <TableCell className="text-end tabular-nums">
                  {invoice.amount}
                </TableCell>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-48">
                <ContextMenuGroup>
                  <ContextMenuLabel>
                    {invoice.id} · {invoice.status}
                  </ContextMenuLabel>
                  <ContextMenuItem>
                    <EyeIcon />
                    View invoice
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <CopyIcon />
                    Copy invoice ID
                  </ContextMenuItem>
                  <ContextMenuItem disabled={invoice.status === "Paid"}>
                    <SendIcon />
                    Send reminder
                  </ContextMenuItem>
                </ContextMenuGroup>
                <ContextMenuSeparator />
                <ContextMenuGroup>
                  <ContextMenuItem variant="destructive">
                    <BanIcon />
                    Void invoice
                  </ContextMenuItem>
                </ContextMenuGroup>
              </ContextMenuContent>
            </ContextMenu>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
