"use client"

import * as React from "react"
import { RepeatIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const days = ["M", "T", "W", "T", "F", "S", "S"]

export default function EventRecurrenceOptions() {
  const [repeat, setRepeat] = React.useState("weekly")

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label" className="flex items-center gap-1.5">
        <RepeatIcon className="size-3.5" />
        Repeat
      </FieldLegend>
      <RadioGroup value={repeat} onValueChange={(v) => setRepeat(v as string)}>
        {["never", "daily", "weekly", "monthly"].map((r) => (
          <Field key={r} orientation="horizontal">
            <RadioGroupItem value={r} id={"rep-" + r} />
            <FieldLabel htmlFor={"rep-" + r} className="font-normal capitalize">
              {r}
            </FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      {repeat === "weekly" && (
        <div className="flex gap-1 ps-6">
          {days.map((d, i) => (
            <Button
              key={i}
              variant={i === 1 || i === 3 ? "default" : "outline"}
              size="icon-xs"
            >
              {d}
            </Button>
          ))}
        </div>
      )}
    </FieldSet>
  )
}
