import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const items = [
  { description: "Brand identity workshop", qty: 1, price: 1800 },
  { description: "Logo design revisions", qty: 3, price: 250 },
  { description: "Social media templates", qty: 12, price: 45 },
]

export default function InvoiceLineItemsTable() {
  const subtotal = items.reduce((s, i) => s + i.qty * i.price, 0)
  const tax = subtotal * 0.08
  const fmt = (n: number) =>
    "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2 })

  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Qty</TableHead>
            <TableHead className="text-right">Unit</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.description}>
              <TableCell>{item.description}</TableCell>
              <TableCell className="text-right tabular-nums">
                {item.qty}
              </TableCell>
              <TableCell className="text-right tabular-nums">
                {fmt(item.price)}
              </TableCell>
              <TableCell className="text-right tabular-nums">
                {fmt(item.qty * item.price)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} className="text-right text-muted-foreground">
              Subtotal
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {fmt(subtotal)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} className="text-right text-muted-foreground">
              Tax (8%)
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {fmt(tax)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={3} className="text-right font-semibold">
              Total due
            </TableCell>
            <TableCell className="text-right font-semibold tabular-nums">
              {fmt(subtotal + tax)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
