"use client"

import * as React from "react"

import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { Separator } from "@workspace/ui/components/separator"

const options = [
  { value: "pickup", label: "Store pickup", fee: 0 },
  { value: "courier", label: "Courier", fee: 6.5 },
  { value: "locker", label: "Parcel locker", fee: 2.99 },
]

export default function ControlledDeliverySummary() {
  const [value, setValue] = React.useState("courier")
  const selected = options.find((o) => o.value === value)
  const subtotal = 48

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <RadioGroup value={value} onValueChange={(v) => setValue(v as string)}>
        {options.map((o) => (
          <Field key={o.value} orientation="horizontal">
            <RadioGroupItem value={o.value} id={"del-" + o.value} />
            <FieldLabel htmlFor={"del-" + o.value} className="font-normal">
              {o.label}
            </FieldLabel>
            <span className="ms-auto text-sm text-muted-foreground">
              {o.fee === 0 ? "Free" : "$" + o.fee.toFixed(2)}
            </span>
          </Field>
        ))}
      </RadioGroup>
      <Separator />
      <div className="flex justify-between text-sm font-medium">
        <span>Total</span>
        <span className="tabular-nums">
          {"$" + (subtotal + (selected?.fee ?? 0)).toFixed(2)}
        </span>
      </div>
    </div>
  )
}
