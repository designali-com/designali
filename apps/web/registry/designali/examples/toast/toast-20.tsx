"use client"

import { BellIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Toaster,
  createToastManager,
  useToastManager,
} from "@workspace/ui/components/toast"

const notify = createToastManager()

function Counter() {
  const { toasts } = useToastManager()
  const open = toasts.filter((t) => t.transitionStatus !== "ending").length
  return (
    <div className="flex items-center gap-2 text-sm">
      <BellIcon className="size-4" />
      <span>Open notifications</span>
      <Badge variant={open ? "default" : "secondary"}>{open}</Badge>
    </div>
  )
}

export default function ActiveToastCounter() {
  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <Counter />
        <div className="flex gap-2">
          <Button
            size="sm"
            className="flex-1"
            onClick={() =>
              notify.add({
                title: "Build #812 passed",
                description: "main - 3m 12s",
              })
            }
          >
            Notify
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            onClick={() => notify.close()}
          >
            Clear
          </Button>
        </div>
      </div>
    </Toaster>
  )
}
