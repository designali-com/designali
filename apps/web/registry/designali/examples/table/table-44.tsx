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
  { team: "Web", openP1: 2, openP2: 7, closedP1: 11, closedP2: 34 },
  { team: "Design", openP1: 0, openP2: 4, closedP1: 6, closedP2: 22 },
  { team: "Motion", openP1: 1, openP2: 9, closedP1: 3, closedP2: 17 },
]

export default function MultiLevelHeaderTable() {
  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead rowSpan={2} className="border-e align-bottom">
              Team
            </TableHead>
            <TableHead colSpan={2} className="h-8 border-e text-center">
              Open
            </TableHead>
            <TableHead colSpan={2} className="h-8 text-center">
              Closed (30d)
            </TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="h-8 text-center text-muted-foreground">
              P1
            </TableHead>
            <TableHead className="h-8 border-e text-center text-muted-foreground">
              P2
            </TableHead>
            <TableHead className="h-8 text-center text-muted-foreground">
              P1
            </TableHead>
            <TableHead className="h-8 text-center text-muted-foreground">
              P2
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.team}>
              <TableCell className="border-e font-medium">{r.team}</TableCell>
              <TableCell
                className={cn(
                  "text-center tabular-nums",
                  r.openP1 > 0 && "font-semibold text-destructive"
                )}
              >
                {r.openP1}
              </TableCell>
              <TableCell className="border-e text-center tabular-nums">
                {r.openP2}
              </TableCell>
              <TableCell className="text-center tabular-nums">
                {r.closedP1}
              </TableCell>
              <TableCell className="text-center tabular-nums">
                {r.closedP2}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
