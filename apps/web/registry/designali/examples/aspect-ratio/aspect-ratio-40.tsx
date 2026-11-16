"use client"

import * as React from "react"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Badge } from "@workspace/ui/components/badge"
import { Slider } from "@workspace/ui/components/slider"

export default function BeforeAfterSlider() {
  const [position, setPosition] = React.useState(50)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <AspectRatio ratio={4 / 3} className="overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-muted-foreground to-muted-foreground grayscale" />
        <div
          className="absolute inset-0 bg-linear-to-br from-chart-1 via-primary to-chart-2"
          style={{ clipPath: "inset(0 0 0 " + position + "%)" }}
        />
        <div
          className="absolute inset-y-0 w-0.5 bg-white"
          style={{ left: position + "%" }}
        />
        <Badge variant="secondary" className="absolute start-2 top-2">
          Before
        </Badge>
        <Badge className="absolute end-2 top-2">After</Badge>
      </AspectRatio>
      <Slider
        value={[position]}
        onValueChange={(value) =>
          setPosition(Array.isArray(value) ? value[0]! : value)
        }
        aria-label="Comparison position"
      />
    </div>
  )
}
