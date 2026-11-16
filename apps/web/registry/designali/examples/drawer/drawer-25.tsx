"use client"

import * as React from "react"
import {
  Bus as BusIcon,
  CarFront as CarFrontIcon,
  Car as CarIcon,
  Navigation as NavigationIcon,
  User as UserIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { cn } from "@workspace/ui/lib/utils"

const rides = [
  { id: "eco", name: "Eco", seats: 4, eta: "3 min", fare: 12.4, icon: CarIcon },
  {
    id: "comfort",
    name: "Comfort",
    seats: 4,
    eta: "5 min",
    fare: 16.8,
    icon: CarFrontIcon,
  },
  { id: "xl", name: "XL", seats: 6, eta: "8 min", fare: 22.1, icon: BusIcon },
]

export default function RideOptionsDrawer() {
  const [ride, setRide] = React.useState("eco")
  const selected = rides.find((item) => item.id === ride) ?? rides[0]!

  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button className="w-full max-w-xs" />}>
        <NavigationIcon data-icon="inline-start" />
        Where to? · Central Station
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>Choose a ride</DrawerTitle>
            <DrawerDescription>To Central Station · 6.2 km</DrawerDescription>
          </DrawerHeader>
          <div
            className="flex flex-col gap-1 p-4"
            role="radiogroup"
            aria-label="Ride type"
          >
            {rides.map((item) => (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={item.id === ride}
                onClick={() => setRide(item.id)}
                className={cn(
                  "flex items-center gap-3 border border-transparent p-3 text-start hover:bg-muted",
                  item.id === ride && "border-foreground bg-muted/50"
                )}
              >
                <item.icon className="size-6" />
                <div className="flex-1">
                  <p className="flex items-center gap-1 font-medium">
                    {item.name}
                    <UserIcon className="ms-1 size-3" />
                    <span className="font-normal text-muted-foreground">
                      {item.seats}
                    </span>
                  </p>
                  <p className="text-muted-foreground">{item.eta} away</p>
                </div>
                <span className="font-medium tabular-nums">
                  {"€" + item.fare.toFixed(2)}
                </span>
              </button>
            ))}
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button />}>
              Confirm {selected.name}
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
