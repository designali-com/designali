"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Slider } from "@workspace/ui/components/slider"
import { cn } from "@workspace/ui/lib/utils"

export default function InvalidReplicaSlider() {
  const [replicas, setReplicas] = React.useState([1])
  const invalid = replicas[0]! < 2

  return (
    <Field data-invalid={invalid} className="w-full max-w-sm">
      <div className="flex items-center justify-between">
        <FieldLabel>Replicas</FieldLabel>
        <span className="text-sm tabular-nums">{replicas[0]}</span>
      </div>
      <Slider
        aria-label="Replicas"
        aria-invalid={invalid}
        className={cn(
          invalid &&
            "[&_[data-slot=slider-range]]:bg-destructive [&_[data-slot=slider-thumb]]:border-destructive"
        )}
        value={replicas}
        onValueChange={(value) => setReplicas(value as number[])}
        min={1}
        max={10}
      />
      {invalid ? (
        <FieldError>High availability requires at least 2 replicas.</FieldError>
      ) : (
        <FieldDescription>
          Traffic is balanced across all replicas.
        </FieldDescription>
      )}
    </Field>
  )
}
