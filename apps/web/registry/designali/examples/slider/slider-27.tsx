"use client"

import * as React from "react"
import {
  Bell as BellIcon,
} from "@designali/icons"

import { Slider } from "@workspace/ui/components/slider"
import { cn } from "@workspace/ui/lib/utils"

const options = ["Instantly", "Hourly", "Daily", "Weekly", "Never"]

export default function NotificationFrequencySlider() {
  const [index, setIndex] = React.useState([2])

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center gap-2">
        <BellIcon className="size-4 text-muted-foreground" />
        <span className="text-sm font-medium">Email digest</span>
      </div>
      <Slider
        aria-label="Email digest frequency"
        value={index}
        onValueChange={(value) => setIndex(value as number[])}
        max={options.length - 1}
      />
      <div className="flex justify-between text-[11px]">
        {options.map((option, i) => (
          <button
            key={option}
            type="button"
            onClick={() => setIndex([i])}
            className={cn(
              i === index[0]
                ? "font-medium text-foreground"
                : "text-muted-foreground"
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
