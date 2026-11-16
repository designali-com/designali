"use client"

import * as React from "react"
import {
  Clock as ClockIcon,
} from "@designali/icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { cn } from "@workspace/ui/lib/utils"

const statuses = [
  { value: "online", label: "Online", dot: "bg-primary" },
  { value: "away", label: "Away", dot: "bg-primary" },
  { value: "dnd", label: "Do not disturb", dot: "bg-destructive" },
  { value: "invisible", label: "Appear offline", dot: "bg-muted-foreground" },
]

export default function PresenceStatusMenu() {
  const [status, setStatus] = React.useState("online")
  const [clearAfter, setClearAfter] = React.useState("never")
  const current = statuses.find((s) => s.value === status)!

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline" className="gap-2" />}
      >
        <span className="relative">
          <Avatar size="sm">
            <AvatarImage src="/ali.jpg" alt="Ali Imam" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <span
            className={cn(
              "absolute -end-0.5 -bottom-0.5 size-2.5 rounded-full ring-2 ring-background",
              current.dot
            )}
          />
        </span>
        {current.label}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuRadioGroup value={status} onValueChange={setStatus}>
          <DropdownMenuLabel>Set status</DropdownMenuLabel>
          {statuses.map((s) => (
            <DropdownMenuRadioItem key={s.value} value={s.value}>
              <span className={cn("size-2 rounded-full", s.dot)} />
              {s.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <ClockIcon />
            Clear after
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent className="w-36">
            <DropdownMenuRadioGroup
              value={clearAfter}
              onValueChange={setClearAfter}
            >
              <DropdownMenuRadioItem value="30m">
                30 minutes
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="1h">1 hour</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="today">Today</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="never">Never</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
