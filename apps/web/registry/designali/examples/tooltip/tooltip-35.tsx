"use client"

import * as React from "react"
import {
  Pause as PauseIcon,
  Play as PlayIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Kbd } from "@workspace/ui/components/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

export default function MediaPlayerControlTooltips() {
  const [playing, setPlaying] = React.useState(false)
  const [muted, setMuted] = React.useState(false)

  return (
    <TooltipProvider>
      <div className="flex w-full max-w-xs items-center gap-2 border p-2">
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Previous track"
              />
            }
          >
            <SkipBackIcon />
          </TooltipTrigger>
          <TooltipContent>Previous</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            closeOnClick={false}
            onClick={() => setPlaying((p) => !p)}
            render={
              <Button size="icon-sm" aria-label={playing ? "Pause" : "Play"} />
            }
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </TooltipTrigger>
          <TooltipContent>
            {playing ? "Pause" : "Play"}
            <Kbd>Space</Kbd>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button variant="ghost" size="icon-sm" aria-label="Next track" />
            }
          >
            <SkipForwardIcon />
          </TooltipTrigger>
          <TooltipContent>Next</TooltipContent>
        </Tooltip>
        <div className="mx-1 h-1 flex-1 bg-muted">
          <div className="h-full w-1/3 bg-primary" />
        </div>
        <Tooltip>
          <TooltipTrigger
            closeOnClick={false}
            onClick={() => setMuted((m) => !m)}
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label={muted ? "Unmute" : "Mute"}
              />
            }
          >
            {muted ? <VolumeXIcon /> : <Volume2Icon />}
          </TooltipTrigger>
          <TooltipContent>{muted ? "Unmute" : "Mute"}</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
