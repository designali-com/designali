import {
  Truck as TruckIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { cn } from "@workspace/ui/lib/utils"

const events = [
  { status: "Deploying to Vercel", place: "designali.com", time: "Today, 07:12" },
  { status: "Client approved", place: "Design review", time: "Yesterday, 22:40" },
  { status: "In development", place: "Next.js build", time: "Yesterday, 14:05" },
  { status: "Design started", place: "Figma", time: "Nov 12, 18:30" },
]

function Event({
  event,
  first,
}: {
  event: (typeof events)[number]
  first?: boolean
}) {
  return (
    <li className="relative border-l pb-4 pl-5 last:pb-0">
      <span
        className={cn(
          "absolute top-1 -left-[5px] size-2.5 rounded-full border-2 border-background",
          first ? "bg-primary" : "bg-muted-foreground"
        )}
      />
      <p className={cn("text-sm", first && "font-medium")}>{event.status}</p>
      <p className="text-xs text-muted-foreground">
        {event.place} · {event.time}
      </p>
    </li>
  )
}

export default function ShipmentTrackingHistory() {
  return (
    <Collapsible className="w-full max-w-xs space-y-3 border p-4">
      <div className="flex items-center gap-2">
        <TruckIcon className="size-4" />
        <span className="text-sm font-semibold">Launching today</span>
        <span className="ml-auto font-mono text-xs text-muted-foreground">
          #TRK88213
        </span>
      </div>
      <ul className="ml-1">
        <Event event={events[0]!} first />
      </ul>
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
        <ul className="ml-1 pt-1">
          {events.slice(1).map((event) => (
            <Event key={event.time} event={event} />
          ))}
        </ul>
      </CollapsibleContent>
      <CollapsibleTrigger
        render={<Button variant="outline" size="xs" className="w-full" />}
      >
        <span className="group-data-panel-open/button:hidden">
          Show full history
        </span>
        <span className="hidden group-data-panel-open/button:inline">
          Hide history
        </span>
      </CollapsibleTrigger>
    </Collapsible>
  )
}
