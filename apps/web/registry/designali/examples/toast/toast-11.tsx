"use client"

import { CopyIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()
const apiKey = "key_demo_1e8d"

export default function CopyApiKeyToast() {
  function copy() {
    void navigator.clipboard?.writeText(apiKey)
    notify.add({
      type: "success",
      title: "Copied to clipboard",
      description: "Keep this key secret.",
      timeout: 2500,
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
        <Label>Secret key</Label>
        <div className="flex items-center gap-2">
          <code className="flex h-8 min-w-0 flex-1 items-center truncate border bg-muted/40 px-2.5 font-mono text-xs">
            key_demo_••••••••1e8d
          </code>
          <Button
            variant="outline"
            size="icon"
            aria-label="Copy API key"
            onClick={copy}
          >
            <CopyIcon />
          </Button>
        </div>
      </div>
    </Toaster>
  )
}
