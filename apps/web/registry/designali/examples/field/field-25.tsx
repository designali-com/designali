"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@workspace/ui/components/input-group"

export default function TransferAmountField() {
  const [amount, setAmount] = React.useState("1200")
  const value = Number(amount) || 0
  const fee = Math.max(0.5, value * 0.004)

  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="transfer-amount">Pay Designali studio deposit</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>€</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          id="transfer-amount"
          inputMode="decimal"
          value={amount}
          onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ""))}
          className="text-base font-semibold tabular-nums"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupText>EUR</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>
        Fee €{fee.toFixed(2)} · Designali receives €
        {Math.max(0, value - fee).toFixed(2)}
      </FieldDescription>
    </Field>
  )
}
