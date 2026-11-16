import { Badge } from "@workspace/ui/components/badge"

const events = [
  {
    time: "09:00",
    title: "Designali studio standup",
    type: "Meeting",
    className: "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  },
  {
    time: "11:30",
    title: "Focus: new templates",
    type: "Focus",
    className:
      "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  },
  {
    time: "13:00",
    title: "Client call with Ali",
    type: "Client",
    className:
      "bg-primary/5 text-chart-3 dark:bg-primary/10 dark:text-chart-1",
  },
  {
    time: "16:00",
    title: "Blocks release",
    type: "Deadline",
    className: "bg-destructive/5 text-destructive dark:bg-destructive/15 dark:text-destructive",
  },
]

export default function AgendaEventTypeBadges() {
  return (
    <div className="w-full max-w-sm border">
      <div className="border-b p-3 text-sm font-semibold">
        Tuesday, March 18
      </div>
      {events.map((event) => (
        <div key={event.time} className="flex items-center gap-3 px-3 py-2.5">
          <span className="w-10 font-sans text-xs text-muted-foreground">
            {event.time}
          </span>
          <span className="flex-1 truncate text-sm">{event.title}</span>
          <Badge className={event.className}>{event.type}</Badge>
        </div>
      ))}
    </div>
  )
}
