import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@workspace/ui/components/resizable"
import { cn } from "@workspace/ui/lib/utils"

const days = Array.from({ length: 30 }, (_, i) => i + 1)
const events = [
  { time: "09:00", title: "Standup", tone: "bg-sky-500" },
  { time: "11:30", title: "Design review", tone: "bg-violet-500" },
  { time: "14:00", title: "Client call - brand identity", tone: "bg-amber-500" },
  { time: "16:30", title: "Design crit with Ali", tone: "bg-emerald-500" },
]

export default function CalendarAgendaSplit() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-72 w-full max-w-2xl border"
    >
      <ResizablePanel defaultSize="42%" minSize="35%">
        <div className="flex h-full flex-col gap-2 p-3">
          <span className="text-xs font-medium">September</span>
          <div className="grid grid-cols-7 gap-0.5 text-center text-[11px]">
            {days.map((day) => (
              <span
                key={day}
                className={cn(
                  "py-1 tabular-nums",
                  day === 18
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                {day}
              </span>
            ))}
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize="58%" minSize="35%">
        <div className="flex h-full flex-col gap-2 p-3">
          <span className="text-xs font-medium">Thursday, Sep 18</span>
          {events.map((event) => (
            <div
              key={event.title}
              className="flex items-center gap-2 border p-2 text-xs"
            >
              <span className={cn("h-6 w-1 shrink-0", event.tone)} />
              <span className="w-10 shrink-0 text-muted-foreground tabular-nums">
                {event.time}
              </span>
              <span className="truncate">{event.title}</span>
            </div>
          ))}
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
