"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  ChevronsUpDown as ChevronsUpDownIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

const workspaces = [
  {
    id: "acme",
    name: "Designali Studio",
    plan: "Business",
    tone: "from-indigo-400 to-sky-400",
  },
  {
    id: "side",
    name: "Dalim Works",
    plan: "Free",
    tone: "from-amber-400 to-rose-400",
  },
  {
    id: "client",
    name: "Client projects",
    plan: "Pro",
    tone: "from-emerald-400 to-teal-400",
  },
]

export default function WorkspaceSwitcherPopover() {
  const [active, setActive] = React.useState("acme")
  const [open, setOpen] = React.useState(false)
  const current = workspaces.find((w) => w.id === active)!

  return (
    <div className="w-full max-w-[15rem]">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              className="h-auto w-full justify-start gap-2 p-2"
            />
          }
        >
          <span
            className={cn("size-7 shrink-0 bg-gradient-to-br", current.tone)}
          />
          <span className="flex min-w-0 flex-1 flex-col items-start">
            <span className="w-full truncate text-start text-xs font-medium">
              {current.name}
            </span>
            <span className="text-[11px] font-normal text-muted-foreground">
              {current.plan}
            </span>
          </span>
          <ChevronsUpDownIcon data-icon="inline-end" />
        </PopoverTrigger>
        <PopoverContent
          className="w-(--anchor-width) min-w-60 gap-1 p-1"
          align="start"
        >
          <span className="px-2 pt-1 text-[11px] text-muted-foreground">
            Workspaces
          </span>
          {workspaces.map((w) => (
            <Button
              key={w.id}
              variant="ghost"
              size="sm"
              className="justify-start"
              onClick={() => (setActive(w.id), setOpen(false))}
            >
              <span
                className={cn("size-4 shrink-0 bg-gradient-to-br", w.tone)}
              />
              <span className="flex-1 truncate text-start">{w.name}</span>
              {w.id === active && <CheckIcon />}
            </Button>
          ))}
          <Separator />
          <Button variant="ghost" size="sm" className="justify-start">
            <PlusIcon data-icon="inline-start" /> New workspace
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  )
}
