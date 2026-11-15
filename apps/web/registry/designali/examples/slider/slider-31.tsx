"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Slider } from "@workspace/ui/components/slider"

function label(minutes: number) {
  return minutes >= 60 ? minutes / 60 + " hr" : minutes + " min"
}

export default function SessionTimeoutField() {
  const [minutes, setMinutes] = React.useState([30])

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Security</FieldLegend>
      <Field>
        <div className="flex items-center justify-between">
          <FieldLabel>Idle session timeout</FieldLabel>
          <Badge variant="outline">{label(minutes[0]!)}</Badge>
        </div>
        <Slider
          aria-label="Idle session timeout"
          value={minutes}
          onValueChange={(value) => setMinutes(value as number[])}
          min={15}
          max={240}
          step={15}
        />
        <FieldDescription>
          Members are signed out after this period of inactivity. Applies to all
          84 workspace members.
        </FieldDescription>
      </Field>
    </FieldSet>
  )
}
