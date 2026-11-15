import { Badge } from "@workspace/ui/components/badge"

const events = [
  {
    time: "09:00",
    title: "Design standup",
    type: "Meeting",
    className: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  },
  {
    time: "11:30",
    title: "Focus: billing flows",
    type: "Focus",
    className:
      "bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300",
  },
  {
    time: "13:00",
    title: "Lunch with Amina",
    type: "Personal",
    className:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300",
  },
  {
    time: "16:00",
    title: "Contract renewal",
    type: "Deadline",
    className: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
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
          <span className="w-10 font-mono text-xs text-muted-foreground">
            {event.time}
          </span>
          <span className="flex-1 truncate text-sm">{event.title}</span>
          <Badge className={event.className}>{event.type}</Badge>
        </div>
      ))}
    </div>
  )
}
