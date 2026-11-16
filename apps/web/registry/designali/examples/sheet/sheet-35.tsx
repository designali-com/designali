"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  ChevronsUpDown as ChevronsUpDownIcon,
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { cn } from "@workspace/ui/lib/utils"

const workspaces = [
  {
    id: "acme",
    name: "Designali Studio",
    plan: "Enterprise",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "kite",
    name: "Dalim Works",
    plan: "Team",
    color: "from-sky-500 to-indigo-600",
  },
  {
    id: "ember",
    name: "Client projects",
    plan: "Starter",
    color: "from-amber-500 to-rose-600",
  },
]

export default function WorkspaceSwitcherSheet() {
  const [active, setActive] = React.useState("acme")
  const current = workspaces.find((w) => w.id === active)!
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" className="gap-2" />}>
        <span className={cn("size-4 bg-gradient-to-br", current.color)} />
        {current.name}
        <ChevronsUpDownIcon data-icon="inline-end" />
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle>Workspaces</SheetTitle>
          <SheetDescription>Signed in as ali@designali.com</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-1 px-2">
          {workspaces.map((w) => (
            <SheetClose
              key={w.id}
              render={
                <Button
                  variant={w.id === active ? "secondary" : "ghost"}
                  className="h-auto justify-start py-2"
                />
              }
              onClick={() => setActive(w.id)}
            >
              <span
                className={cn("size-7 shrink-0 bg-gradient-to-br", w.color)}
              />
              <span className="flex flex-1 flex-col items-start">
                <span className="font-medium">{w.name}</span>
                <span className="text-muted-foreground">{w.plan}</span>
              </span>
              {w.id === active && <CheckIcon data-icon="inline-end" />}
            </SheetClose>
          ))}
        </div>
        <SheetFooter>
          <Button variant="outline">
            <PlusIcon data-icon="inline-start" />
            Create workspace
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
