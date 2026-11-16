"use client"

import * as React from "react"
import {
  Heart as HeartIcon,
  Pause as PauseIcon,
  Play as PlayIcon,
  Repeat as RepeatIcon,
  Shuffle as ShuffleIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Slider } from "@workspace/ui/components/slider"

export default function NowPlayingCard() {
  const [playing, setPlaying] = React.useState(true)
  const [position, setPosition] = React.useState([84])

  const time = (s: number) =>
    Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0")

  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="grid-cols-[auto_1fr_auto] gap-x-3">
        <div className="row-span-2 size-12 bg-gradient-to-br from-primary via-primary to-chart-2" />
        <CardTitle>Design se code tak</CardTitle>
        <CardDescription>Designali Sessions</CardDescription>
        <CardAction className="col-start-3">
          <Button variant="ghost" size="icon-sm" aria-label="Like">
            <HeartIcon className="fill-primary text-primary" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="grid gap-2">
        <Slider
          value={position}
          onValueChange={(v) => setPosition(v as number[])}
          max={214}
          aria-label="Seek"
        />
        <div className="flex justify-between text-[10px] text-muted-foreground tabular-nums">
          <span>{time(position[0] ?? 0)}</span>
          <span>3:34</span>
        </div>
      </CardContent>
      <CardFooter className="justify-center gap-2">
        <Button variant="ghost" size="icon-sm" aria-label="Shuffle">
          <ShuffleIcon />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Previous">
          <SkipBackIcon />
        </Button>
        <Button
          size="icon-lg"
          aria-label={playing ? "Pause" : "Play"}
          onClick={() => setPlaying(!playing)}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </Button>
        <Button variant="ghost" size="icon" aria-label="Next">
          <SkipForwardIcon />
        </Button>
        <Button variant="ghost" size="icon-sm" aria-label="Repeat">
          <RepeatIcon />
        </Button>
      </CardFooter>
    </Card>
  )
}
