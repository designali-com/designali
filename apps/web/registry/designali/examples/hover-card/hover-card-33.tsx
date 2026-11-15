import { MapPinIcon, StarIcon } from "lucide-react"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"

const pins = [
  {
    name: "Copper Kettle Café",
    x: "22%",
    y: "35%",
    rating: 4.6,
    hours: "Open until 6 PM",
  },
  {
    name: "Riverside Books",
    x: "58%",
    y: "60%",
    rating: 4.8,
    hours: "Open until 9 PM",
  },
  {
    name: "Juniper Gym",
    x: "76%",
    y: "25%",
    rating: 4.2,
    hours: "Open 24 hours",
  },
]

export default function MapPinHoverCard() {
  return (
    <div className="relative h-48 w-full max-w-sm overflow-hidden border bg-muted/40">
      <svg
        className="absolute inset-0 size-full text-border"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path
          d="M0 70 C30 60 50 80 100 55"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
        />
        <path
          d="M40 0 L45 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
      {pins.map((pin) => (
        <HoverCard key={pin.name}>
          <HoverCardTrigger
            render={
              <button
                type="button"
                aria-label={pin.name}
                className="absolute -translate-x-1/2 -translate-y-full text-primary"
                style={{ left: pin.x, top: pin.y }}
              />
            }
          >
            <MapPinIcon className="size-6 fill-background" />
          </HoverCardTrigger>
          <HoverCardContent side="top" className="w-48">
            <p className="font-medium">{pin.name}</p>
            <p className="flex items-center gap-1 text-muted-foreground">
              <StarIcon className="size-3 fill-amber-400 text-amber-400" />
              {pin.rating} · {pin.hours}
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
