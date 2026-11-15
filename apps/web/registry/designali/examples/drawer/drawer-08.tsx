"use client"

import * as React from "react"
import { BellIcon, CheckCheckIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { cn } from "@workspace/ui/lib/utils"

const initial = [
  {
    id: 1,
    who: "Rosa Lindgren",
    what: "commented on Homepage redesign",
    when: "2m",
    unread: true,
  },
  {
    id: 2,
    who: "Theo Park",
    what: "assigned you Fix checkout bug",
    when: "18m",
    unread: true,
  },
  {
    id: 3,
    who: "Billing",
    what: "Invoice INV-0042 was paid",
    when: "1h",
    unread: true,
  },
  {
    id: 4,
    who: "Nadia Haddad",
    what: "mentioned you in #design",
    when: "3h",
    unread: false,
  },
  {
    id: 5,
    who: "Ivo Petrov",
    what: "shared Q4 OKRs with you",
    when: "Yesterday",
    unread: false,
  },
]

export default function NotificationsPanelDrawer() {
  const [items, setItems] = React.useState(initial)
  const unread = items.filter((item) => item.unread).length

  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
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
          <span className="absolute -end-1 -top-1 size-2.5 rounded-full bg-destructive" />
        )}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex-row items-center justify-between">
          <div>
            <DrawerTitle>Notifications</DrawerTitle>
            <DrawerDescription>{unread} unread</DrawerDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            disabled={unread === 0}
            onClick={() =>
              setItems((current) =>
                current.map((item) => ({ ...item, unread: false }))
              )
            }
          >
            <CheckCheckIcon data-icon="inline-start" />
            Mark all read
          </Button>
        </DrawerHeader>
        <div className="flex flex-1 flex-col overflow-y-auto p-2 pt-4">
          {items.map((item) => (
            <div
              key={item.id}
              className={cn("flex gap-3 p-2", item.unread && "bg-muted/50")}
            >
              <Avatar size="sm">
                <AvatarFallback>
                  {item.who
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p>
                  <span className="font-medium">{item.who}</span> {item.what}
                </p>
                <p className="text-muted-foreground">{item.when}</p>
              </div>
              {item.unread && (
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
              )}
            </div>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
