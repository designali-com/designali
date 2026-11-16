import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

const services = [
  { name: "designali.com", uptime: 99.98, down: [12] },
  { name: "Registry", uptime: 99.71, down: [4, 5, 21] },
  { name: "Docs", uptime: 100, down: [] as number[] },
]

export default function UptimeStatusTable() {
  return (
    <div className="w-full max-w-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Service</TableHead>
            <TableHead>Last 30 days</TableHead>
            <TableHead className="text-right">Uptime</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((s) => (
            <TableRow key={s.name}>
              <TableCell className="font-medium">{s.name}</TableCell>
              <TableCell>
                <div
                  className="flex gap-px"
                  aria-label={s.down.length + " incidents"}
                >
                  {Array.from({ length: 30 }).map((_, day) => (
                    <span
                      key={day}
                      className={cn(
                        "h-5 w-1",
                        s.down.includes(day)
                          ? "bg-amber-500"
                          : "bg-emerald-500/80"
                      )}
                    />
                  ))}
                </div>
              </TableCell>
              <TableCell className="text-right tabular-nums">
                {s.uptime.toFixed(2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
