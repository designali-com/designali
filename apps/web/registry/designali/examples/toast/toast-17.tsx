"use client"

import {
  CalendarDays as CalendarDaysIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

const slots = ["09:30", "11:00", "14:15", "16:45"]

export default function EventCreatedToast() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <CalendarDaysIcon className="size-4" />
          Thursday, Oct 23
        </div>
        <div className="grid grid-cols-2 gap-2">
          {slots.map((time) => (
            <Button
              key={time}
              variant="outline"
              size="sm"
              onClick={() =>
                notify.add({
                  title: "Meeting scheduled",
                  description: "Designali design sync - Thu, Oct 23 at " + time,
                  actionProps: { children: "Open" },
                })
              }
            >
              {time}
            </Button>
          ))}
        </div>
      </div>
    </Toaster>
  )
}
