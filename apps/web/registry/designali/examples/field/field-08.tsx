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
  { id: "backups", title: "Figma source files", hint: "Every Designali block in Figma", price: 8 },
  { id: "sso", title: "Team license", hint: "Share with your studio", price: 25 },
  {
    id: "support",
    title: "Priority support from Ali",
    hint: "Replies from support@designali.com within 4 hours",
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
        Extend your Designali Pro plan. Cancel any time.
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
