"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function BrandColorField() {
  const [color, setColor] = React.useState("#00a8ff")
  const valid = /^#[0-9a-fA-F]{6}$/.test(color)

  return (
    <Field data-invalid={!valid} className="w-full max-w-xs">
      <FieldLabel htmlFor="brand-hex">Brand color</FieldLabel>
      <div className="flex gap-2">
        <input
          type="color"
          aria-label="Pick brand color"
          value={valid ? color : "#000000"}
          onChange={(e) => setColor(e.target.value)}
          className="h-8 w-10 cursor-pointer border bg-transparent p-0.5"
        />
        <Input
          id="brand-hex"
          value={color}
          aria-invalid={!valid}
          onChange={(e) => setColor(e.target.value)}
          className="font-mono uppercase"
        />
      </div>
      {valid ? (
        <FieldDescription>
          Used for buttons, links, and email headers.
        </FieldDescription>
      ) : (
        <FieldError>Use a 6-digit hex value like #1A2B3C.</FieldError>
      )}
    </Field>
  )
}
