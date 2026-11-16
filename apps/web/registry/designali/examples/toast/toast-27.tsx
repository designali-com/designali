"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

const tickets = [
  { id: "SUP-201", title: "Cannot download template ZIP" },
  { id: "SUP-202", title: "Invoice for blocks shows wrong VAT" },
  { id: "SUP-203", title: "Icons export stuck at 90%" },
  { id: "SUP-204", title: "Feature request: more logos" },
]

export default function BulkActionToast() {
  const [selected, setSelected] = React.useState<string[]>([])

  function resolve() {
    notify.add({
      type: "success",
      title:
        selected.length +
        (selected.length === 1 ? " ticket resolved" : " tickets resolved"),
      description: selected.join(", "),
    })
    setSelected([])
  }

  return (
    <Toaster toastManager={notify}>
      <div className="w-full max-w-sm border">
        {tickets.map((t) => (
          <label
            key={t.id}
            className="flex items-center gap-3 border-b px-3 py-2 text-sm last:border-b-0"
          >
            <Checkbox
              checked={selected.includes(t.id)}
              onCheckedChange={(checked) =>
                setSelected((prev) =>
                  checked ? [...prev, t.id] : prev.filter((x) => x !== t.id)
                )
              }
            />
            <span className="font-sans text-xs text-muted-foreground">
              {t.id}
            </span>
            <span className="truncate">{t.title}</span>
          </label>
        ))}
        <div className="flex justify-end bg-muted/40 p-2">
          <Button size="sm" disabled={!selected.length} onClick={resolve}>
            Resolve selected
          </Button>
        </div>
      </div>
    </Toaster>
  )
}
