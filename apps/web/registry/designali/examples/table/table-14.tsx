import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

const logs = Array.from({ length: 18 }, (_, i) => ({
  time: "14:" + String(10 + i).padStart(2, "0") + ":0" + (i % 10),
  level: i % 7 === 0 ? "ERROR" : i % 3 === 0 ? "WARN" : "INFO",
  message: [
    "Deployed designali.com",
    "Cache miss for /icons",
    "Retrying webhook delivery",
    "Template download queued",
  ][i % 4],
}))

export default function StickyHeaderScrollTable() {
  return (
    <div className="h-72 w-full max-w-lg overflow-y-auto border">
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-background">
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Message</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logs.map((log, i) => (
            <TableRow key={i}>
              <TableCell className="font-mono text-muted-foreground">
                {log.time}
              </TableCell>
              <TableCell>
                <span
                  className={cn(
                    "font-mono font-medium",
                    log.level === "ERROR" && "text-destructive",
                    log.level === "WARN" && "text-amber-600 dark:text-amber-400"
                  )}
                >
                  {log.level}
                </span>
              </TableCell>
              <TableCell>{log.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
