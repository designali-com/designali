"use client"

import * as React from "react"
import {
  ClipboardPaste as ClipboardPasteIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@workspace/ui/components/input-otp"

export default function PasteFromClipboard() {
  const [value, setValue] = React.useState("")

  async function handlePaste() {
    try {
      const text = await navigator.clipboard.readText()
      setValue(text.replace(/\D/g, "").slice(0, 6))
    } catch {
      // Clipboard access denied; the user can still type or paste manually.
    }
  }

  return (
    <div className="flex flex-col items-center gap-3">
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
      <Button variant="outline" size="sm" onClick={handlePaste}>
        <ClipboardPasteIcon data-icon="inline-start" />
        Paste code
      </Button>
    </div>
  )
}
