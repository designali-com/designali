"use client"

import * as React from "react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@workspace/ui/components/menubar"
import { cn } from "@workspace/ui/lib/utils"

const calendars = [
  { id: "work", label: "Work", color: "bg-sky-500" },
  { id: "personal", label: "Personal", color: "bg-emerald-500" },
  { id: "holidays", label: "Holidays", color: "bg-amber-500" },
]

export default function CalendarAppMenubar() {
  const [view, setView] = React.useState("week")
  const [shown, setShown] = React.useState<Record<string, boolean>>({
    work: true,
    personal: true,
    holidays: false,
  })

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={view} onValueChange={setView}>
              <MenubarRadioItem value="day">
                Day <MenubarShortcut>D</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="week">
                Week <MenubarShortcut>W</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="month">
                Month <MenubarShortcut>M</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>
                Go to today <MenubarShortcut>T</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Calendars</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              {calendars.map((cal) => (
                <MenubarCheckboxItem
                  key={cal.id}
                  checked={shown[cal.id]}
                  onCheckedChange={(checked) =>
                    setShown((s) => ({ ...s, [cal.id]: checked }))
                  }
                >
                  <span className={cn("size-2 rounded-full", cal.color)} />
                  {cal.label}
                </MenubarCheckboxItem>
              ))}
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem inset>New calendar...</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex items-center justify-between border px-3 py-2 text-xs">
        <span className="font-medium capitalize">{view} view</span>
        <span className="flex gap-1">
          {calendars
            .filter((cal) => shown[cal.id])
            .map((cal) => (
              <span
                key={cal.id}
                className={cn("size-2 rounded-full", cal.color)}
              />
            ))}
        </span>
      </div>
    </div>
  )
}
