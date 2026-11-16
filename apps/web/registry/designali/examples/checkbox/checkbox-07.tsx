"use client"

import * as React from "react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@workspace/ui/components/field"

const toppings = ["Logo", "Color palette", "Typography", "Brand guidelines"]

export default function SelectAllIndeterminate() {
  const [selected, setSelected] = React.useState<string[]>(["Color palette"])
  const all = selected.length === toppings.length
  const some = selected.length > 0 && !all

  return (
    <FieldSet className="w-full max-w-xs">
      <Field orientation="horizontal">
        <Checkbox
          id="toppings-all"
          checked={all}
          indeterminate={some}
          onCheckedChange={(checked) => setSelected(checked ? toppings : [])}
          className="data-indeterminate:border-primary data-indeterminate:bg-primary data-indeterminate:text-primary-foreground"
        />
        <FieldLabel htmlFor="toppings-all">All brand identity deliverables</FieldLabel>
      </Field>
      <FieldGroup className="gap-3 ps-6">
        {toppings.map((topping) => (
          <Field key={topping} orientation="horizontal">
            <Checkbox
              id={"topping-" + topping}
              checked={selected.includes(topping)}
              onCheckedChange={(checked) =>
                setSelected((list) =>
                  checked
                    ? [...list, topping]
                    : list.filter((t) => t !== topping)
                )
              }
            />
            <FieldLabel htmlFor={"topping-" + topping} className="font-normal">
              {topping}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  )
}
