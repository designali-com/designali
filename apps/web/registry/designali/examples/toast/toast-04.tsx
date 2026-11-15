"use client"

import * as React from "react"
import { ArchiveIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

const initialThreads = [
  { id: "t1", from: "Priya Raman", subject: "Q3 roadmap review notes" },
  { id: "t2", from: "Jonas Weber", subject: "Invoice #4821 is ready" },
  { id: "t3", from: "Lena Ortiz", subject: "Design crit moved to Thursday" },
]

export default function UndoArchiveToast() {
  const [threads, setThreads] = React.useState(initialThreads)

  function archive(id: string) {
    const index = threads.findIndex((t) => t.id === id)
    const thread = threads[index]
    if (!thread) return
    setThreads((prev) => prev.filter((t) => t.id !== id))
    const toastId = notify.add({
      title: "Conversation archived",
      description: thread.subject,
      actionProps: {
        children: "Undo",
        onClick: () => {
          setThreads((prev) => {
            const next = [...prev]
            next.splice(index, 0, thread)
            return next
          })
          notify.close(toastId)
        },
      },
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="w-full max-w-sm border">
        {threads.length === 0 ? (
          <p className="p-6 text-center text-sm text-muted-foreground">
            Inbox zero. Nice work.
          </p>
        ) : (
          threads.map((t) => (
            <div
              key={t.id}
              className="flex items-center gap-3 border-b px-3 py-2.5 last:border-b-0"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{t.from}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {t.subject}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Archive"
                onClick={() => archive(t.id)}
              >
                <ArchiveIcon />
              </Button>
            </div>
          ))
        )}
      </div>
    </Toaster>
  )
}
