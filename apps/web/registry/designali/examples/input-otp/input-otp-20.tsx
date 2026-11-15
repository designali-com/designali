"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"
import { CreditCardIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function CardPaymentChallenge() {
  return (
    <div className="w-full max-w-sm border bg-background">
      <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-3">
        <div className="flex items-center gap-2 text-xs font-medium">
          <CreditCardIcon className="size-4" />
          Northwind Bank
        </div>
        <Badge variant="outline">Secure check</Badge>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <p className="text-xs text-muted-foreground">
          You&apos;re paying{" "}
          <span className="font-medium text-foreground">$84.20</span> to
          Fernwood Outfitters with the card ending in 1094.
        </p>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
          <InputOTPGroup>
            <InputOTPSlot index={0} className="size-9" />
            <InputOTPSlot index={1} className="size-9" />
            <InputOTPSlot index={2} className="size-9" />
            <InputOTPSlot index={3} className="size-9" />
            <InputOTPSlot index={4} className="size-9" />
            <InputOTPSlot index={5} className="size-9" />
          </InputOTPGroup>
        </InputOTP>
        <Button className="w-full">Authorize payment</Button>
        <Button variant="ghost" size="sm" className="self-center">
          Cancel and return to store
        </Button>
      </div>
    </div>
  )
}
