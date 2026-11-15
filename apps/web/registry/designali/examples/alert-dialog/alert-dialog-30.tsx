"use client"

import * as React from "react"
import { LandmarkIcon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function WireTransferOtpConfirm() {
  const [code, setCode] = React.useState("")

  return (
    <AlertDialog onOpenChange={(open) => !open && setCode("")}>
      <AlertDialogTrigger render={<Button />}>
        <LandmarkIcon data-icon="inline-start" />
        Confirm wire transfer
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Send $18,000.00?</AlertDialogTitle>
          <AlertDialogDescription>
            Enter the code we sent to your phone ending in 07 to authorize this
            transfer to Brightline Supply.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex justify-center">
          <InputOTP maxLength={6} value={code} onChange={setCode}>
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
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={code.length < 6}>
            Authorize transfer
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
