"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Separator } from "@workspace/ui/components/separator"
import { Switch } from "@workspace/ui/components/switch"

const addOns = [
  {
    id: "gift",
    label: "Figma source file",
    description: "Editable Figma file for the template",
    price: 4,
  },
  {
    id: "protection",
    label: "Priority support",
    description: "Direct help from the Designali team",
    price: 2.5,
  },
]

export default function CheckoutAddOns() {
  const [selected, setSelected] = React.useState<Record<string, boolean>>({
    protection: true,
  })
  const subtotal = 86
  const total = addOns.reduce(
    (sum, a) => sum + (selected[a.id] ? a.price : 0),
    subtotal
  )

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      {addOns.map((addOn) => (
        <Field key={addOn.id} orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor={"addon-" + addOn.id}>
              {addOn.label}{" "}
              <span className="text-muted-foreground">
                +{"$" + addOn.price.toFixed(2)}
              </span>
            </FieldLabel>
            <FieldDescription>{addOn.description}</FieldDescription>
          </FieldContent>
          <Switch
            id={"addon-" + addOn.id}
            checked={!!selected[addOn.id]}
            onCheckedChange={(checked) =>
              setSelected((s) => ({ ...s, [addOn.id]: checked }))
            }
          />
        </Field>
      ))}
      <Separator />
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Total</span>
        <span className="font-semibold">{"$" + total.toFixed(2)}</span>
      </div>
      <Button className="w-full">Pay now</Button>
    </div>
  )
}
