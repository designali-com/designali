import * as React from "react"
import { MapPinIcon, VideoIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
} from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const attendees = ["Rhea Kapoor", "Leo Varga", "Aiko Mori", "Sam Whitfield"]

export default function CalendarEventPopover() {
  return (
    <div className="grid w-full max-w-sm grid-cols-[3rem_1fr] border text-[11px]">
      {["9 AM", "10 AM", "11 AM"].map((hour) => (
        <React.Fragment key={hour}>
          <span className="border-e border-b p-1 text-muted-foreground">
            {hour}
          </span>
          <div className="relative h-12 border-b">
            {hour === "10 AM" && (
              <Popover>
                <PopoverTrigger
                  render={
                    <button
                      type="button"
                      className="absolute inset-x-1 top-1 bottom-1 border-s-2 border-primary bg-primary/10 px-2 text-start text-xs font-medium"
                    />
                  }
                >
                  Design review
                </PopoverTrigger>
                <PopoverContent side="right" align="start" className="w-64">
                  <PopoverHeader>
                    <PopoverTitle>Design review</PopoverTitle>
                    <PopoverDescription>
                      Tuesday, Nov 17 · 10:00 - 10:45 AM
                    </PopoverDescription>
                  </PopoverHeader>
                  <div className="flex flex-col gap-1.5 text-xs">
                    <span className="flex items-center gap-2">
                      <MapPinIcon className="size-3.5 text-muted-foreground" />{" "}
                      Room 4B · Juniper
                    </span>
                    <span className="flex items-center gap-2">
                      <VideoIcon className="size-3.5 text-muted-foreground" />{" "}
                      meet.example.com/drv-421
                    </span>
                  </div>
                  <AvatarGroup>
                    {attendees.map((name) => (
                      <Avatar key={name} size="sm">
                        <AvatarFallback>
                          {name
                            .split(" ")
                            .map((p) => p[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </AvatarGroup>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Join
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Reschedule
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
