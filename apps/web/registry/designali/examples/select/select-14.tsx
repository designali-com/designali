"use client"

import * as React from "react"
import {
  Truck as TruckIcon,
} from "@designali/icons"

import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const options = [
  { label: "Standard", value: "standard", eta: "5-7 business days", price: 0 },
  { label: "Express", value: "express", eta: "2-3 business days", price: 9 },
  {
    label: "Overnight",
    value: "overnight",
    eta: "Next business day",
    price: 24,
  },
]

const subtotal = 86

export default function ShippingSpeedSelect() {
  const [speed, setSpeed] = React.useState<string | null>("standard")
  const shipping = options.find((option) => option.value === speed)?.price ?? 0

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4 text-sm">
      <Field>
        <FieldLabel htmlFor="shipping">Shipping</FieldLabel>
        <Select items={options} value={speed} onValueChange={setSpeed}>
          <SelectTrigger id="shipping" className="w-full">
            <TruckIcon className="text-muted-foreground" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {options.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                <span className="flex flex-col">
                  <span>{item.label}</span>
                  <span className="text-muted-foreground">{item.eta}</span>
                </span>
                <span className="ms-auto ps-4">
                  {item.price === 0 ? "Free" : "$" + item.price}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <div className="flex justify-between text-muted-foreground">
        <span>Subtotal</span>
        <span>{"$" + subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-muted-foreground">
        <span>Shipping</span>
        <span>{shipping === 0 ? "Free" : "$" + shipping.toFixed(2)}</span>
      </div>
      <div className="flex justify-between border-t pt-3 font-medium">
        <span>Total</span>
        <span>{"$" + (subtotal + shipping).toFixed(2)}</span>
      </div>
    </div>
  )
}
