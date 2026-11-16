import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const levels = ["INFO", "INFO", "WARN", "INFO", "ERROR", "INFO", "DEBUG"]
const messages = [
  "GET /api/orders 200 32ms",
  "POST /api/checkout 201 118ms",
  "Slow query on invoices (812ms)",
  "Cache warmed: 1,240 keys",
  "Payment provider timeout after 10s",
  "Worker job sync-orders completed",
  "Retrying webhook evt_93a",
]
const logs = Array.from({ length: 21 }, (_, i) => ({
  time: "12:04:" + String(10 + i).padStart(2, "0"),
  level: levels[i % levels.length]!,
  text: messages[i % messages.length]!,
}))

const tone: Record<string, string> = {
  INFO: "text-primary",
  WARN: "text-primary",
  ERROR: "text-destructive",
  DEBUG: "text-muted-foreground",
}

export default function ServerLogConsole() {
  return (
    <ScrollArea className="h-64 w-full max-w-md border bg-foreground text-background">
      <div className="flex flex-col gap-0.5 p-3 font-sans text-[11px]">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-muted-foreground">{log.time}</span>
            <span
              className={cn("w-10 shrink-0 font-semibold", tone[log.level])}
            >
              {log.level}
            </span>
            <span className="truncate">{log.text}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
