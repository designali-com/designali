"use client"

import * as React from "react"
import {
  HardDrive as HardDriveIcon,
} from "@designali/icons"

import { Slider } from "@workspace/ui/components/slider"

const total = 512

export default function StorageAllocationSlider() {
  const [system, setSystem] = React.useState([128])

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center gap-2 text-sm font-medium">
        <HardDriveIcon className="size-4" />
        Partition disk ({total} GB)
      </div>
      <Slider
        aria-label="System partition size"
        className="[&_[data-slot=slider-thumb]]:size-4 [&_[data-slot=slider-track]]:h-2! [&_[data-slot=slider-track]]:bg-sky-500/40"
        value={system}
        onValueChange={(value) => setSystem(value as number[])}
        min={64}
        max={448}
        step={16}
      />
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="size-2.5 bg-primary" />
          System: {system[0]} GB
        </div>
        <div className="flex items-center justify-end gap-2">
          <span className="size-2.5 bg-sky-500/40" />
          Data: {total - system[0]!} GB
        </div>
      </div>
    </div>
  )
}
