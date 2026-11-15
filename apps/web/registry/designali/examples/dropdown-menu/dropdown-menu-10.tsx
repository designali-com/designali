"use client"

import * as React from "react"
import { CheckIcon, ChevronsUpDownIcon, PlusIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"
import { cn } from "@workspace/ui/lib/utils"

const workspaces = [
  { id: "acme", name: "Lumen Collective", plan: "Pro", color: "bg-violet-500" },
  {
    id: "orbit",
    name: "Orbit Analytics",
    plan: "Team",
    color: "bg-emerald-500",
  },
  { id: "side", name: "Weekend Projects", plan: "Free", color: "bg-amber-500" },
]

export default function WorkspaceSwitcherMenu() {
  const [active, setActive] = React.useState("acme")
  const current = workspaces.find((w) => w.id === active)!

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline" className="w-60 justify-start gap-2 px-2" />
        }
      >
        <span
          className={cn(
            "flex size-6 items-center justify-center text-[10px] font-semibold text-white",
            current.color
          )}
        >
          {current.name.slice(0, 2).toUpperCase()}
        </span>
        <span className="flex-1 truncate text-start">{current.name}</span>
        <ChevronsUpDownIcon className="text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Workspaces</DropdownMenuLabel>
          {workspaces.map((w, index) => (
            <DropdownMenuItem key={w.id} onClick={() => setActive(w.id)}>
              <span
                className={cn(
                  "flex size-5 items-center justify-center text-[9px] font-semibold text-white",
                  w.color
                )}
              >
                {w.name.slice(0, 2).toUpperCase()}
              </span>
              <span className="flex-1">{w.name}</span>
              {w.id === active ? (
                <CheckIcon />
              ) : (
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PlusIcon />
          Create workspace
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
