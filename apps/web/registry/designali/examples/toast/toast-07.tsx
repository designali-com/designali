"use client"

import * as React from "react"
import { ContactIcon, RefreshCwIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"
import { cn } from "@workspace/ui/lib/utils"

const notify = createToastManager()

export default function LoadingToSuccessUpdate() {
  const [busy, setBusy] = React.useState(false)

  function sync() {
    setBusy(true)
    const id = notify.add({
      type: "loading",
      title: "Syncing contacts",
      description: "Fetching 1,284 records...",
      timeout: 0,
    })
    setTimeout(() => {
      notify.update(id, {
        type: "success",
        title: "Contacts synced",
        description: "42 new, 7 updated.",
        timeout: 4000,
      })
      setBusy(false)
    }, 2200)
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs items-center gap-3 border p-4">
        <div className="flex size-9 items-center justify-center bg-muted">
          <ContactIcon className="size-4" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">Address book</p>
          <p className="text-xs text-muted-foreground">
            Last synced 3 days ago
          </p>
        </div>
        <Button size="sm" variant="outline" onClick={sync} disabled={busy}>
          <RefreshCwIcon
            className={cn(busy && "animate-spin")}
            data-icon="inline-start"
          />
          Sync
        </Button>
      </div>
    </Toaster>
  )
}
