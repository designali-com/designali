import { MapPinIcon, NavigationIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const stores = [
  {
    id: "north",
    name: "North Pier",
    x: 28,
    y: 30,
    hours: "8 AM - 8 PM",
    open: true,
  },
  {
    id: "market",
    name: "Market Square",
    x: 62,
    y: 52,
    hours: "9 AM - 6 PM",
    open: true,
  },
  {
    id: "hill",
    name: "Cedar Hill",
    x: 44,
    y: 78,
    hours: "Closed today",
    open: false,
  },
]

export default function MapPinPopover() {
  return (
    <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden border bg-muted/40">
      <svg className="absolute inset-0 size-full text-border" aria-hidden>
        <defs>
          <pattern
            id="map-grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path d="M24 0H0V24" fill="none" stroke="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#map-grid)" />
        <path
          d="M0 120 C80 90 160 170 400 110"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
        />
      </svg>
      {stores.map((store) => (
        <Popover key={store.id}>
          <PopoverTrigger
            render={
              <button
                type="button"
                aria-label={store.name}
                className="absolute -translate-x-1/2 -translate-y-full text-primary"
                style={{ left: store.x + "%", top: store.y + "%" }}
              />
            }
          >
            <MapPinIcon className="size-6 fill-background" />
          </PopoverTrigger>
          <PopoverContent side="top" className="w-52">
            <PopoverHeader>
              <PopoverTitle>{store.name}</PopoverTitle>
              <PopoverDescription>{store.hours}</PopoverDescription>
            </PopoverHeader>
            <Badge variant={store.open ? "secondary" : "outline"}>
              {store.open ? "Open now" : "Closed"}
            </Badge>
            <Button size="sm" variant="outline">
              <NavigationIcon data-icon="inline-start" /> Directions
            </Button>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}
