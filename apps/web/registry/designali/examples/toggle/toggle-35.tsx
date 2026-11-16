"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import { Toggle } from "@workspace/ui/components/toggle"
import { cn } from "@workspace/ui/lib/utils"

const items = [
  { text: "Ali commented on Designali brand refresh", unread: true },
  { text: "Your icon export finished", unread: false },
  { text: "A client requested access to the Figma file", unread: true },
  { text: "Weekly studio summary is ready", unread: false },
]

export default function UnreadOnlyBadgeToggle() {
  const [unreadOnly, setUnreadOnly] = React.useState(false)
  const unread = items.filter((i) => i.unread).length
  const list = unreadOnly ? items.filter((i) => i.unread) : items

  return (
    <div className="w-full max-w-sm border">
      <div className="flex items-center justify-between border-b px-3 py-1.5">
        <span className="text-sm font-medium">Notifications</span>
        <Toggle
          size="sm"
          variant="outline"
          pressed={unreadOnly}
          onPressedChange={setUnreadOnly}
        >
          Unread only
          <Badge className="ms-1 h-4 min-w-4 px-1 text-[10px]">{unread}</Badge>
        </Toggle>
      </div>
      {list.map((i) => (
        <p
          key={i.text}
          className="flex items-center gap-2 border-b px-3 py-2 text-sm last:border-b-0"
        >
          <span
            className={cn(
              "size-1.5 shrink-0 rounded-full",
              i.unread ? "bg-primary" : "bg-transparent"
            )}
          />
          {i.text}
        </p>
      ))}
    </div>
  )
}
