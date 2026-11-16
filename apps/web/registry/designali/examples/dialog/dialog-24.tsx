"use client"

import * as React from "react"
import {
  ShieldCheck as ShieldCheckIcon,
} from "@designali/icons"

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
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

const pattern = Array.from(
  { length: 121 },
  (_, index) => (index * 37 + (index % 7) * 11) % 3 === 0
)

export default function TwoFactorSetupDialog() {
  const [code, setCode] = React.useState("")

  return (
    <Dialog onOpenChange={(open) => !open && setCode("")}>
      <DialogTrigger render={<Button variant="outline" />}>
        <ShieldCheckIcon data-icon="inline-start" />
        Enable two-factor
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Set up authenticator app</DialogTitle>
          <DialogDescription>
            Scan the code, then enter the 6-digit code it shows.
          </DialogDescription>
        </DialogHeader>
        <div
          className="mx-auto grid size-36 grid-cols-11 gap-px border bg-background p-2"
          aria-hidden="true"
        >
          {pattern.map((filled, index) => (
            <span
              key={index}
              className={filled ? "bg-foreground" : "bg-transparent"}
            />
          ))}
        </div>
        <p className="text-center font-mono text-muted-foreground">
          JBSW Y3DP EHPK 3PXP
        </p>
        <div className="flex justify-center">
          <InputOTP maxLength={6} value={code} onChange={setCode}>
            <InputOTPGroup>
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <DialogClose render={<Button disabled={code.length < 6} />}>
            Verify and enable
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
