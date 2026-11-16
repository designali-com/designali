"use client"

import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { cn } from "@workspace/ui/lib/utils"

const colors = [
  { label: "Graphite", value: "graphite", swatch: "bg-foreground" },
  { label: "Sand", value: "sand", swatch: "bg-primary/20" },
  { label: "Sage", value: "sage", swatch: "bg-chart-1" },
  { label: "Ocean", value: "ocean", swatch: "bg-chart-2" },
  { label: "Clay", value: "clay", swatch: "bg-primary" },
]

export default function ColorSwatchSelect() {
  return (
    <Field className="w-full max-w-56">
      <FieldLabel htmlFor="color">Color</FieldLabel>
      <Select items={colors} defaultValue="sage">
        <SelectTrigger id="color" className="w-full">
          <SelectValue>
            {(value: string) => {
              const color = colors.find((item) => item.value === value)
              return (
                <>
                  <span
                    className={cn(
                      "size-3.5 rounded-full ring-1 ring-foreground/10",
                      color?.swatch
                    )}
                  />
                  {color?.label}
                </>
              )
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {colors.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span
                className={cn(
                  "size-3.5 rounded-full ring-1 ring-foreground/10",
                  item.swatch
                )}
              />
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  )
}
