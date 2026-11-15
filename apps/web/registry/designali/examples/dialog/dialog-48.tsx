"use client"

import * as React from "react"
import { CircleCheckIcon, TicketPercentIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

const validCodes: Record<string, string> = {
  WELCOME10: "10% off your first order",
  FREESHIP: "Free standard shipping",
}

export default function RedeemCouponDialog() {
  const [code, setCode] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "invalid" | "applied">(
    "idle"
  )

  function apply() {
    setStatus(validCodes[code.trim().toUpperCase()] ? "applied" : "invalid")
  }

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          setCode("")
          setStatus("idle")
        }
      }}
    >
      <DialogTrigger render={<Button variant="link" />}>
        <TicketPercentIcon data-icon="inline-start" />
        Have a promo code?
      </DialogTrigger>
      <DialogContent className="sm:max-w-xs">
        <DialogHeader>
          <DialogTitle>Redeem a code</DialogTitle>
          <DialogDescription>Try WELCOME10 or FREESHIP.</DialogDescription>
        </DialogHeader>
        <Field data-invalid={status === "invalid"}>
          <FieldLabel htmlFor="promo-code">Promo code</FieldLabel>
          <div className="flex gap-2">
            <Input
              id="promo-code"
              className="uppercase"
              value={code}
              aria-invalid={status === "invalid"}
              onChange={(event) => {
                setCode(event.target.value)
                setStatus("idle")
              }}
            />
            <Button variant="secondary" onClick={apply} disabled={!code}>
              Apply
            </Button>
          </div>
          {status === "invalid" && (
            <FieldError>That code is expired or doesn&apos;t exist.</FieldError>
          )}
          {status === "applied" && (
            <FieldDescription className="flex items-center gap-1 text-foreground">
              <CircleCheckIcon className="size-3.5" />
              {validCodes[code.trim().toUpperCase()]}
            </FieldDescription>
          )}
        </Field>
        <DialogFooter>
          <DialogClose render={<Button disabled={status !== "applied"} />}>
            Done
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
