"use client"

import * as React from "react"
import { BellIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { cn } from "@workspace/ui/lib/utils"

const initial = [
  { id: 1, title: "Priya commented on Pricing v2", time: "2m", unread: true },
  { id: 2, title: "Deploy to production succeeded", time: "18m", unread: true },
  { id: 3, title: "Marco invited you to Atlas", time: "1h", unread: false },
]

export default function NotificationsPopover() {
  const [items, setItems] = React.useState(initial)
  const unread = items.filter((item) => item.unread).length

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            aria-label="Notifications"
            className="relative"
          />
        }
      >
        <BellIcon />
        {unread > 0 && (
          <span className="absolute -end-1 -top-1 flex size-4 items-center justify-center bg-primary text-[10px] text-primary-foreground">
            {unread}
          </span>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-80 gap-0 p-0" align="end">
        <div className="flex items-center justify-between border-b p-2.5">
          <PopoverTitle>Notifications</PopoverTitle>
          <Button
            variant="link"
            size="xs"
            disabled={unread === 0}
            onClick={() =>
              setItems((prev) =>
                prev.map((item) => ({ ...item, unread: false }))
              )
            }
          >
            Mark all read
          </Button>
        </div>
        <ul className="flex flex-col divide-y">
          {items.map((item) => (
            <li key={item.id} className="flex items-start gap-2 p-2.5">
              <span
                className={cn(
                  "mt-1 size-1.5 shrink-0 rounded-full",
                  item.unread ? "bg-primary" : "bg-transparent"
                )}
              />
              <span className="flex-1 text-xs">{item.title}</span>
              <span className="text-[11px] text-muted-foreground">
                {item.time}
              </span>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  )
}
