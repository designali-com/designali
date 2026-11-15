"use client"

import * as React from "react"
import { FileTextIcon, HashIcon, UserIcon } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const results = [
  { scope: "docs", label: "Release checklist", icon: FileTextIcon },
  { scope: "docs", label: "Incident runbook", icon: FileTextIcon },
  { scope: "people", label: "Hana Sato", icon: UserIcon },
  { scope: "people", label: "Marcus Bell", icon: UserIcon },
  { scope: "channels", label: "#releases", icon: HashIcon },
  { scope: "channels", label: "#on-call", icon: HashIcon },
]

export default function ScopedSearchTabs() {
  const [scope, setScope] = React.useState("all")
  const visible = results.filter((r) => scope === "all" || r.scope === scope)

  return (
    <Command className="w-full max-w-sm border">
      <CommandInput placeholder="Search everything..." />
      <div className="border-b p-1">
        <ToggleGroup
          value={[scope]}
          onValueChange={(value) => value[0] && setScope(value[0])}
          size="sm"
        >
          <ToggleGroupItem value="all">All</ToggleGroupItem>
          <ToggleGroupItem value="docs">Docs</ToggleGroupItem>
          <ToggleGroupItem value="people">People</ToggleGroupItem>
          <ToggleGroupItem value="channels">Channels</ToggleGroupItem>
        </ToggleGroup>
      </div>
      <CommandList>
        <CommandEmpty>No results in this scope.</CommandEmpty>
        <CommandGroup>
          {visible.map((r) => (
            <CommandItem key={r.label} value={r.label}>
              <r.icon />
              <span>{r.label}</span>
              <span className="ms-auto text-[11px] text-muted-foreground capitalize">
                {r.scope}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
