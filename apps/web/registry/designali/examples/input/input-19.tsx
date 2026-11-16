"use client"

import * as React from "react"
import {
  Minus as MinusIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function QuantityStepperInput() {
  const [qty, setQty] = React.useState(2)
  const clamp = (n: number) => Math.min(10, Math.max(1, n))

  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="qty">Seats</FieldLabel>
      <div className="flex">
        <Button
          variant="outline"
          size="icon"
          aria-label="Decrease"
          disabled={qty <= 1}
          onClick={() => setQty((q) => clamp(q - 1))}
        >
          <MinusIcon />
        </Button>
        <Input
          id="qty"
          type="number"
          min={1}
          max={10}
          value={qty}
          onChange={(e) => setQty(clamp(Number(e.target.value) || 1))}
          className="w-14 [appearance:textfield] border-x-0 text-center tabular-nums [&::-webkit-inner-spin-button]:appearance-none"
        />
        <Button
          variant="outline"
          size="icon"
          aria-label="Increase"
          disabled={qty >= 10}
          onClick={() => setQty((q) => clamp(q + 1))}
        >
          <PlusIcon />
        </Button>
      </div>
      <FieldDescription>Up to 10 seats on the Team plan.</FieldDescription>
    </Field>
  )
}
