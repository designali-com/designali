"use client"

import * as React from "react"
import { MapPinIcon, StarIcon, UtensilsIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"

const places = [
  { name: "Café Lumière", type: "Coffee", distance: "120 m", rating: 4.7 },
  { name: "Hanami Ramen", type: "Japanese", distance: "300 m", rating: 4.5 },
  { name: "Green Fork", type: "Vegetarian", distance: "450 m", rating: 4.6 },
  { name: "Old Town Bakery", type: "Bakery", distance: "600 m", rating: 4.8 },
  { name: "Brasa Grill", type: "Portuguese", distance: "850 m", rating: 4.3 },
  { name: "Lotus Tea House", type: "Tea", distance: "1.1 km", rating: 4.4 },
]

const snapPoints = ["160px", "360px", 1]

export default function SnapPointsNearbyDrawer() {
  const [snap, setSnap] = React.useState<number | string | null>(
    snapPoints[0] ?? null
  )

  return (
    <Drawer
      snapPoints={snapPoints}
      snapPoint={snap}
      onSnapPointChange={setSnap}
      showSwipeHandle
    >
      <DrawerTrigger render={<Button variant="outline" />}>
        <MapPinIcon data-icon="inline-start" />
        Explore nearby
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>6 places near you</DrawerTitle>
          <DrawerDescription>Drag up to see more</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-1 overflow-y-auto p-4">
          {places.map((place) => (
            <div
              key={place.name}
              className="flex items-center gap-3 border-b py-2 last:border-b-0"
            >
              <div className="flex size-9 shrink-0 items-center justify-center bg-muted">
                <UtensilsIcon className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{place.name}</p>
                <p className="text-muted-foreground">
                  {place.type} · {place.distance}
                </p>
              </div>
              <span className="flex items-center gap-1 tabular-nums">
                <StarIcon className="size-3 fill-current" />
                {place.rating}
              </span>
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
