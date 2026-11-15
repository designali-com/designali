"use client"

import { DownloadIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function DownloadProgressToast() {
  function start() {
    let pct = 0
    const id = notify.add({
      type: "loading",
      title: "Exporting report",
      description: "0% complete",
      timeout: 0,
    })
    const timer = setInterval(() => {
      pct += 20
      if (pct >= 100) {
        clearInterval(timer)
        notify.update(id, {
          type: "success",
          title: "Export ready",
          description: "sales-q3.csv downloaded",
          timeout: 4000,
        })
        return
      }
      notify.update(id, { description: pct + "% complete" })
    }, 600)
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs items-center justify-between gap-3 border p-4">
        <div>
          <p className="text-sm font-medium">Q3 sales report</p>
          <p className="text-xs text-muted-foreground">CSV - approx. 2.1 MB</p>
        </div>
        <Button size="sm" onClick={start}>
          <DownloadIcon data-icon="inline-start" />
          Export
        </Button>
      </div>
    </Toaster>
  )
}
