"use client"

import * as React from "react"
import {
  Star as StarIcon,
} from "@designali/icons"

import { Toggle } from "@workspace/ui/components/toggle"

const initial = [
  {
    id: 1,
    from: "Ali Imam",
    subject: "Brand identity proposal attached",
    starred: true,
  },
  { id: 2, from: "Billing", subject: "Your Designali receipt", starred: false },
  {
    id: 3,
    from: "Designali Studio",
    subject: "New blocks are live on designali.com",
    starred: false,
  },
]

export default function StarredEmailToggles() {
  const [mail, setMail] = React.useState(initial)
  const [onlyStarred, setOnlyStarred] = React.useState(false)
  const visible = onlyStarred ? mail.filter((m) => m.starred) : mail

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b px-3 py-1.5">
        <span className="text-xs font-medium text-muted-foreground">Inbox</span>
        <Toggle
          size="sm"
          pressed={onlyStarred}
          onPressedChange={setOnlyStarred}
        >
          <StarIcon />
          Starred only
        </Toggle>
      </div>
      {visible.map((m) => (
        <div
          key={m.id}
          className="flex items-center gap-2 border-b px-2 py-2 last:border-b-0"
        >
          <Toggle
            size="sm"
            pressed={m.starred}
            onPressedChange={(starred) =>
              setMail((prev) =>
                prev.map((x) => (x.id === m.id ? { ...x, starred } : x))
              )
            }
            aria-label="Star"
            className="aria-pressed:bg-transparent aria-pressed:text-amber-500"
          >
            <StarIcon className="group-aria-pressed/toggle:fill-current" />
          </Toggle>
          <div className="min-w-0">
            <p className="text-sm font-medium">{m.from}</p>
            <p className="truncate text-xs text-muted-foreground">
              {m.subject}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
