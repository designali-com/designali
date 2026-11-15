"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"
import { FingerprintIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"
import { Separator } from "@workspace/ui/components/separator"

export default function SecurityKeyFallback() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Button variant="outline">
        <FingerprintIcon data-icon="inline-start" />
        Use passkey
      </Button>
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <Separator className="flex-1" />
        or enter a code
        <Separator className="flex-1" />
      </div>
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS}
        containerClassName="justify-center"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Button>Sign in</Button>
    </div>
  )
}
