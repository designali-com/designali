"use client"

import * as React from "react"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@workspace/ui/components/field"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

const tiers = [
  { id: "early", name: "Early bird", price: 59, left: 12 },
  { id: "regular", name: "Regular", price: 89, left: 140 },
  { id: "vip", name: "VIP + workshop", price: 199, left: 0 },
]

export default function EventTicketTiersFieldSet() {
  const [qty, setQty] = React.useState<Record<string, number>>({
    early: 1,
    regular: 0,
    vip: 0,
  })
  const total = tiers.reduce((sum, t) => sum + t.price * (qty[t.id] ?? 0), 0)

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Tickets</FieldLegend>
      <FieldDescription>
        Designali design se code tak meetup · March 12
      </FieldDescription>
      <FieldGroup className="gap-3">
        {tiers.map((t) => (
          <Field
            key={t.id}
            orientation="horizontal"
            data-disabled={t.left === 0}
          >
            <FieldContent>
              <FieldLabel htmlFor={"tier-" + t.id}>{t.name}</FieldLabel>
              <FieldDescription>
                {"$"}
                {t.price} · {t.left === 0 ? "Sold out" : t.left + " left"}
              </FieldDescription>
            </FieldContent>
            <NativeSelect
              id={"tier-" + t.id}
              size="sm"
              disabled={t.left === 0}
              value={String(qty[t.id])}
              onChange={(e) =>
                setQty({ ...qty, [t.id]: Number(e.target.value) })
              }
              className="w-16"
            >
              {[0, 1, 2, 3, 4].map((n) => (
                <NativeSelectOption key={n} value={String(n)}>
                  {n}
                </NativeSelectOption>
              ))}
            </NativeSelect>
          </Field>
        ))}
      </FieldGroup>
      <FieldSeparator />
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">Total</span>
        <span className="text-sm font-semibold">
          {"$"}
          {total}
        </span>
      </div>
    </FieldSet>
  )
}
