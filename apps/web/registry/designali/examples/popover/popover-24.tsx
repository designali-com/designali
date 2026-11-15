"use client"

import * as React from "react"
import { PlayIcon, Volume1Icon, Volume2Icon, VolumeXIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Slider } from "@workspace/ui/components/slider"

export default function VolumePopover() {
  const [volume, setVolume] = React.useState(64)
  const Icon =
    volume === 0 ? VolumeXIcon : volume < 50 ? Volume1Icon : Volume2Icon

  return (
    <div className="flex w-full max-w-xs items-center gap-2 border p-2">
      <Button size="icon-sm" aria-label="Play">
        <PlayIcon />
      </Button>
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-xs font-medium">
          Ep. 42 · Building in public
        </span>
        <span className="text-[11px] text-muted-foreground">12:08 / 48:30</span>
      </div>
      <Popover>
        <PopoverTrigger
          render={<Button variant="ghost" size="icon-sm" aria-label="Volume" />}
        >
          <Icon />
        </PopoverTrigger>
        <PopoverContent side="top" className="w-12 items-center p-2">
          <Slider
            orientation="vertical"
            className="h-28"
            value={[volume]}
            onValueChange={(v) => setVolume(Array.isArray(v) ? v[0]! : v)}
            aria-label="Volume"
          />
          <span className="text-[10px] text-muted-foreground tabular-nums">
            {volume}
          </span>
        </PopoverContent>
      </Popover>
    </div>
  )
}
