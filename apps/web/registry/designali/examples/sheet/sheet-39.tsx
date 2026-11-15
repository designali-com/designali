"use client"

import * as React from "react"
import { MapPinIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

export default function ShippingAddressSheet() {
  const [submitted, setSubmitted] = React.useState(false)
  const [street, setStreet] = React.useState("")
  const invalid = submitted && !street.trim()

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        <MapPinIcon data-icon="inline-start" />
        Add shipping address
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shipping address</SheetTitle>
          <SheetDescription>Where should we send your order?</SheetDescription>
        </SheetHeader>
        <form
          className="flex flex-1 flex-col"
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <FieldGroup className="gap-4 px-4">
            <Field>
              <FieldLabel htmlFor="ship-name">Full name</FieldLabel>
              <Input id="ship-name" defaultValue="Selin Arslan" />
            </Field>
            <Field data-invalid={invalid || undefined}>
              <FieldLabel htmlFor="ship-street">Street address</FieldLabel>
              <Input
                id="ship-street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                aria-invalid={invalid || undefined}
              />
              {invalid && <FieldError>Street address is required.</FieldError>}
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="ship-city">City</FieldLabel>
                <Input id="ship-city" defaultValue="Denver" />
              </Field>
              <Field>
                <FieldLabel htmlFor="ship-zip">ZIP</FieldLabel>
                <Input id="ship-zip" defaultValue="80202" />
              </Field>
            </div>
            <Label className="gap-2 font-normal">
              <Checkbox defaultChecked />
              Use as billing address
            </Label>
          </FieldGroup>
          <SheetFooter>
            <Button type="submit">Save address</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}
