"use client"

import * as React from "react"
import {
  GitBranch as GitBranchIcon,
  GitBranchPlus as GitBranchPlusIcon,
} from "@designali/icons"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

const branches = [
  { name: "main", meta: "default" },
  { name: "feat/icons-v2", meta: "2 days ago" },
  { name: "fix/blocks-preview", meta: "5 hours ago" },
  { name: "chore/update-templates", meta: "last week" },
]

export default function GitBranchSwitcher() {
  const [current, setCurrent] = React.useState("feat/icons-v2")
  const [query, setQuery] = React.useState("")

  return (
    <Command className="w-full max-w-sm border">
      <CommandInput
        value={query}
        onValueChange={setQuery}
        placeholder="Switch branches..."
      />
      <CommandList>
        <CommandEmpty className="p-1">
          <button
            type="button"
            className="flex w-full items-center gap-2 px-2 py-2 text-start text-xs hover:bg-muted"
            onClick={() => {
              setCurrent(query)
              setQuery("")
            }}
          >
            <GitBranchPlusIcon className="size-4" />
            Create branch <span className="font-sans">{query}</span> from{" "}
            {current}
          </button>
        </CommandEmpty>
        <CommandGroup heading="Branches">
          {branches.map((branch) => (
            <CommandItem
              key={branch.name}
              value={branch.name}
              data-checked={branch.name === current}
              onSelect={() => setCurrent(branch.name)}
            >
              <GitBranchIcon />
              <span className="font-sans">{branch.name}</span>
              <span className="text-[11px] text-muted-foreground">
                {branch.meta}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
