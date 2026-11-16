import {
  Clock as ClockIcon,
  MapPin as MapPinIcon,
} from "@designali/icons"

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
    room: "Designali studio",
    people: ["AI", "BD", "SD"],
    color: "bg-blue-500/15 border-blue-500",
  },
  {
    title: "Client kickoff",
    time: "13:00 – 14:00",
    room: "Zoom",
    people: ["AI", "SD"],
    color: "bg-emerald-500/15 border-emerald-500",
  },
  {
    title: "1:1 with Ali",
    time: "16:30 – 17:00",
    room: "Café corner",
    people: ["AI"],
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
