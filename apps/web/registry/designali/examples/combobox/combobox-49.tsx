"use client"

import * as React from "react"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@workspace/ui/components/combobox"
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

type Currency = { code: string; symbol: string; name: string }

const currencies: Currency[] = [
  { code: "USD", symbol: "$", name: "US dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British pound" },
  { code: "JPY", symbol: "¥", name: "Japanese yen" },
  { code: "CHF", symbol: "Fr", name: "Swiss franc" },
]

export default function CurrencyAmountInput() {
  const [currency, setCurrency] = React.useState<Currency | null>(
    currencies[1]!
  )
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="amount">Amount</FieldLabel>
      <div className="flex gap-2">
        <InputGroup className="flex-1">
          <InputGroupAddon>
            <InputGroupText>{currency?.symbol ?? "?"}</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput
            id="amount"
            defaultValue="250.00"
            inputMode="decimal"
          />
        </InputGroup>
        <Combobox
          items={currencies}
          value={currency}
          onValueChange={setCurrency}
          itemToStringLabel={(c: Currency) => c.code}
        >
          <ComboboxInput className="w-24" aria-label="Currency" />
          <ComboboxContent className="w-48" align="end">
            <ComboboxEmpty>No currencies.</ComboboxEmpty>
            <ComboboxList>
              {(c: Currency) => (
                <ComboboxItem key={c.code} value={c}>
                  <span className="w-5 text-center text-muted-foreground">
                    {c.symbol}
                  </span>
                  <span className="font-medium">{c.code}</span>
                  <span className="truncate text-muted-foreground">
                    {c.name}
                  </span>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
      <FieldDescription>
        Converted at today&apos;s mid-market rate.
      </FieldDescription>
    </Field>
  )
}
