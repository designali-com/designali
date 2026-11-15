"use client"

import * as React from "react"
import { PlugIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function RetryOnErrorToast() {
  const attempts = React.useRef(0)

  function run() {
    attempts.current += 1
    const ok = attempts.current >= 2
    const request = new Promise<void>((resolve, reject) =>
      setTimeout(() => (ok ? resolve() : reject(new Error("timeout"))), 1200)
    )
    notify
      .promise(request, {
        loading: "Connecting to Corvia test account...",
        success: {
          title: "Connected",
          description: "Payments are ready to accept.",
        },
        error: {
          title: "Connection timed out",
          description: "Attempt " + attempts.current + " failed.",
          actionProps: { children: "Retry", onClick: run },
        },
      })
      .catch(() => {})
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs items-center gap-3 border p-4">
        <PlugIcon className="size-5 text-muted-foreground" />
        <p className="flex-1 text-sm font-medium">Payment provider</p>
        <Button
          size="sm"
          onClick={() => {
            attempts.current = 0
            run()
          }}
        >
          Connect
        </Button>
      </div>
    </Toaster>
  )
}
