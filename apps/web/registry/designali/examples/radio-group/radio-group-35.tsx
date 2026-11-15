"use client"

import * as React from "react"

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

const sizes = [
  { value: "small", label: 'Small 10"', price: 11 },
  { value: "medium", label: 'Medium 12"', price: 14 },
  { value: "large", label: 'Large 14"', price: 17 },
]
const crusts = [
  { value: "classic", label: "Classic", price: 0 },
  { value: "thin", label: "Thin & crispy", price: 0 },
  { value: "stuffed", label: "Cheese-stuffed", price: 2.5 },
]

export default function PizzaOrderBuilder() {
  const [size, setSize] = React.useState("medium")
  const [crust, setCrust] = React.useState("classic")
  const total =
    (sizes.find((s) => s.value === size)?.price ?? 0) +
    (crusts.find((c) => c.value === crust)?.price ?? 0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <p className="text-base font-semibold">Margherita</p>
      <FieldSet>
        <FieldLegend variant="label">Size</FieldLegend>
        <RadioGroup value={size} onValueChange={(v) => setSize(v as string)}>
          {sizes.map((s) => (
            <Field key={s.value} orientation="horizontal">
              <RadioGroupItem value={s.value} id={"pz-size-" + s.value} />
              <FieldLabel
                htmlFor={"pz-size-" + s.value}
                className="font-normal"
              >
                {s.label}
              </FieldLabel>
              <span className="ms-auto text-sm text-muted-foreground">
                {"$" + s.price}
              </span>
            </Field>
          ))}
        </RadioGroup>
      </FieldSet>
      <FieldSet>
        <FieldLegend variant="label">Crust</FieldLegend>
        <RadioGroup value={crust} onValueChange={(v) => setCrust(v as string)}>
          {crusts.map((c) => (
            <Field key={c.value} orientation="horizontal">
              <RadioGroupItem value={c.value} id={"pz-crust-" + c.value} />
              <FieldLabel
                htmlFor={"pz-crust-" + c.value}
                className="font-normal"
              >
                {c.label}
              </FieldLabel>
              <span className="ms-auto text-sm text-muted-foreground">
                {c.price ? "+$" + c.price.toFixed(2) : ""}
              </span>
            </Field>
          ))}
        </RadioGroup>
      </FieldSet>
      <Button>Add to order &middot; {"$" + total.toFixed(2)}</Button>
    </div>
  )
}
