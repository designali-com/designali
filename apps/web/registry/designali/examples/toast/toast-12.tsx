"use client"

import * as React from "react"
import { WifiIcon, WifiOffIcon } from "lucide-react"

import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function ConnectionStatusToast() {
  const [online, setOnline] = React.useState(true)

  function change(next: boolean) {
    setOnline(next)
    notify.add(
      next
        ? {
            id: "connection",
            type: "success",
            title: "Back online",
            description: "Changes are syncing again.",
            timeout: 3000,
          }
        : {
            id: "connection",
            type: "warning",
            title: "You are offline",
            description: "Edits will be saved locally.",
            timeout: 0,
          }
    )
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs items-center justify-between gap-4 border p-4">
        <div className="flex items-center gap-2">
          {online ? (
            <WifiIcon className="size-4" />
          ) : (
            <WifiOffIcon className="size-4 text-muted-foreground" />
          )}
          <Label htmlFor="net">Network connection</Label>
        </div>
        <Switch id="net" checked={online} onCheckedChange={change} />
      </div>
    </Toaster>
  )
}
