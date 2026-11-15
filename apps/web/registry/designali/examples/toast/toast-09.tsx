"use client"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

const durations = [
  { label: "2s", value: 2000 },
  { label: "5s", value: 5000 },
  { label: "10s", value: 10000 },
  { label: "Sticky", value: 0 },
]

export default function ToastDurationPicker() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <p className="text-sm font-medium">Auto-dismiss after</p>
        <div className="grid grid-cols-4 gap-2">
          {durations.map((d) => (
            <Button
              key={d.label}
              variant="outline"
              size="sm"
              onClick={() =>
                notify.add({
                  title: "Reminder set",
                  description: d.value
                    ? "This message closes in " + d.value / 1000 + " seconds."
                    : "This message stays until you close it.",
                  timeout: d.value,
                })
              }
            >
              {d.label}
            </Button>
          ))}
        </div>
      </div>
    </Toaster>
  )
}
