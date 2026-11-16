"use client"

import * as React from "react"
import {
  Cookie as CookieIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function CookieConsentToast() {
  const [choice, setChoice] = React.useState<string | null>(null)

  function ask() {
    const id = notify.add({
      title: "We use cookies",
      description: "Only to remember your preferences. No ads, ever.",
      timeout: 0,
      onClose: () => setChoice((c) => c ?? "dismissed"),
      actionProps: {
        children: "Accept",
        onClick: () => {
          setChoice("accepted")
          notify.close(id)
        },
      },
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col items-center gap-2 border p-4 text-center">
        <CookieIcon className="size-6 text-muted-foreground" />
        <p className="text-sm">
          Consent status:{" "}
          <span className="font-medium">{choice ?? "not asked"}</span>
        </p>
        <Button size="sm" onClick={ask}>
          Show banner
        </Button>
      </div>
    </Toaster>
  )
}
