"use client"

import * as React from "react"
import {
  CreditCard as CreditCardIcon,
  Landmark as LandmarkIcon,
  Lock as LockIcon,
  Wallet as WalletIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { Field, FieldLabel, FieldTitle } from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { Spinner } from "@workspace/ui/components/spinner"

const methods = [
  { id: "card", label: "Card ending 4417", icon: CreditCardIcon },
  { id: "wallet", label: "Digital wallet", icon: WalletIcon },
  { id: "bank", label: "Bank transfer", icon: LandmarkIcon },
]

export default function CheckoutPaymentDrawer() {
  const [open, setOpen] = React.useState(false)
  const [method, setMethod] = React.useState("card")
  const [paying, setPaying] = React.useState(false)

  function pay() {
    setPaying(true)
    window.setTimeout(() => {
      setPaying(false)
      setOpen(false)
    }, 1500)
  }

  return (
    <Drawer open={open} onOpenChange={(next) => !paying && setOpen(next)}>
      <DrawerTrigger render={<Button className="w-full max-w-xs" />}>
        Place order · $58.40
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col">
          <DrawerHeader>
            <DrawerTitle>Choose payment</DrawerTitle>
            <DrawerDescription>Order total $58.40 incl. VAT</DrawerDescription>
          </DrawerHeader>
          <RadioGroup
            value={method}
            onValueChange={(value) => setMethod(String(value))}
            className="gap-2 p-4"
            disabled={paying}
          >
            {methods.map((item) => (
              <FieldLabel key={item.id} htmlFor={"m-" + item.id}>
                <Field orientation="horizontal">
                  <item.icon className="size-4" />
                  <FieldTitle className="flex-1">{item.label}</FieldTitle>
                  <RadioGroupItem value={item.id} id={"m-" + item.id} />
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
          <DrawerFooter>
            <Button onClick={pay} disabled={paying}>
              {paying ? (
                <Spinner data-icon="inline-start" />
              ) : (
                <LockIcon data-icon="inline-start" />
              )}
              {paying ? "Processing..." : "Pay $58.40"}
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
