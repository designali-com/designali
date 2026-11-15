"use client"

import * as React from "react"
import { BellIcon, CheckCheckIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { cn } from "@workspace/ui/lib/utils"

const initial = [
  {
    id: 1,
    who: "Aria Bennett",
    text: "commented on Pricing v3",
    time: "2m",
    unread: true,
  },
  {
    id: 2,
    who: "Marcus Lee",
    text: "assigned you DSG-412",
    time: "1h",
    unread: true,
  },
  {
    id: 3,
    who: "Billing",
    text: "Invoice #8812 is ready",
    time: "Yesterday",
    unread: false,
  },
]

export default function NotificationInboxMenu() {
  const [items, setItems] = React.useState(initial)
  const unread = items.filter((i) => i.unread).length

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
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
          <span className="absolute -end-1 -top-1 flex size-4 items-center justify-center bg-destructive text-[10px] text-white">
            {unread}
          </span>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex items-center justify-between">
            Notifications
            <span>{unread} unread</span>
          </DropdownMenuLabel>
          {items.map((item) => (
            <DropdownMenuItem
              key={item.id}
              className="items-start"
              onClick={() =>
                setItems((prev) =>
                  prev.map((p) =>
                    p.id === item.id ? { ...p, unread: false } : p
                  )
                )
              }
            >
              <span
                className={cn(
                  "mt-1.5 size-1.5 shrink-0 rounded-full",
                  item.unread ? "bg-sky-500" : "bg-transparent"
                )}
              />
              <span className="flex-1">
                <span className="font-medium">{item.who}</span> {item.text}
              </span>
              <span className="text-muted-foreground">{item.time}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          closeOnClick={false}
          disabled={unread === 0}
          onClick={() =>
            setItems((prev) => prev.map((p) => ({ ...p, unread: false })))
          }
        >
          <CheckCheckIcon />
          Mark all as read
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
