"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

export default function ImageAltTextTextarea() {
  const [alt, setAlt] = React.useState("Colorful 3D render from the Designali CGI series")
  const recommended = 125

  return (
    <div className="flex w-full max-w-md gap-3">
      <div
        className="aspect-square w-24 shrink-0 bg-gradient-to-br from-chart-1 via-primary to-chart-2"
        aria-hidden
      />
      <Field>
        <FieldLabel htmlFor="ta-alt">Alt text</FieldLabel>
        <Textarea
          id="ta-alt"
          value={alt}
          onChange={(e) => setAlt(e.target.value)}
          className="min-h-16"
        />
        <FieldDescription
          className={cn(alt.length > recommended && "text-primary")}
        >
          {alt.length}/{recommended} recommended. Describe what matters in the
          image.
        </FieldDescription>
      </Field>
    </div>
  )
}
