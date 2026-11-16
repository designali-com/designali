"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { Textarea } from "@workspace/ui/components/textarea"

const categories = [
  { label: "Choose a category", value: null },
  { label: "Travel", value: "travel" },
  { label: "Meals", value: "meals" },
  { label: "Software", value: "software" },
  { label: "Equipment", value: "equipment" },
]

export default function ExpenseCategorySelectField() {
  const [amount, setAmount] = React.useState("120")
  const needsNote = Number(amount) > 100

  return (
    <FieldGroup className="w-full max-w-xs gap-4">
      <Field>
        <FieldLabel htmlFor="exp-category">Category</FieldLabel>
        <Select items={categories}>
          <SelectTrigger id="exp-category" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {categories.map((c) => (
                <SelectItem key={c.label} value={c.value}>
                  {c.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
      <Field>
        <FieldLabel htmlFor="exp-amount">Amount</FieldLabel>
        <InputGroup>
          <InputGroupAddon>$</InputGroupAddon>
          <InputGroupInput
            id="exp-amount"
            inputMode="decimal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </InputGroup>
      </Field>
      {needsNote && (
        <Field>
          <FieldLabel htmlFor="exp-note">Business justification</FieldLabel>
          <Textarea
            id="exp-note"
            rows={2}
            className="resize-none"
            placeholder="Figma license for Designali studio"
          />
          <FieldDescription>Required for expenses over $100.</FieldDescription>
        </Field>
      )}
    </FieldGroup>
  )
}
