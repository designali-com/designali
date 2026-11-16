"use client"

import * as React from "react"
import {
  CreditCard as CreditCardIcon,
} from "@designali/icons"

import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

function formatCard(v: string) {
  return v
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim()
}
function formatExpiry(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 4)
  return d.length > 2 ? d.slice(0, 2) + "/" + d.slice(2) : d
}

export default function CardPaymentInputs() {
  const [card, setCard] = React.useState("4242 4242 4242 4242")
  const [expiry, setExpiry] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Field>
        <FieldLabel htmlFor="card-number">Card number</FieldLabel>
        <InputGroup>
          <InputGroupAddon>
            <CreditCardIcon />
          </InputGroupAddon>
          <InputGroupInput
            id="card-number"
            inputMode="numeric"
            autoComplete="cc-number"
            value={card}
            onChange={(e) => setCard(formatCard(e.target.value))}
            className="font-sans"
          />
        </InputGroup>
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field>
          <FieldLabel htmlFor="card-exp">Expiry</FieldLabel>
          <Input
            id="card-exp"
            placeholder="MM/YY"
            inputMode="numeric"
            autoComplete="cc-exp"
            value={expiry}
            onChange={(e) => setExpiry(formatExpiry(e.target.value))}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="card-cvc">CVC</FieldLabel>
          <Input
            id="card-cvc"
            placeholder="123"
            inputMode="numeric"
            maxLength={4}
            autoComplete="cc-csc"
          />
        </Field>
      </div>
    </div>
  )
}
