"use client"

import * as React from "react"
import {
  Mic as MicIcon,
  MicOff as MicOffIcon,
  Video as VideoIcon,
  VideoOff as VideoOffIcon,
} from "@designali/icons"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Switch } from "@workspace/ui/components/switch"

export default function VideoCallPreflight() {
  const [camera, setCamera] = React.useState(true)
  const [mic, setMic] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-3">
      <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-muted to-muted/40">
        {camera ? (
          <Avatar size="lg">
            <AvatarFallback>JO</AvatarFallback>
          </Avatar>
        ) : (
          <VideoOffIcon className="size-6 text-muted-foreground" />
        )}
        {!mic && (
          <span className="absolute start-2 bottom-2 flex items-center gap-1 bg-background/80 px-1.5 py-0.5 text-xs">
            <MicOffIcon className="size-3" /> Muted
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <label className="flex items-center justify-between gap-2 border px-3 py-2 text-sm">
          <span className="flex items-center gap-2">
            <VideoIcon className="size-4" />
            Camera
          </span>
          <Switch size="sm" checked={camera} onCheckedChange={setCamera} />
        </label>
        <label className="flex items-center justify-between gap-2 border px-3 py-2 text-sm">
          <span className="flex items-center gap-2">
            <MicIcon className="size-4" />
            Mic
          </span>
          <Switch size="sm" checked={mic} onCheckedChange={setMic} />
        </label>
      </div>
      <Button className="w-full">Join meeting</Button>
    </div>
  )
}
