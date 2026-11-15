"use client"

import * as React from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { ButtonGroup } from "@workspace/ui/components/button-group"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function QuantityStepperField() {
  const [qty, setQty] = React.useState(2)
  const max = 6

  return (
    <Field orientation="horizontal" className="w-full max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="ticket-qty">General admission</FieldLabel>
        <FieldDescription>$45 each · Max {max} per order</FieldDescription>
      </FieldContent>
      <ButtonGroup>
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Decrease"
          disabled={qty <= 0}
          onClick={() => setQty(qty - 1)}
        >
          <MinusIcon />
        </Button>
        <Input
          id="ticket-qty"
          inputMode="numeric"
          value={qty}
          onChange={(e) =>
            setQty(Math.min(max, Math.max(0, Number(e.target.value) || 0)))
          }
          className="h-7 w-10 text-center tabular-nums"
        />
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Increase"
          disabled={qty >= max}
          onClick={() => setQty(qty + 1)}
        >
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </Field>
  )
}
