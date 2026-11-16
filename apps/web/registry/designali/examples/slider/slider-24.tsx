"use client"

import * as React from "react"
import {
  Frown as FrownIcon,
  Meh as MehIcon,
  Smile as SmileIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Slider } from "@workspace/ui/components/slider"

export default function SatisfactionScoreSlider() {
  const [score, setScore] = React.useState([7])
  const s = score[0]!
  const Icon = s <= 4 ? FrownIcon : s <= 7 ? MehIcon : SmileIcon

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <p className="text-sm font-medium">
        How likely are you to recommend Designali to a colleague?
      </p>
      <div className="flex items-center gap-3">
        <Icon className="size-6 shrink-0 text-muted-foreground" />
        <Slider
          aria-label="Recommendation score"
          value={score}
          onValueChange={(value) => setScore(value as number[])}
          max={10}
        />
        <span className="w-6 text-right text-lg font-semibold tabular-nums">
          {s}
        </span>
      </div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Not likely</span>
        <span>Extremely likely</span>
      </div>
      <Button size="sm" className="self-end">
        Submit
      </Button>
    </div>
  )
}
