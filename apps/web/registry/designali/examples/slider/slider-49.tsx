"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Slider } from "@workspace/ui/components/slider"

export default function FormSubmitSliderName() {
  const [submitted, setSubmitted] = React.useState<string | null>(null)

  return (
    <form
      className="flex w-full max-w-sm flex-col gap-4 border p-4"
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(String(new FormData(e.currentTarget).get("effort")))
      }}
    >
      <Field>
        <FieldLabel>
          Story points for &quot;Bulk invoice export&quot;
        </FieldLabel>
        <Slider
          name="effort"
          aria-label="Story points"
          defaultValue={[5]}
          min={1}
          max={13}
        />
        <FieldDescription>1 is trivial, 13 needs to be split.</FieldDescription>
      </Field>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {submitted
            ? "Submitted: " + submitted + " points"
            : "Not submitted yet"}
        </span>
        <Button type="submit" size="sm">
          Save estimate
        </Button>
      </div>
    </form>
  )
}
