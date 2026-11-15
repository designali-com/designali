"use client"

import * as React from "react"
import { HashIcon, PlusIcon, TagIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@workspace/ui/components/command"

export default function CreateFromEmptyState() {
  const [query, setQuery] = React.useState("")
  const [tags, setTags] = React.useState([
    "marketing",
    "q4-launch",
    "customer-research",
  ])

  const create = () => {
    const tag = query.trim().toLowerCase().replace(/\s+/g, "-")
    if (!tag) return
    setTags((current) => [tag, ...current])
    setQuery("")
  }

  return (
    <Command className="w-full max-w-xs border">
      <CommandInput
        value={query}
        onValueChange={setQuery}
        placeholder="Search or create tag..."
      />
      <CommandList>
        <CommandEmpty className="flex flex-col items-center gap-2 px-4 py-5">
          <TagIcon className="size-5 text-muted-foreground" />
          <span className="text-muted-foreground">
            No tag called “{query}”.
          </span>
          <Button size="sm" onClick={create}>
            <PlusIcon data-icon="inline-start" />
            Create “{query}”
          </Button>
        </CommandEmpty>
        <CommandGroup heading="Tags">
          {tags.map((tag) => (
            <CommandItem key={tag} value={tag}>
              <HashIcon />
              <span>{tag}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
