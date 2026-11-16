import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

const events = [
  { title: "Project brief received", time: "Mar 2, 09:14", done: true },
  { title: "Kickoff call with Ali", time: "Mar 2, 09:15", done: true },
  { title: "Figma designs delivered", time: "Mar 3, 16:40", done: true },
  { title: "Next.js build in review", time: "Launch Mar 5", done: false },
]

export default function VerticalTimeline() {
  return (
    <ol className="flex w-full max-w-xs flex-col">
      {events.map((event, index) => (
        <li key={event.title} className="flex gap-3">
          <div className="flex flex-col items-center">
            <span
              className={cn(
                "mt-1 size-2.5 shrink-0 rounded-full",
                event.done ? "bg-primary" : "border bg-background"
              )}
            />
            {index < events.length - 1 && (
              <Separator
                orientation="vertical"
                className={cn("my-1", event.done && "bg-primary/40")}
              />
            )}
          </div>
          <div className="flex flex-col pb-5 text-sm">
            <span
              className={cn(
                "font-medium",
                !event.done && "text-muted-foreground"
              )}
            >
              {event.title}
            </span>
            <span className="text-xs text-muted-foreground">{event.time}</span>
          </div>
        </li>
      ))}
    </ol>
  )
}
