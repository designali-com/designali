"use client"

import * as React from "react"

import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Slider } from "@workspace/ui/components/slider"

export default function WidthSliderResponsive() {
  const [width, setWidth] = React.useState(70)

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex h-56 items-start">
        <div style={{ width: width + "%" }} className="transition-[width]">
          <AspectRatio
            ratio={4 / 3}
            className="border-2 border-primary bg-primary/10"
          >
            <span className="absolute inset-0 flex items-center justify-center font-mono text-xs">
              4:3 at {width}%
            </span>
          </AspectRatio>
        </div>
      </div>
      <Field>
        <FieldLabel>Container width</FieldLabel>
        <Slider
          min={30}
          max={100}
          value={[width]}
          onValueChange={(value) =>
            setWidth(Array.isArray(value) ? value[0]! : value)
          }
        />
      </Field>
    </div>
  )
}
