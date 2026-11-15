"use client"

import * as React from "react"
import { PlusIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@workspace/ui/components/combobox"
import { cn } from "@workspace/ui/lib/utils"

type Workspace = { id: string; name: string; plan: string; gradient: string }

const workspaces: Workspace[] = [
  {
    id: "w1",
    name: "Northwind",
    plan: "Business",
    gradient: "from-sky-500 to-indigo-600",
  },
  {
    id: "w2",
    name: "Fernway Studio",
    plan: "Team",
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    id: "w3",
    name: "Side projects",
    plan: "Free",
    gradient: "from-amber-400 to-rose-500",
  },
]

function Monogram({ workspace }: { workspace: Workspace }) {
  return (
    <span
      className={cn(
        "flex size-5 shrink-0 items-center justify-center bg-gradient-to-br text-[10px] font-bold text-white",
        workspace.gradient
      )}
    >
      {workspace.name[0]}
    </span>
  )
}

export default function WorkspaceSwitcher() {
  const [current, setCurrent] = React.useState<Workspace | null>(workspaces[0]!)
  return (
    <Combobox
      items={workspaces}
      value={current}
      onValueChange={setCurrent}
      itemToStringLabel={(w: Workspace) => w.name}
    >
      <ComboboxTrigger
        render={
          <Button variant="ghost" className="w-56 justify-between px-2" />
        }
      >
        <span className="flex items-center gap-2">
          {current && <Monogram workspace={current} />}
          <span className="truncate font-semibold">
            {current?.name ?? "Select workspace"}
          </span>
        </span>
      </ComboboxTrigger>
      <ComboboxContent className="w-60">
        <ComboboxInput showTrigger={false} placeholder="Switch workspace" />
        <ComboboxEmpty>No workspaces found.</ComboboxEmpty>
        <ComboboxList>
          {(w: Workspace) => (
            <ComboboxItem key={w.id} value={w}>
              <Monogram workspace={w} />
              <span className="flex-1">{w.name}</span>
              <span className="text-[11px] text-muted-foreground">
                {w.plan}
              </span>
            </ComboboxItem>
          )}
        </ComboboxList>
        <div className="border-t p-1">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            <PlusIcon />
            Create workspace
          </Button>
        </div>
      </ComboboxContent>
    </Combobox>
  )
}
