"use client"

import * as React from "react"
import {
  Calendar as CalendarIcon,
  CalendarPlus as CalendarPlusIcon,
  Check as CheckIcon,
  MapPin as MapPinIcon,
  Users as UsersIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { Progress } from "@workspace/ui/components/progress"

export default function EventRsvpDrawer() {
  const [going, setGoing] = React.useState(false)
  const spots = going ? 7 : 8

  return (
    <Drawer>
      <DrawerTrigger
        render={<button type="button" />}
        className="flex w-full max-w-xs overflow-hidden border bg-background text-start hover:bg-muted/50"
      >
        <span className="flex w-14 shrink-0 flex-col items-center justify-center bg-primary text-primary-foreground">
          <span className="text-[10px] uppercase">Nov</span>
          <span className="text-lg font-semibold">22</span>
        </span>
        <span className="flex flex-col p-3">
          <span className="font-medium">Design se code tak meetup</span>
          <span className="text-muted-foreground">
            Sat 7:00 AM · Designali studio
          </span>
        </span>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <div className="h-24 bg-gradient-to-r from-orange-300 via-rose-300 to-sky-300 dark:from-orange-700 dark:via-rose-700 dark:to-sky-700" />
          <DrawerHeader className="text-start">
            <DrawerTitle className="text-base">Design se code tak meetup</DrawerTitle>
            <DrawerDescription>Hosted by Ali Imam</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-2 p-4">
            <p className="flex items-center gap-2">
              <CalendarIcon className="size-4 text-muted-foreground" />
              Saturday, Nov 22 · 7:00 – 8:30 AM
            </p>
            <p className="flex items-center gap-2">
              <MapPinIcon className="size-4 text-muted-foreground" />
              Designali studio
            </p>
            <p className="flex items-center gap-2">
              <UsersIcon className="size-4 text-muted-foreground" />
              {spots} spots left of 20
            </p>
            <Progress value={((20 - spots) / 20) * 100} className="mt-1" />
          </div>
          <DrawerFooter>
            <Button
              variant={going ? "outline" : "default"}
              onClick={() => setGoing(!going)}
            >
              {going ? (
                <CheckIcon data-icon="inline-start" />
              ) : (
                <CalendarPlusIcon data-icon="inline-start" />
              )}
              {going ? "You're going · Cancel RSVP" : "RSVP"}
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
