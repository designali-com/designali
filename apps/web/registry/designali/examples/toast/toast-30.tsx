"use client"

import * as React from "react"
import {
  History as HistoryIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

const events = [
  "Ticket SUP-88 assigned to you",
  "Refund for Designali template approved",
  "New template review: 5 stars",
]

export default function ToastActivityLog() {
  const [log, setLog] = React.useState<string[]>([])
  const next = React.useRef(0)

  function push() {
    const text = events[next.current % events.length]!
    next.current += 1
    notify.add({
      title: text,
      timeout: 3000,
      onClose: () => setLog((prev) => [text, ...prev].slice(0, 4)),
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <Button size="sm" onClick={push}>
          Push notification
        </Button>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium text-muted-foreground">
            Recently dismissed
          </p>
          {log.length === 0 ? (
            <p className="text-xs text-muted-foreground">Nothing yet</p>
          ) : (
            log.map((item, i) => (
              <p key={i} className="flex items-center gap-1.5 text-xs">
                <HistoryIcon className="size-3 text-muted-foreground" />
                {item}
              </p>
            ))
          )}
        </div>
      </div>
    </Toaster>
  )
}
