"use client"

import * as React from "react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@workspace/ui/components/field"

const addons = [
  {
    id: "backup",
    title: "Icon pack",
    description: "4000+ icons from @designali/icons",
    price: 8,
  },
  {
    id: "domain",
    title: "Logo library",
    description: "Brand logos from @designali/logos",
    price: 4,
  },
  {
    id: "support",
    title: "Priority support",
    description: "1-hour response from the Designali team",
    price: 19,
  },
]

export default function AddonCardSelection() {
  const [picked, setPicked] = React.useState<string[]>(["backup"])
  const total = addons
    .filter((a) => picked.includes(a.id))
    .reduce((s, a) => s + a.price, 0)

  return (
    <FieldGroup className="w-full max-w-sm gap-3">
      {addons.map((addon) => (
        <FieldLabel key={addon.id} htmlFor={"addon-" + addon.id}>
          <Field orientation="horizontal">
            <Checkbox
              id={"addon-" + addon.id}
              checked={picked.includes(addon.id)}
              onCheckedChange={(checked) =>
                setPicked((list) =>
                  checked
                    ? [...list, addon.id]
                    : list.filter((id) => id !== addon.id)
                )
              }
            />
            <FieldContent>
              <FieldTitle>{addon.title}</FieldTitle>
              <FieldDescription>{addon.description}</FieldDescription>
            </FieldContent>
            <span className="text-sm font-medium">+${addon.price}/mo</span>
          </Field>
        </FieldLabel>
      ))}
      <div className="flex items-center justify-between border-t pt-3 text-sm">
        <span className="text-muted-foreground">Add-ons total</span>
        <span className="font-semibold">${total}/mo</span>
      </div>
    </FieldGroup>
  )
}
