"use client"

import * as React from "react"
import {
  Info as InfoIcon,
} from "@designali/icons"

import { Label } from "@workspace/ui/components/label"
import { Slider } from "@workspace/ui/components/slider"

const homePrice = 420000

export default function DownPaymentSlider() {
  const [percent, setPercent] = React.useState([15])
  const p = percent[0]!

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-baseline justify-between">
        <Label>Down payment</Label>
        <span className="text-sm font-medium tabular-nums">
          ${((homePrice * p) / 100).toLocaleString()} ({p}%)
        </span>
      </div>
      <Slider
        aria-label="Down payment percent"
        value={percent}
        onValueChange={(value) => setPercent(value as number[])}
        min={3}
        max={50}
      />
      {p < 20 ? (
        <p className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400">
          <InfoIcon className="size-3.5" />
          Under 20% usually requires mortgage insurance.
        </p>
      ) : (
        <p className="text-xs text-muted-foreground">
          No mortgage insurance required.
        </p>
      )}
    </div>
  )
}
