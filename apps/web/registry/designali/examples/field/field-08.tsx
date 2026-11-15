"use client"

import * as React from "react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@workspace/ui/components/field"

const addons = [
  { id: "backups", title: "Daily backups", hint: "30-day retention", price: 8 },
  { id: "sso", title: "Single sign-on", hint: "SAML and SCIM", price: 25 },
  {
    id: "support",
    title: "Priority support",
    hint: "4-hour response time",
    price: 40,
  },
]

export default function AddOnCheckboxCards() {
  const [selected, setSelected] = React.useState<string[]>(["backups"])
  const total = addons
    .filter((a) => selected.includes(a.id))
    .reduce((sum, a) => sum + a.price, 0)

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Add-ons</FieldLegend>
      <FieldDescription>
        Extend your workspace. Cancel any time.
      </FieldDescription>
      <FieldGroup className="gap-2">
        {addons.map((a) => (
          <FieldLabel key={a.id} htmlFor={"addon-" + a.id}>
            <Field orientation="horizontal">
              <Checkbox
                id={"addon-" + a.id}
                checked={selected.includes(a.id)}
                onCheckedChange={(checked) =>
                  setSelected((prev) =>
                    checked ? [...prev, a.id] : prev.filter((x) => x !== a.id)
                  )
                }
              />
              <FieldContent>
                <FieldTitle>{a.title}</FieldTitle>
                <FieldDescription>{a.hint}</FieldDescription>
              </FieldContent>
              <span className="text-xs font-medium tabular-nums">
                +{"$"}
                {a.price}
              </span>
            </Field>
          </FieldLabel>
        ))}
      </FieldGroup>
      <p className="text-end text-xs text-muted-foreground">
        Add-ons total:{" "}
        <span className="font-medium text-foreground">
          {"$"}
          {total}/mo
        </span>
      </p>
    </FieldSet>
  )
}
