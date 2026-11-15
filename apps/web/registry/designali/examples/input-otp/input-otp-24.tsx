"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"
import { ShieldIcon } from "lucide-react"

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
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function EnableTwoFactorDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <ShieldIcon data-icon="inline-start" />
        Enable 2FA
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Confirm your authenticator</DialogTitle>
          <DialogDescription>
            Enter the 6-digit code from your app to finish setup.
          </DialogDescription>
        </DialogHeader>
        <InputOTP
          maxLength={6}
          pattern={REGEXP_ONLY_DIGITS}
          containerClassName="justify-center py-2"
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <Button>Enable</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
