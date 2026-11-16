"use client"

import * as React from "react"
import {
  Lock as LockIcon,
  LockOpen as LockOpenIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@workspace/ui/components/input-group"

export default function DimensionUnitInputs() {
  const [w, setW] = React.useState(1200)
  const [h, setH] = React.useState(630)
  const [locked, setLocked] = React.useState(true)
  const ratio = 1200 / 630

  return (
    <div className="flex w-full max-w-xs items-end gap-2">
      <Field>
        <FieldLabel htmlFor="dim-w">Width</FieldLabel>
        <InputGroup>
          <InputGroupInput
            id="dim-w"
            type="number"
            value={w}
            onChange={(e) => {
              const v = Number(e.target.value)
              setW(v)
              if (locked) setH(Math.round(v / ratio))
            }}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupText>px</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Field>
      <Button
        variant={locked ? "secondary" : "ghost"}
        size="icon"
        aria-label="Lock aspect ratio"
        aria-pressed={locked}
        onClick={() => setLocked((l) => !l)}
      >
        {locked ? <LockIcon /> : <LockOpenIcon />}
      </Button>
      <Field>
        <FieldLabel htmlFor="dim-h">Height</FieldLabel>
        <InputGroup>
          <InputGroupInput
            id="dim-h"
            type="number"
            value={h}
            onChange={(e) => {
              const v = Number(e.target.value)
              setH(v)
              if (locked) setW(Math.round(v * ratio))
            }}
          />
          <InputGroupAddon align="inline-end">
            <InputGroupText>px</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Field>
    </div>
  )
}
