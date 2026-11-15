"use client"

import * as React from "react"
import {
  PauseIcon,
  PlayIcon,
  RepeatIcon,
  ShuffleIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { Slider } from "@workspace/ui/components/slider"

export default function NowPlayingDrawer() {
  const [playing, setPlaying] = React.useState(true)
  const [position, setPosition] = React.useState(84)

  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger
        render={<button type="button" />}
        className="flex w-full max-w-xs items-center gap-3 border bg-background p-2 text-start hover:bg-muted"
      >
        <span className="size-9 shrink-0 bg-gradient-to-br from-pink-500 to-orange-400" />
        <span className="min-w-0 flex-1">
          <span className="block truncate font-medium">Paper Lanterns</span>
          <span className="block truncate text-muted-foreground">
            The Quiet Harbors
          </span>
        </span>
        {playing ? (
          <PauseIcon className="size-4" />
        ) : (
          <PlayIcon className="size-4" />
        )}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-xs flex-col gap-4 p-4">
          <div className="aspect-square w-full bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400" />
          <DrawerHeader className="p-0 text-start">
            <DrawerTitle className="text-base">Paper Lanterns</DrawerTitle>
            <DrawerDescription>
              The Quiet Harbors · Low Light (2026)
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col gap-1">
            <Slider
              value={[position]}
              max={214}
              onValueChange={(value) =>
                setPosition(typeof value === "number" ? value : (value[0] ?? 0))
              }
              aria-label="Playback position"
            />
            <div className="flex justify-between text-muted-foreground tabular-nums">
              <span>
                {Math.floor(position / 60)}:
                {String(position % 60).padStart(2, "0")}
              </span>
              <span>3:34</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" aria-label="Shuffle">
              <ShuffleIcon />
            </Button>
            <Button variant="ghost" size="icon-lg" aria-label="Previous">
              <SkipBackIcon />
            </Button>
            <Button
              size="icon-lg"
              className="size-12 rounded-full"
              aria-label={playing ? "Pause" : "Play"}
              onClick={() => setPlaying(!playing)}
            >
              {playing ? <PauseIcon /> : <PlayIcon />}
            </Button>
            <Button variant="ghost" size="icon-lg" aria-label="Next">
              <SkipForwardIcon />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Repeat">
              <RepeatIcon />
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
