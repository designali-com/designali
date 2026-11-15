"use client"

import * as React from "react"
import { FileIcon, Trash2Icon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

const initialFiles = [
  { name: "Q3-forecast.xlsx", size: "182 KB" },
  { name: "offsite-agenda.docx", size: "48 KB" },
  { name: "logo-final-v4.svg", size: "12 KB" },
]

export default function FileDeleteUndoToast() {
  const [files, setFiles] = React.useState(initialFiles)

  function remove(name: string) {
    const removed = files.find((f) => f.name === name)
    if (!removed) return
    setFiles((prev) => prev.filter((f) => f.name !== name))
    const id = notify.add({
      title: "Moved to trash",
      description: removed.name,
      timeout: 8000,
      actionProps: {
        children: "Undo",
        onClick: () => {
          setFiles((prev) => [...prev, removed])
          notify.close(id)
        },
      },
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="w-full max-w-sm border">
        <div className="border-b bg-muted/50 px-3 py-2 text-xs font-medium text-muted-foreground">
          Project files
        </div>
        {files.map((f) => (
          <div
            key={f.name}
            className="flex items-center gap-3 border-b px-3 py-2 last:border-b-0"
          >
            <FileIcon className="size-4 text-muted-foreground" />
            <span className="min-w-0 flex-1 truncate text-sm">{f.name}</span>
            <span className="text-xs text-muted-foreground">{f.size}</span>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label={"Delete " + f.name}
              onClick={() => remove(f.name)}
            >
              <Trash2Icon />
            </Button>
          </div>
        ))}
        {files.length === 0 && (
          <p className="p-4 text-center text-sm text-muted-foreground">
            No files
          </p>
        )}
      </div>
    </Toaster>
  )
}
