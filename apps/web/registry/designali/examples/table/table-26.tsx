import { CircleCheckIcon, TriangleAlertIcon } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

const inventory = [
  { item: "Ceramic planter (M)", sku: "PL-220", stock: 142, reorder: 40 },
  { item: "Hanging macramé", sku: "PL-305", stock: 18, reorder: 25 },
  { item: "Terracotta saucer", sku: "PL-118", stock: 0, reorder: 30 },
  { item: "Plant mister", sku: "AC-042", stock: 64, reorder: 20 },
]

export default function StockInventoryTable() {
  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead className="text-right">In stock</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((row) => {
            const status =
              row.stock === 0
                ? "Out of stock"
                : row.stock < row.reorder
                  ? "Low"
                  : "OK"
            return (
              <TableRow
                key={row.sku}
                className={cn(
                  row.stock === 0 && "bg-destructive/5 hover:bg-destructive/10"
                )}
              >
                <TableCell className="font-medium">{row.item}</TableCell>
                <TableCell className="font-mono text-muted-foreground">
                  {row.sku}
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  {row.stock}
                </TableCell>
                <TableCell>
                  <span className="flex items-center gap-1.5">
                    {status === "OK" ? (
                      <CircleCheckIcon className="size-3.5 text-emerald-600" />
                    ) : (
                      <TriangleAlertIcon
                        className={cn(
                          "size-3.5",
                          status === "Low"
                            ? "text-amber-500"
                            : "text-destructive"
                        )}
                      />
                    )}
                    {status}
                  </span>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
