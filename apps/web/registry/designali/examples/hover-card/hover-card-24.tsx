"use client"

import * as React from "react"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

export default function ControlledHoverCard() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <HoverCard open={open} onOpenChange={setOpen}>
        <HoverCardTrigger
          href="#"
          className="text-sm font-medium underline underline-offset-4"
        >
          @release-bot
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="font-medium">Release Bot</p>
          <p className="text-muted-foreground">
            Posts changelogs to #announcements every Friday at 4 PM.
          </p>
        </HoverCardContent>
      </HoverCard>
      <div className="flex items-center gap-2 text-xs">
        <Switch id="hc-open" checked={open} onCheckedChange={setOpen} />
        <Label htmlFor="hc-open">Card is {open ? "open" : "closed"}</Label>
      </div>
    </div>
  )
}
