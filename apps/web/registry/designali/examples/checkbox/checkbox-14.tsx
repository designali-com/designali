"use client"

import * as React from "react"
import { ArchiveIcon, MailOpenIcon, Trash2Icon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { cn } from "@workspace/ui/lib/utils"

const messages = [
  { id: "1", from: "Rina Patel", subject: "Contract draft v2", time: "9:41" },
  { id: "2", from: "Billing", subject: "Your November invoice", time: "8:12" },
  {
    id: "3",
    from: "Leo Martin",
    subject: "Lunch on Thursday?",
    time: "Yesterday",
  },
  { id: "4", from: "Status Bot", subject: "Weekly uptime report", time: "Mon" },
]

export default function InboxBulkActions() {
  const [selected, setSelected] = React.useState<string[]>([])
  const all = selected.length === messages.length

  return (
    <div className="w-full max-w-md border">
      <div className="flex h-11 items-center gap-3 border-b bg-muted/40 px-3">
        <Checkbox
          aria-label="Select all messages"
          checked={all}
          indeterminate={selected.length > 0 && !all}
          onCheckedChange={(checked) =>
            setSelected(checked ? messages.map((m) => m.id) : [])
          }
          className="data-indeterminate:border-primary data-indeterminate:bg-primary data-indeterminate:text-primary-foreground"
        />
        {selected.length > 0 ? (
          <>
            <span className="text-xs font-medium">
              {selected.length} selected
            </span>
            <div className="ms-auto flex gap-1">
              <Button variant="ghost" size="icon-sm" aria-label="Archive">
                <ArchiveIcon />
              </Button>
              <Button variant="ghost" size="icon-sm" aria-label="Mark as read">
                <MailOpenIcon />
              </Button>
              <Button variant="ghost" size="icon-sm" aria-label="Delete">
                <Trash2Icon />
              </Button>
            </div>
          </>
        ) : (
          <span className="text-xs text-muted-foreground">Inbox</span>
        )}
      </div>
      {messages.map((message) => {
        const checked = selected.includes(message.id)
        return (
          <label
            key={message.id}
            className={cn(
              "flex cursor-pointer items-center gap-3 border-b px-3 py-2.5 last:border-b-0",
              checked && "bg-muted/60"
            )}
          >
            <Checkbox
              checked={checked}
              onCheckedChange={(value) =>
                setSelected((list) =>
                  value
                    ? [...list, message.id]
                    : list.filter((id) => id !== message.id)
                )
              }
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{message.from}</p>
              <p className="truncate text-xs text-muted-foreground">
                {message.subject}
              </p>
            </div>
            <span className="text-[11px] text-muted-foreground">
              {message.time}
            </span>
          </label>
        )
      })}
    </div>
  )
}
