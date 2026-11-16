"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"

const filters: Record<string, [string, number][]> = {
  Category: [
    ["Templates", 42],
    ["Blocks", 18],
    ["Landing pages", 27],
  ],
  Stack: [
    ["Next.js", 30],
    ["React", 54],
    ["Tailwind CSS", 41],
    ["Vue", 0],
  ],
}

export default function ProductFilterSidebar() {
  const [active, setActive] = React.useState<string[]>(["React"])

  const toggle = (value: string, checked: boolean) =>
    setActive((list) =>
      checked ? [...list, value] : list.filter((v) => v !== value)
    )

  return (
    <div className="flex w-full max-w-[14rem] flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Filters</span>
        <Button
          variant="link"
          size="xs"
          disabled={active.length === 0}
          onClick={() => setActive([])}
        >
          Clear ({active.length})
        </Button>
      </div>
      {Object.entries(filters).map(([group, options]) => (
        <FieldSet key={group}>
          <FieldLegend variant="label">{group}</FieldLegend>
          <FieldGroup className="gap-2.5">
            {options.map(([value, count]) => (
              <Field
                key={value}
                orientation="horizontal"
                data-disabled={count === 0 || undefined}
              >
                <Checkbox
                  id={"filter-" + value}
                  checked={active.includes(value)}
                  disabled={count === 0}
                  onCheckedChange={(checked) => toggle(value, checked)}
                />
                <FieldLabel
                  htmlFor={"filter-" + value}
                  className="flex-1 font-normal"
                >
                  {value}
                </FieldLabel>
                <span className="text-xs text-muted-foreground">{count}</span>
              </Field>
            ))}
          </FieldGroup>
        </FieldSet>
      ))}
    </div>
  )
}
