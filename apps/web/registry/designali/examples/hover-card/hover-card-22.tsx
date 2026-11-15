import { MapPinIcon, SunIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const places = [
  { city: "Toronto", offset: "UTC−5", local: "9:20 AM", overlap: "6h overlap" },
  { city: "Berlin", offset: "UTC+1", local: "3:20 PM", overlap: "3h overlap" },
  {
    city: "Singapore",
    offset: "UTC+8",
    local: "10:20 PM",
    overlap: "No overlap",
  },
]

export default function TimezoneLocationHoverCard() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {places.map((p) => (
        <HoverCard key={p.city}>
          <HoverCardTrigger
            render={
              <Badge variant="outline" className="cursor-default gap-1" />
            }
          >
            <MapPinIcon className="size-3" />
            {p.city}
          </HoverCardTrigger>
          <HoverCardContent className="w-48">
            <p className="text-lg font-semibold">{p.local}</p>
            <p className="text-muted-foreground">
              {p.city} · {p.offset}
            </p>
            <p className="mt-2 flex items-center gap-1.5">
              <SunIcon className="size-3.5 text-amber-500" />
              {p.overlap} with you
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
