"use client"

import * as React from "react"
import {
  Headset as HeadsetIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function LiveSupportQueueToast() {
  const [joined, setJoined] = React.useState(false)

  function join() {
    setJoined(true)
    let position = 3
    const id = notify.add({
      type: "loading",
      title: "Waiting for Designali support",
      description: "You are #3 in line",
      timeout: 0,
    })
    const timer = setInterval(() => {
      position -= 1
      if (position === 0) {
        clearInterval(timer)
        notify.update(id, {
          type: "success",
          title: "Ali from Designali joined",
          description: "Say hello!",
          timeout: 5000,
        })
        setJoined(false)
        return
      }
      notify.update(id, { description: "You are #" + position + " in line" })
    }, 1200)
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <div className="flex items-center gap-2">
          <HeadsetIcon className="size-5" />
          <div>
            <p className="text-sm font-medium">Live chat support</p>
            <p className="text-xs text-muted-foreground">
              Average wait: 2 minutes
            </p>
          </div>
        </div>
        <Button size="sm" onClick={join} disabled={joined}>
          {joined ? "In queue..." : "Start chat"}
        </Button>
      </div>
    </Toaster>
  )
}
