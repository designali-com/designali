import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { cn } from "@workspace/ui/lib/utils"

const hours = Array.from({ length: 13 }, (_, i) => i + 7)
const events: Record<number, { title: string; tone: string }> = {
  9: { title: "Standup", tone: "border-sky-500 bg-sky-500/10" },
  11: { title: "Design review", tone: "border-violet-500 bg-violet-500/10" },
  13: {
    title: "Lunch with Priya",
    tone: "border-emerald-500 bg-emerald-500/10",
  },
  15: { title: "Customer call", tone: "border-amber-500 bg-amber-500/10" },
  17: { title: "Gym", tone: "border-rose-500 bg-rose-500/10" },
}

export default function DayScheduleTimeline() {
  return (
    <div className="w-full max-w-xs border">
      <div className="border-b px-3 py-2 text-sm font-medium">
        Tuesday, Mar 4
      </div>
      <ScrollArea className="h-72">
        {hours.map((h) => (
          <div key={h} className="flex h-12 border-b last:border-0">
            <span className="w-12 shrink-0 pt-1 pr-2 text-right text-[10px] text-muted-foreground tabular-nums">
              {String(h).padStart(2, "0")}:00
            </span>
            <div className="flex-1 p-1">
              {events[h] && (
                <div
                  className={cn(
                    "h-full border-l-2 px-2 py-1 text-xs font-medium",
                    events[h].tone
                  )}
                >
                  {events[h].title}
                </div>
              )}
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}
