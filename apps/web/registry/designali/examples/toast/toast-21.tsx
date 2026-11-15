"use client"

import * as React from "react"
import { SaveIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function KeyboardShortcutToast() {
  const save = React.useCallback(() => {
    notify.add({
      id: "saved",
      title: "Document saved",
      description: (
        <span className="inline-flex items-center gap-1">
          Tip: press <Kbd>Ctrl</Kbd>+<Kbd>S</Kbd> anytime
        </span>
      ),
      timeout: 2500,
    })
  }, [])

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
        e.preventDefault()
        save()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [save])

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col items-center gap-3 border p-4 text-center">
        <p className="text-sm text-muted-foreground">
          Press the shortcut or use the button.
        </p>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>S</Kbd>
        </KbdGroup>
        <Button variant="outline" size="sm" onClick={save}>
          <SaveIcon data-icon="inline-start" />
          Save
        </Button>
      </div>
    </Toaster>
  )
}
