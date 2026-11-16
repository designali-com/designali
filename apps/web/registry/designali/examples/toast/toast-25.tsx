"use client"

import {
  Rocket as RocketIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

const stages = [
  { title: "Building", description: "Installing dependencies..." },
  { title: "Deploying", description: "Uploading to edge network..." },
]

export default function DeploymentPipelineToast() {
  function deploy() {
    const id = notify.add({ type: "loading", ...stages[0], timeout: 0 })
    setTimeout(() => notify.update(id, stages[1]!), 1500)
    setTimeout(
      () =>
        notify.update(id, {
          type: "success",
          title: "Live on production",
          description: "designali-web deployed in 42s",
          timeout: 5000,
          actionProps: { children: "Visit" },
        }),
      3000
    )
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-sm items-center gap-3 border p-4">
        <RocketIcon className="size-5 text-muted-foreground" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">designali-web</p>
          <p className="truncate font-mono text-xs text-muted-foreground">
            main @ 4f9c2ab
          </p>
        </div>
        <Button size="sm" onClick={deploy}>
          Deploy
        </Button>
      </div>
    </Toaster>
  )
}
