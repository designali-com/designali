"use client"

import * as React from "react"
import {
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  MapPin as MapPinIcon,
  Video as VideoIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const attendees = [
  { name: "Ali Imam", status: "Going" },
  { name: "Idris", status: "Maybe" },
  { name: "Yuki", status: "Going" },
  { name: "Felix", status: "Pending" },
]

export default function CalendarEventSheet() {
  const [rsvp, setRsvp] = React.useState<string | null>(null)
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <CalendarIcon data-icon="inline-start" />
        Design critique
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="mb-1 h-1 w-10 bg-primary" />
          <SheetTitle>Design critique</SheetTitle>
          <SheetDescription>Weekly · hosted by Ali Imam</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-3 px-4">
          <div className="flex items-center gap-2">
            <ClockIcon className="size-4 text-muted-foreground" />
            Thu, Mar 12 · 2:00 – 3:00 PM
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="size-4 text-muted-foreground" />
            Designali studio
          </div>
          <div className="flex items-center gap-2">
            <VideoIcon className="size-4 text-muted-foreground" />
            designali.com/crit-weekly
          </div>
          <Separator />
          <span className="font-medium">{attendees.length} guests</span>
          {attendees.map((a) => (
            <div key={a.name} className="flex items-center gap-2">
              <Avatar size="sm">
                <AvatarFallback>
                  {a.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="flex-1">{a.name}</span>
              <span className="text-muted-foreground">{a.status}</span>
            </div>
          ))}
        </div>
        <SheetFooter className="border-t">
          <span className="text-muted-foreground">Going?</span>
          <div className="grid grid-cols-3 gap-2">
            {["Yes", "Maybe", "No"].map((option) => (
              <Button
                key={option}
                variant={rsvp === option ? "default" : "outline"}
                onClick={() => setRsvp(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
