"use client"

import * as React from "react"
import {
  Trash2 as Trash2Icon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"

export default function HoldToConfirmButton() {
  const [progress, setProgress] = React.useState(0)
  const [done, setDone] = React.useState(false)
  const timer = React.useRef<ReturnType<typeof setInterval> | null>(null)

  function start() {
    if (done) return
    timer.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          stop()
          setDone(true)
          return 100
        }
        return p + 5
      })
    }, 50)
  }

  function stop() {
    if (timer.current) clearInterval(timer.current)
    timer.current = null
  }

  function cancel() {
    stop()
    if (!done) setProgress(0)
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        variant="destructive"
        className="relative w-48 overflow-hidden"
        onPointerDown={start}
        onPointerUp={cancel}
        onPointerLeave={cancel}
      >
        <span
          className="absolute inset-y-0 left-0 bg-destructive/25"
          style={{ width: progress + "%" }}
        />
        <span className="relative flex items-center gap-1.5">
          <Trash2Icon className="size-4" />
          {done ? "Account deleted" : "Hold to delete"}
        </span>
      </Button>
      {done && (
        <Button
          variant="link"
          size="xs"
          onClick={() => {
            setDone(false)
            setProgress(0)
          }}
        >
          Undo
        </Button>
      )}
    </div>
  )
}
