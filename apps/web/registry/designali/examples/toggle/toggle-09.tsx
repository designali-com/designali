"use client"

import * as React from "react"
import {
  Mic as MicIcon,
  MicOff as MicOffIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Toggle } from "@workspace/ui/components/toggle"

export default function MicrophoneMuteToggle() {
  const [muted, setMuted] = React.useState(false)

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-3 border bg-muted/30 p-6">
      <Avatar size="lg">
        <AvatarFallback>DK</AvatarFallback>
      </Avatar>
      <p className="text-sm font-medium">Dana Kim (you)</p>
      <Toggle
        variant="outline"
        size="lg"
        pressed={muted}
        onPressedChange={setMuted}
        aria-label={muted ? "Unmute microphone" : "Mute microphone"}
        className="aria-pressed:border-destructive aria-pressed:bg-destructive/10 aria-pressed:text-destructive"
      >
        {muted ? <MicOffIcon /> : <MicIcon />}
        {muted ? "Muted" : "Mic on"}
      </Toggle>
    </div>
  )
}
