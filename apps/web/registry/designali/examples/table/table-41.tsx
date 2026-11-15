import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

const lines = [
  { category: "Payroll", budget: 84000, actual: 82450 },
  { category: "Marketing", budget: 12000, actual: 14320 },
  { category: "Software", budget: 6500, actual: 6120 },
  { category: "Travel", budget: 4000, actual: 5210 },
]

const fmt = (n: number) =>
  (n < 0 ? "-" : "") + "$" + Math.abs(n).toLocaleString()

export default function BudgetVarianceTable() {
  const totalBudget = lines.reduce((s, l) => s + l.budget, 0)
  const totalActual = lines.reduce((s, l) => s + l.actual, 0)

  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Budget</TableHead>
            <TableHead className="text-right">Actual</TableHead>
            <TableHead className="text-right">Variance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {lines.map((line) => {
            const variance = line.budget - line.actual
            return (
              <TableRow key={line.category}>
                <TableCell className="font-medium">{line.category}</TableCell>
                <TableCell className="text-right tabular-nums">
                  {fmt(line.budget)}
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  {fmt(line.actual)}
                </TableCell>
                <TableCell
                  className={cn(
                    "text-right tabular-nums",
                    variance < 0
                      ? "text-destructive"
                      : "text-emerald-600 dark:text-emerald-400"
                  )}
                >
                  {fmt(variance)}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell className="text-right tabular-nums">
              {fmt(totalBudget)}
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {fmt(totalActual)}
            </TableCell>
            <TableCell className="text-right tabular-nums">
              {fmt(totalBudget - totalActual)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
