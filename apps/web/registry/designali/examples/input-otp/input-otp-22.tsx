"use client"

import * as React from "react"
import {
  Delete as DeleteIcon,
  LockKeyhole as LockKeyholeIcon,
  X as XIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

export default function DoorLockKeypad() {
  const [value, setValue] = React.useState("")
  const press = (digit: string) =>
    setValue((v) => (v.length < 4 ? v + digit : v))

  return (
    <div className="flex w-full max-w-[16rem] flex-col items-center gap-4 border p-4">
      <div className="flex items-center gap-2 text-xs font-medium">
        <LockKeyholeIcon className="size-4" />
        Front door
      </div>
      <InputOTP maxLength={4} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} className="size-10 text-base" />
          <InputOTPSlot index={1} className="size-10 text-base" />
          <InputOTPSlot index={2} className="size-10 text-base" />
          <InputOTPSlot index={3} className="size-10 text-base" />
        </InputOTPGroup>
      </InputOTP>
      <div className="grid w-full grid-cols-3 gap-2">
        {keys.map((key) => (
          <Button key={key} variant="outline" onClick={() => press(key)}>
            {key}
          </Button>
        ))}
        <Button variant="ghost" aria-label="Clear" onClick={() => setValue("")}>
          <XIcon />
        </Button>
        <Button variant="outline" onClick={() => press("0")}>
          0
        </Button>
        <Button
          variant="ghost"
          aria-label="Delete"
          onClick={() => setValue((v) => v.slice(0, -1))}
        >
          <DeleteIcon />
        </Button>
      </div>
      <Button className="w-full" disabled={value.length < 4}>
        Unlock
      </Button>
    </div>
  )
}
