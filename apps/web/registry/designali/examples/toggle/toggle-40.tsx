"use client"

import * as React from "react"
import {
  Lock as LockIcon,
  LockOpen as LockOpenIcon,
  ShieldCheck as ShieldCheckIcon,
  Shield as ShieldIcon,
} from "@designali/icons"

import { Toggle } from "@workspace/ui/components/toggle"
import { cn } from "@workspace/ui/lib/utils"

export default function EncryptionLockToggle() {
  const [encrypted, setEncrypted] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-4">
      <div
        className={cn(
          "flex size-10 shrink-0 items-center justify-center",
          encrypted
            ? "bg-emerald-500/15 text-emerald-600"
            : "bg-muted text-muted-foreground"
        )}
      >
        {encrypted ? (
          <ShieldCheckIcon className="size-5" />
        ) : (
          <ShieldIcon className="size-5" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">End-to-end encryption</p>
        <p className="text-xs text-muted-foreground">
          {encrypted
            ? "Only invited Designali clients can decrypt."
            : "Files are encrypted at rest only."}
        </p>
      </div>
      <Toggle
        variant="outline"
        pressed={encrypted}
        onPressedChange={setEncrypted}
        aria-label="End-to-end encryption"
      >
        {encrypted ? <LockIcon /> : <LockOpenIcon />}
      </Toggle>
    </div>
  )
}
