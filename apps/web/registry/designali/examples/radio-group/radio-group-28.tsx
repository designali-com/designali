"use client"

import * as React from "react"
import { InboxIcon } from "lucide-react"

import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { cn } from "@workspace/ui/lib/utils"

const densities = [
  { value: "compact", label: "Compact", gap: "gap-0.5", row: "py-1" },
  { value: "default", label: "Default", gap: "gap-1", row: "py-2" },
  { value: "relaxed", label: "Relaxed", gap: "gap-2", row: "py-3" },
]
const rows = ["Quarterly planning", "Design review", "Vendor invoices"]

export default function ListDensityPreview() {
  const [density, setDensity] = React.useState("default")
  const current = densities.find((d) => d.value === density) ?? densities[1]!

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <RadioGroup
        value={density}
        onValueChange={(v) => setDensity(v as string)}
        className="flex gap-5"
      >
        {densities.map((d) => (
          <Field key={d.value} orientation="horizontal" className="w-auto">
            <RadioGroupItem value={d.value} id={"density-" + d.value} />
            <FieldLabel htmlFor={"density-" + d.value} className="font-normal">
              {d.label}
            </FieldLabel>
          </Field>
        ))}
      </RadioGroup>
      <div className={cn("flex flex-col border p-2", current.gap)}>
        {rows.map((row) => (
          <div
            key={row}
            className={cn(
              "flex items-center gap-2 bg-muted/50 px-2 text-sm",
              current.row
            )}
          >
            <InboxIcon className="size-3.5 text-muted-foreground" />
            {row}
          </div>
        ))}
      </div>
    </div>
  )
}
