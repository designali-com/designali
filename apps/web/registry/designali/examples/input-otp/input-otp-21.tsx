"use client"

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
  Tv as TvIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function TvPairingCode() {
  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 text-center">
      <div className="flex h-20 w-32 items-center justify-center border-4 border-foreground/80 bg-gradient-to-br from-muted to-background">
        <TvIcon className="size-6 text-muted-foreground" />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-semibold">Connect your TV</h3>
        <p className="text-xs text-muted-foreground">
          Enter the code shown on your TV to sign in to Designali.
        </p>
      </div>
      <InputOTP maxLength={8} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} className="uppercase" />
          <InputOTPSlot index={1} className="uppercase" />
          <InputOTPSlot index={2} className="uppercase" />
          <InputOTPSlot index={3} className="uppercase" />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} className="uppercase" />
          <InputOTPSlot index={5} className="uppercase" />
          <InputOTPSlot index={6} className="uppercase" />
          <InputOTPSlot index={7} className="uppercase" />
        </InputOTPGroup>
      </InputOTP>
      <Button className="w-full">Pair device</Button>
    </div>
  )
}
