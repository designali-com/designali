"use client"

import * as React from "react"
import { CalendarPlusIcon, ClockIcon, ListIcon } from "lucide-react"

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

const busy = [3, 9, 14, 15, 22, 27]

export default function MonthDayCellMenu() {
  const [day, setDay] = React.useState(14)
  const [ooo, setOoo] = React.useState<number[]>([24, 25])

  return (
    <div className="w-full max-w-xs border p-2">
      <div className="mb-2 px-1 text-xs font-medium">November 2026</div>
      <ContextMenu>
        <ContextMenuTrigger className="grid grid-cols-7 gap-1 text-center text-[11px]">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <span key={i} className="text-muted-foreground">
              {d}
            </span>
          ))}
          {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => (
            <span
              key={d}
              onContextMenu={() => setDay(d)}
              className={cn(
                "relative flex aspect-square items-center justify-center hover:bg-muted",
                d === day &&
                  "bg-primary text-primary-foreground hover:bg-primary",
                ooo.includes(d) &&
                  d !== day &&
                  "bg-muted text-muted-foreground line-through"
              )}
            >
              {d}
              {busy.includes(d) ? (
                <span className="absolute bottom-0.5 size-1 rounded-full bg-current" />
              ) : null}
            </span>
          ))}
        </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          <ContextMenuGroup>
            <ContextMenuLabel>November {day}</ContextMenuLabel>
            <ContextMenuItem>
              <CalendarPlusIcon />
              New event
            </ContextMenuItem>
            <ContextMenuItem>
              <ClockIcon />
              Block focus time
            </ContextMenuItem>
            <ContextMenuItem disabled={!busy.includes(day)}>
              <ListIcon />
              View events
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuCheckboxItem
              checked={ooo.includes(day)}
              onCheckedChange={(checked) =>
                setOoo((list) =>
                  checked ? [...list, day] : list.filter((d) => d !== day)
                )
              }
            >
              Out of office
            </ContextMenuCheckboxItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}
