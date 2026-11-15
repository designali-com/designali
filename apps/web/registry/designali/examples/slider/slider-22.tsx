"use client"

import * as React from "react"

import { Slider } from "@workspace/ui/components/slider"

const channels = [
  {
    key: "r",
    label: "Red",
    className: "[&_[data-slot=slider-range]]:bg-red-500",
  },
  {
    key: "g",
    label: "Green",
    className: "[&_[data-slot=slider-range]]:bg-green-500",
  },
  {
    key: "b",
    label: "Blue",
    className: "[&_[data-slot=slider-range]]:bg-blue-500",
  },
] as const

export default function RgbColorMixer() {
  const [rgb, setRgb] = React.useState({ r: 72, g: 132, b: 220 })
  const color = "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")"

  return (
    <div className="flex w-full max-w-sm gap-4 border p-4">
      <div className="flex w-20 shrink-0 flex-col gap-2">
        <div
          className="aspect-square w-full border"
          style={{ backgroundColor: color }}
        />
        <code className="text-center font-mono text-[10px] text-muted-foreground">
          {color}
        </code>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4">
        {channels.map((channel) => (
          <div key={channel.key} className="flex items-center gap-2">
            <span className="w-3 text-xs font-medium">{channel.label[0]}</span>
            <Slider
              aria-label={channel.label}
              className={channel.className}
              value={[rgb[channel.key]]}
              onValueChange={(value) =>
                setRgb((prev) => ({
                  ...prev,
                  [channel.key]: (value as number[])[0]!,
                }))
              }
              max={255}
            />
            <span className="w-7 text-right text-xs text-muted-foreground tabular-nums">
              {rgb[channel.key]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
