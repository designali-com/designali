"use client"

import * as React from "react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function BillingSameAsShipping() {
  const [same, setSame] = React.useState(true)

  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Billing address</FieldLegend>
      <Field orientation="horizontal">
        <Checkbox id="billing-same" checked={same} onCheckedChange={setSame} />
        <FieldLabel htmlFor="billing-same" className="font-normal">
          Same as shipping address
        </FieldLabel>
      </Field>
      {same ? (
        <p className="border bg-muted/40 p-3 text-xs text-muted-foreground">
          Ali Imam · Designali · billing@designali.com
        </p>
      ) : (
        <FieldGroup className="gap-3">
          <Field>
            <FieldLabel htmlFor="billing-street">Street</FieldLabel>
            <Input id="billing-street" placeholder="123 Main St" />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="billing-city">City</FieldLabel>
              <Input id="billing-city" />
            </Field>
            <Field>
              <FieldLabel htmlFor="billing-zip">ZIP</FieldLabel>
              <Input id="billing-zip" />
            </Field>
          </div>
        </FieldGroup>
      )}
    </FieldSet>
  )
}
