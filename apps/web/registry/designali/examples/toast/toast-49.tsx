"use client"

import { ClockIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function ProviderDefaultTimeoutToast() {
  return (
    <Toaster toastManager={notify} timeout={1500}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <div className="flex items-center gap-2 text-sm">
          <ClockIcon className="size-4 text-muted-foreground" />
          Provider timeout: <Badge variant="secondary">1500ms</Badge>
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            notify.add({
              title: "Quick heads-up",
              description: "This disappears fast.",
            })
          }
        >
          Show brief toast
        </Button>
      </div>
    </Toaster>
  )
}
