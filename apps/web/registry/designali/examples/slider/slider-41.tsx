"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  Pencil as PencilIcon,
} from "@designali/icons"

import { Slider } from "@workspace/ui/components/slider"

export default function CommitOnReleaseSlider() {
  const [live, setLive] = React.useState([60])
  const [saved, setSaved] = React.useState(60)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Autoscale threshold</span>
        <span className="text-sm tabular-nums">{live[0]}% CPU</span>
      </div>
      <Slider
        aria-label="Autoscale threshold"
        value={live}
        onValueChange={(value) => setLive(value as number[])}
        onValueCommitted={(value) => setSaved((value as number[])[0]!)}
        min={20}
        max={95}
      />
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        {live[0] === saved ? (
          <>
            <CheckIcon className="size-3.5 text-emerald-600 dark:text-emerald-400" />
            Saved at {saved}%
          </>
        ) : (
          <>
            <PencilIcon className="size-3.5" />
            Release to save (was {saved}%)
          </>
        )}
      </div>
    </div>
  )
}
