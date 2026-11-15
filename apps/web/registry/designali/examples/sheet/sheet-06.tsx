"use client"

import * as React from "react"
import { BellIcon, CheckCheckIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { cn } from "@workspace/ui/lib/utils"

const initial = [
  {
    id: 1,
    who: "Omar Haddad",
    what: "commented on Q3 roadmap",
    when: "2m ago",
    unread: true,
  },
  {
    id: 2,
    who: "Priya Nair",
    what: "assigned you to Billing revamp",
    when: "1h ago",
    unread: true,
  },
  {
    id: 3,
    who: "Deploy bot",
    what: "finished deploying web@4.12.0",
    when: "3h ago",
    unread: false,
  },
  {
    id: 4,
    who: "Jonas Weber",
    what: "requested your review",
    when: "Yesterday",
    unread: false,
  },
]

export default function NotificationsSheet() {
  const [items, setItems] = React.useState(initial)
  const unread = items.filter((item) => item.unread).length

  return (
    <Sheet>
      <SheetTrigger
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
          <span className="absolute end-1.5 top-1.5 size-2 bg-destructive" />
        )}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            You have {unread} unread notifications.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-1 flex-col overflow-y-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className={cn(
                "flex gap-3 border-b px-4 py-3",
                item.unread && "bg-muted/50"
              )}
            >
              <Avatar size="sm">
                <AvatarFallback>
                  {item.who
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-1 flex-col">
                <span>
                  <span className="font-medium">{item.who}</span> {item.what}
                </span>
                <span className="text-muted-foreground">{item.when}</span>
              </div>
              {item.unread && (
                <span className="mt-1.5 size-2 shrink-0 bg-primary" />
              )}
            </div>
          ))}
        </div>
        <SheetFooter className="border-t">
          <Button
            variant="outline"
            disabled={unread === 0}
            onClick={() =>
              setItems((prev) =>
                prev.map((item) => ({ ...item, unread: false }))
              )
            }
          >
            <CheckCheckIcon data-icon="inline-start" />
            Mark all as read
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
