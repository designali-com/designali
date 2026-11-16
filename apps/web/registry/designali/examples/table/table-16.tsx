import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

const rows = [
  { ticker: "ICONS", price: 142.31, change: 1.24, volume: "3.2M" },
  { ticker: "LOGOS", price: 58.07, change: -0.82, volume: "1.1M" },
  { ticker: "BLOCKS", price: 311.9, change: 2.75, volume: "842K" },
  { ticker: "VECTORS", price: 12.45, change: -3.1, volume: "6.7M" },
  { ticker: "UI", price: 77.6, change: 0.15, volume: "2.4M" },
  { ticker: "PAGES", price: 203.18, change: -1.02, volume: "990K" },
]

export default function StripedDenseTable() {
  return (
    <div className="w-full max-w-md border">
      <Table className="text-[11px]">
        <TableHeader>
          <TableRow>
            <TableHead className="h-8">Product</TableHead>
            <TableHead className="h-8 text-right">Price</TableHead>
            <TableHead className="h-8 text-right">Change</TableHead>
            <TableHead className="h-8 text-right">Downloads</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ticker} className="border-0 even:bg-muted/50">
              <TableCell className="py-1 font-sans font-medium">
                {row.ticker}
              </TableCell>
              <TableCell className="py-1 text-right tabular-nums">
                {row.price.toFixed(2)}
              </TableCell>
              <TableCell
                className={cn(
                  "py-1 text-right tabular-nums",
                  row.change >= 0
                    ? "text-primary dark:text-primary"
                    : "text-destructive"
                )}
              >
                {(row.change >= 0 ? "+" : "") + row.change.toFixed(2) + "%"}
              </TableCell>
              <TableCell className="py-1 text-right text-muted-foreground tabular-nums">
                {row.volume}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
