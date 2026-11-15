import { ClockIcon, MapPinIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@workspace/ui/components/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { cn } from "@workspace/ui/lib/utils"

const events = [
  {
    title: "Design critique",
    time: "10:00 – 10:45",
    room: "Room Atlas",
    people: ["NK", "RB", "TS"],
    color: "bg-blue-500/15 border-blue-500",
  },
  {
    title: "Sprint planning",
    time: "13:00 – 14:00",
    room: "Zoom",
    people: ["AP", "JW"],
    color: "bg-emerald-500/15 border-emerald-500",
  },
  {
    title: "1:1 with Priya",
    time: "16:30 – 17:00",
    room: "Café corner",
    people: ["PD"],
    color: "bg-amber-500/15 border-amber-500",
  },
]

export default function CalendarEventHoverCard() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <p className="text-sm font-medium">Thursday, March 12</p>
      {events.map((event) => (
        <HoverCard key={event.title}>
          <HoverCardTrigger
            render={
              <div
                className={cn(
                  "cursor-default border-l-2 px-2 py-1.5 text-xs",
                  event.color
                )}
              />
            }
          >
            <p className="font-medium">{event.title}</p>
            <p className="text-muted-foreground">{event.time}</p>
          </HoverCardTrigger>
          <HoverCardContent
            side="right"
            align="start"
            className="flex flex-col gap-2"
          >
            <p className="text-sm font-medium">{event.title}</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <ClockIcon className="size-3.5" />
              {event.time}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPinIcon className="size-3.5" />
              {event.room}
            </div>
            <AvatarGroup>
              {event.people.map((p) => (
                <Avatar key={p} size="sm">
                  <AvatarFallback>{p}</AvatarFallback>
                </Avatar>
              ))}
            </AvatarGroup>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
