"use client"

import { AlarmClockIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

function remind() {
  const id = notify.add({
    type: "info",
    title: "Stand-up in 5 minutes",
    description: "Platform team - Room 4B",
    timeout: 0,
    actionProps: {
      children: "Snooze 5s",
      onClick: () => {
        notify.close(id)
        setTimeout(remind, 5000)
      },
    },
  })
}

export default function SnoozeReminderToast() {
  return (
    <Toaster toastManager={notify}>
      <Button variant="outline" onClick={remind}>
        <AlarmClockIcon data-icon="inline-start" />
        Trigger reminder
      </Button>
    </Toaster>
  )
}
