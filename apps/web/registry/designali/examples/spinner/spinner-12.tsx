import {
  Check as CheckIcon,
} from "@designali/icons"

import { Spinner } from "@workspace/ui/components/spinner"
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
    id: "INV-2051",
    client: "Brand identity",
    amount: "$1,240.00",
    status: "Paid",
  },
  {
    id: "INV-2052",
    client: "UI/UX design",
    amount: "$860.00",
    status: "Processing",
  },
  {
    id: "INV-2053",
    client: "Next.js website",
    amount: "$3,100.00",
    status: "Processing",
  },
  { id: "INV-2054", client: "Design system", amount: "$420.00", status: "Paid" },
]

export default function TableRowStatusSpinner() {
  return (
    <div className="w-full max-w-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-mono text-xs">{invoice.id}</TableCell>
              <TableCell>{invoice.client}</TableCell>
              <TableCell>
                {invoice.status === "Processing" ? (
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Spinner className="size-3" />
                    Processing
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <CheckIcon className="size-3 text-emerald-600 dark:text-emerald-400" />
                    Paid
                  </span>
                )}
              </TableCell>
              <TableCell className="text-right tabular-nums">
                {invoice.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
