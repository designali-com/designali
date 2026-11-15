"use client"

import { TimerIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function SessionExpiringToast() {
  function warn() {
    const id = notify.add({
      type: "warning",
      title: "Session expiring",
      description: "You will be signed out in 2 minutes.",
      timeout: 0,
      actionProps: {
        children: "Stay signed in",
        onClick: () =>
          notify.update(id, {
            type: "success",
            title: "Session extended",
            description: "You are good for another 30 minutes.",
            actionProps: undefined,
            timeout: 3000,
          }),
      },
    })
  }

  return (
    <Toaster toastManager={notify}>
      <Button variant="outline" onClick={warn}>
        <TimerIcon data-icon="inline-start" />
        Simulate idle timeout
      </Button>
    </Toaster>
  )
}
