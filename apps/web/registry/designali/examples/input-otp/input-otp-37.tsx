"use client"

import * as React from "react"
import { REGEXP_ONLY_DIGITS } from "input-otp"
import {
  Ticket as TicketIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function EventCheckInDesk() {
  const [value, setValue] = React.useState("")
  const found = value === "40217"

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium">
          <TicketIcon className="size-4" />
          Check-in
        </span>
        <Badge variant="secondary">Hall B · 212 / 480</Badge>
      </div>
      <InputOTP
        maxLength={5}
        pattern={REGEXP_ONLY_DIGITS}
        value={value}
        onChange={setValue}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} className="size-11 text-lg" />
          <InputOTPSlot index={1} className="size-11 text-lg" />
          <InputOTPSlot index={2} className="size-11 text-lg" />
          <InputOTPSlot index={3} className="size-11 text-lg" />
          <InputOTPSlot index={4} className="size-11 text-lg" />
        </InputOTPGroup>
      </InputOTP>
      <div className="flex min-h-12 items-center gap-3 border border-dashed p-2 text-xs">
        {found ? (
          <>
            <Avatar size="sm">
              <AvatarImage src="/ali.jpg" alt="Ali Imam" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium">Ali Imam</p>
              <p className="text-muted-foreground">Speaker pass</p>
            </div>
            <Button size="sm">Check in</Button>
          </>
        ) : (
          <span className="text-muted-foreground">Try ticket code 40217</span>
        )}
      </div>
    </div>
  )
}
