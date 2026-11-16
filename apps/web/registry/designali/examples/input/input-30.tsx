"use client"

import * as React from "react"

import { Field, FieldError, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function ColorHexInput() {
  const [color, setColor] = React.useState("#00a8ff")
  const valid = /^#[0-9a-f]{6}$/i.test(color)

  return (
    <Field data-invalid={!valid} className="w-full max-w-[16rem]">
      <FieldLabel htmlFor="brand-hex">Designali brand color</FieldLabel>
      <div className="flex gap-2">
        <Input
          type="color"
          aria-label="Pick color"
          value={valid ? color : "#000000"}
          onChange={(e) => setColor(e.target.value)}
          className="w-10 shrink-0 cursor-pointer p-0.5"
        />
        <Input
          id="brand-hex"
          value={color}
          aria-invalid={!valid}
          onChange={(e) => setColor(e.target.value)}
          className="font-sans uppercase"
        />
      </div>
      {!valid && (
        <FieldError>Use a 6-digit hex value, like Designali blue #00A8FF.</FieldError>
      )}
    </Field>
  )
}
