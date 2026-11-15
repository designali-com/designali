"use client"

import * as React from "react"
import { ClockIcon, MapPinIcon, VideoIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@workspace/ui/components/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Separator } from "@workspace/ui/components/separator"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const attendees = [
  "Rhea Kapoor",
  "Luca Bianchi",
  "Sam Oduya",
  "Mei Tanaka",
  "Felix Grün",
]

export default function CalendarEventRsvpDialog() {
  const [rsvp, setRsvp] = React.useState<string[]>([])

  return (
    <Dialog>
      <DialogTrigger
        render={<button type="button" />}
        className="flex w-full max-w-60 flex-col border-s-4 border-primary bg-muted/60 px-3 py-2 text-start hover:bg-muted"
      >
        <span className="font-medium">Design critique</span>
        <span className="text-muted-foreground">
          2:00 – 3:00 PM · Room Juniper
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Design critique</DialogTitle>
          <DialogDescription>
            Weekly review of in-flight product work.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2">
            <ClockIcon className="size-4 text-muted-foreground" />
            Thursday, Nov 19 · 2:00 – 3:00 PM
          </p>
          <p className="flex items-center gap-2">
            <MapPinIcon className="size-4 text-muted-foreground" />
            Room Juniper, 4th floor
          </p>
          <p className="flex items-center gap-2">
            <VideoIcon className="size-4 text-muted-foreground" />
            meet.orbit.dev/crit-weekly
          </p>
        </div>
        <div className="flex items-center gap-2">
          <AvatarGroup>
            {attendees.slice(0, 4).map((person) => (
              <Avatar key={person} size="sm">
                <AvatarFallback>
                  {person
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount>+{attendees.length - 4}</AvatarGroupCount>
          </AvatarGroup>
          <span className="text-muted-foreground">
            {attendees.length} guests
          </span>
        </div>
        <Separator />
        <div className="flex items-center justify-between gap-2">
          <span className="font-medium">Going?</span>
          <ToggleGroup
            variant="outline"
            size="sm"
            value={rsvp}
            onValueChange={(value) => setRsvp(value.map(String))}
          >
            <ToggleGroupItem value="yes">Yes</ToggleGroupItem>
            <ToggleGroupItem value="maybe">Maybe</ToggleGroupItem>
            <ToggleGroupItem value="no">No</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </DialogContent>
    </Dialog>
  )
}
