"use client"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function PriorityAnnouncementToast() {
  return (
    <Toaster toastManager={notify}>
      <div className="grid w-full max-w-sm grid-cols-2 gap-3">
        <div className="flex flex-col gap-2 border p-3">
          <Badge variant="secondary">priority: low</Badge>
          <p className="text-xs text-muted-foreground">
            Announced politely after the current speech.
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              notify.add({
                title: "Comment added",
                description: "Jules replied on Homepage v2.",
                priority: "low",
              })
            }
          >
            Polite
          </Button>
        </div>
        <div className="flex flex-col gap-2 border p-3">
          <Badge variant="destructive">priority: high</Badge>
          <p className="text-xs text-muted-foreground">
            Interrupts assistive tech immediately.
          </p>
          <Button
            size="sm"
            variant="destructive"
            onClick={() =>
              notify.add({
                type: "error",
                title: "Payment method expired",
                description: "Update it to avoid service interruption.",
                priority: "high",
              })
            }
          >
            Urgent
          </Button>
        </div>
      </div>
    </Toaster>
  )
}
