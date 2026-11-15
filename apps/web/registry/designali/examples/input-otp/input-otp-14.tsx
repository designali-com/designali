"use client"

import { REGEXP_ONLY_CHARS } from "input-otp"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function LettersOnlyRoomCode() {
  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-4 text-center">
      <div className="space-y-1">
        <h3 className="text-sm font-semibold">Join a quiz</h3>
        <p className="text-xs text-muted-foreground">
          Enter the 5-letter room code on the host&apos;s screen.
        </p>
      </div>
      <InputOTP maxLength={5} pattern={REGEXP_ONLY_CHARS} inputMode="text">
        <InputOTPGroup>
          <InputOTPSlot index={0} className="size-10 text-base uppercase" />
          <InputOTPSlot index={1} className="size-10 text-base uppercase" />
          <InputOTPSlot index={2} className="size-10 text-base uppercase" />
          <InputOTPSlot index={3} className="size-10 text-base uppercase" />
          <InputOTPSlot index={4} className="size-10 text-base uppercase" />
        </InputOTPGroup>
      </InputOTP>
      <Button className="w-full">
        Join room
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  )
}
