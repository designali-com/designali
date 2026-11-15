"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export default function RecurringScheduleFieldSet() {
  const [freq, setFreq] = React.useState("weekly")
  const [picked, setPicked] = React.useState<string[]>(["Mon", "Wed", "Fri"])

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Repeat</FieldLegend>
      <FieldGroup className="gap-4">
        <Field>
          <FieldLabel htmlFor="repeat-freq">Frequency</FieldLabel>
          <NativeSelect
            id="repeat-freq"
            value={freq}
            onChange={(e) => setFreq(e.target.value)}
          >
            <NativeSelectOption value="daily">Every day</NativeSelectOption>
            <NativeSelectOption value="weekly">Every week</NativeSelectOption>
            <NativeSelectOption value="monthly">Every month</NativeSelectOption>
          </NativeSelect>
        </Field>
        {freq === "weekly" && (
          <Field>
            <FieldLabel>On these days</FieldLabel>
            <ToggleGroup
              multiple
              variant="outline"
              size="sm"
              value={picked}
              onValueChange={(v) => setPicked(v as string[])}
            >
              {days.map((d) => (
                <ToggleGroupItem
                  key={d}
                  value={d}
                  aria-label={d}
                  className="w-9"
                >
                  {d.slice(0, 2)}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            <FieldDescription>
              {picked.length
                ? "Repeats on " + picked.join(", ")
                : "Pick at least one day."}
            </FieldDescription>
          </Field>
        )}
      </FieldGroup>
    </FieldSet>
  )
}
