"use client"

import * as React from "react"
import { CaptionsIcon, PlayCircleIcon, SettingsIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Toggle } from "@workspace/ui/components/toggle"

export default function VideoCaptionsToggle() {
  const [captions, setCaptions] = React.useState(true)

  return (
    <div className="relative aspect-video w-full max-w-md overflow-hidden bg-gradient-to-br from-slate-800 to-slate-950 text-white">
      <div className="absolute inset-0 flex items-center justify-center">
        <PlayCircleIcon className="size-12 opacity-80" />
      </div>
      {captions && (
        <p className="absolute inset-x-6 bottom-12 bg-black/70 px-2 py-1 text-center text-sm">
          &quot;Start by measuring the room twice, then cut once.&quot;
        </p>
      )}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-end gap-1 bg-gradient-to-t from-black/70 p-2">
        <Toggle
          size="sm"
          pressed={captions}
          onPressedChange={setCaptions}
          aria-label="Captions"
          className="text-white hover:bg-white/15 hover:text-white aria-pressed:bg-white aria-pressed:text-black"
        >
          <CaptionsIcon />
        </Toggle>
        <Button
          size="icon-sm"
          variant="ghost"
          aria-label="Settings"
          className="text-white hover:bg-white/15 hover:text-white"
        >
          <SettingsIcon />
        </Button>
      </div>
    </div>
  )
}
