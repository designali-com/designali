"use client"

import { BellRingIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

const alerts = [
  "Disk usage on db-primary is above 85%",
  "SSL certificate for status page expires in 6 days",
  "3 background jobs failed in the last hour",
]

export default function PersistentToastDismissAll() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button
          variant="outline"
          onClick={() =>
            alerts.forEach((text) =>
              notify.add({
                type: "warning",
                title: "Needs attention",
                description: text,
                timeout: 0,
              })
            )
          }
        >
          <BellRingIcon data-icon="inline-start" />
          Show alerts
        </Button>
        <Button variant="ghost" onClick={() => notify.close()}>
          Dismiss all
        </Button>
      </div>
    </Toaster>
  )
}
