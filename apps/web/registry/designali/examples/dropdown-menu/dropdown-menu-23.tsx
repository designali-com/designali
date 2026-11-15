"use client"

import * as React from "react"
import { CalendarPlusIcon, MoreVerticalIcon, PencilIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const rsvpLabels: Record<string, string> = {
  yes: "Going",
  maybe: "Maybe",
  no: "Declined",
}

export default function CalendarEventRsvpMenu() {
  const [rsvp, setRsvp] = React.useState("maybe")

  return (
    <div className="flex w-full max-w-xs border-s-4 border-s-sky-500 bg-muted/40 p-3">
      <div className="flex-1">
        <p className="text-xs font-medium">Design critique</p>
        <p className="text-xs text-muted-foreground">
          Thu, 14:00 – 15:00 · Room Juniper
        </p>
        <Badge variant="outline" className="mt-2">
          {rsvpLabels[rsvp]}
        </Badge>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon-sm" aria-label="Event options" />
          }
        >
          <MoreVerticalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuRadioGroup value={rsvp} onValueChange={setRsvp}>
            <DropdownMenuLabel>Your response</DropdownMenuLabel>
            <DropdownMenuRadioItem value="yes">
              Yes, I&apos;ll attend
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="maybe">Maybe</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="no">Decline</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <PencilIcon />
            Edit event
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CalendarPlusIcon />
            Duplicate
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
