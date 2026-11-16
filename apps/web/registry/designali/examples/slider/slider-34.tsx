"use client"

import * as React from "react"
import {
  BatteryFull as BatteryFullIcon,
  BatteryMedium as BatteryMediumIcon,
} from "@designali/icons"

import { Slider } from "@workspace/ui/components/slider"

export default function BatteryChargeLimit() {
  const [limit, setLimit] = React.useState([80])
  const l = limit[0]!

  return (
    <div className="flex w-full max-w-sm items-start gap-3 border p-4">
      <div className="flex size-9 shrink-0 items-center justify-center bg-muted">
        {l === 100 ? (
          <BatteryFullIcon className="size-5" />
        ) : (
          <BatteryMediumIcon className="size-5" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <div>
          <div className="text-sm font-medium">Charge limit: {l}%</div>
          <div className="text-xs text-muted-foreground">
            Keeping the battery below 100% extends its lifespan.
          </div>
        </div>
        <Slider
          aria-label="Charge limit"
          value={limit}
          onValueChange={(value) => setLimit(value as number[])}
          min={50}
          max={100}
          step={5}
        />
      </div>
    </div>
  )
}
