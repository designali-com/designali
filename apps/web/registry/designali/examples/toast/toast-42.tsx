"use client"

import * as React from "react"
import { PlayIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function FocusTimerToast() {
  const [left, setLeft] = React.useState<number | null>(null)

  const start = React.useCallback(() => setLeft(5), [])

  React.useEffect(() => {
    if (left === null) return
    const id = setTimeout(() => {
      if (left > 1) {
        setLeft(left - 1)
        return
      }
      setLeft(null)
      notify.add({
        type: "success",
        title: "Focus session complete",
        description: "Take a 5 minute break.",
        timeout: 0,
        actionProps: {
          children: "Restart",
          onClick: () => {
            notify.close()
            start()
          },
        },
      })
    }, 1000)
    return () => clearTimeout(id)
  }, [left, start])

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col items-center gap-3 border p-6">
        <span className="font-mono text-4xl tabular-nums">00:0{left ?? 5}</span>
        <Button onClick={start} disabled={left !== null}>
          <PlayIcon data-icon="inline-start" />
          {left !== null ? "Focusing..." : "Start 5s demo"}
        </Button>
      </div>
    </Toaster>
  )
}
