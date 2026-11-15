"use client"

import * as React from "react"

import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function AutosaveDraftToast() {
  const [text, setText] = React.useState("")

  React.useEffect(() => {
    if (!text) return
    const handle = setTimeout(() => {
      notify.add({
        id: "autosave",
        description:
          "Draft saved - " + text.trim().split(/\s+/).length + " words",
        timeout: 1800,
      })
    }, 800)
    return () => clearTimeout(handle)
  }, [text])

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
        <Label htmlFor="release-notes">Release notes</Label>
        <Textarea
          id="release-notes"
          rows={4}
          placeholder="Start typing. Your draft saves automatically."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </Toaster>
  )
}
