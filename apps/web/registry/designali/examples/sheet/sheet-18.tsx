"use client"

import * as React from "react"
import { CreditCardIcon, LockIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const methods = [
  { value: "visa", label: "Visa ending 4242", hint: "Expires 08/28" },
  { value: "mc", label: "Mastercard ending 1881", hint: "Expires 02/27" },
  { value: "new", label: "Add a new card", hint: "Credit or debit" },
]

export default function CheckoutPaymentSheet() {
  const [method, setMethod] = React.useState("visa")
  return (
    <Sheet>
      <SheetTrigger render={<Button />}>
        <CreditCardIcon data-icon="inline-start" />
        Pay $86.00
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Payment method</SheetTitle>
          <SheetDescription>Your order total is $86.00.</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <RadioGroup
            value={method}
            onValueChange={(value) => setMethod(value as string)}
          >
            {methods.map((m) => (
              <Label
                key={m.value}
                className="items-start gap-3 border p-3 font-normal has-data-checked:border-primary"
              >
                <RadioGroupItem value={m.value} />
                <span className="flex flex-col gap-0.5">
                  <span className="font-medium">{m.label}</span>
                  <span className="text-muted-foreground">{m.hint}</span>
                </span>
              </Label>
            ))}
          </RadioGroup>
          {method === "new" && (
            <div className="grid grid-cols-2 gap-3">
              <Field className="col-span-2">
                <FieldLabel htmlFor="card-number">Card number</FieldLabel>
                <Input
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  inputMode="numeric"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="card-exp">Expiry</FieldLabel>
                <Input id="card-exp" placeholder="MM/YY" />
              </Field>
              <Field>
                <FieldLabel htmlFor="card-cvc">CVC</FieldLabel>
                <Input id="card-cvc" placeholder="123" />
              </Field>
            </div>
          )}
        </div>
        <SheetFooter>
          <Button>
            <LockIcon data-icon="inline-start" />
            Pay securely
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
