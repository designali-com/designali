"use client"

import * as React from "react"
import { Trash2Icon, TriangleAlertIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function DeleteAccountConfirmation() {
  const [value, setValue] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border border-destructive/40 p-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-destructive">
        <TriangleAlertIcon className="size-4" />
        Delete workspace
      </div>
      <p className="text-xs text-muted-foreground">
        This permanently removes 14 projects and 2.3 GB of files. Enter the code
        we emailed to the owner to continue.
      </p>
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Button variant="destructive" disabled={value.length < 6}>
        <Trash2Icon data-icon="inline-start" />
        Delete forever
      </Button>
    </div>
  )
}
