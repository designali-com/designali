import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

const events = [
  {
    time: "09:00",
    end: "09:30",
    title: "Standup",
    place: "Designali studio",
    tone: "bg-primary",
  },
  {
    time: "11:00",
    end: "12:00",
    title: "Client review: brand identity",
    place: "Video call",
    tone: "bg-primary",
  },
  {
    time: "14:30",
    end: "15:00",
    title: "Design crit with Ali",
    place: "Cafe corner",
    tone: "bg-primary",
  },
]

export default function AgendaTimeColumn() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      <span className="mb-2 text-sm font-medium">Tuesday, March 10</span>
      {events.map((event) => (
        <div key={event.time} className="flex gap-3 py-2">
          <div className="flex w-12 shrink-0 flex-col text-xs tabular-nums">
            <span>{event.time}</span>
            <span className="text-muted-foreground">{event.end}</span>
          </div>
          <Separator
            orientation="vertical"
            className={cn("w-0.5", event.tone)}
          />
          <div className="flex min-w-0 flex-col text-sm">
            <span className="truncate font-medium">{event.title}</span>
            <span className="text-xs text-muted-foreground">{event.place}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
