"use client"

import * as React from "react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Collapsible,
  CollapsibleContent,
} from "@workspace/ui/components/collapsible"
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function BillingAddressToggle() {
  const [same, setSame] = React.useState(true)
  return (
    <Collapsible
      open={!same}
      onOpenChange={(open) => setSame(!open)}
      className="w-full max-w-sm space-y-4"
    >
      <div className="flex items-center gap-2">
        <Checkbox
          id="same-address"
          checked={same}
          onCheckedChange={(checked) => setSame(checked)}
        />
        <Label htmlFor="same-address">
          Billing address is the same as studio address
        </Label>
      </div>
      <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
        <FieldGroup className="gap-3 p-px">
          <Field>
            <FieldLabel htmlFor="billing-street">Street address</FieldLabel>
            <Input id="billing-street" placeholder="Street and number" />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field>
              <FieldLabel htmlFor="billing-city">City</FieldLabel>
              <Input id="billing-city" placeholder="City" />
            </Field>
            <Field>
              <FieldLabel htmlFor="billing-zip">Postal code</FieldLabel>
              <Input id="billing-zip" placeholder="Postal code" />
            </Field>
          </div>
        </FieldGroup>
      </CollapsibleContent>
    </Collapsible>
  )
}
