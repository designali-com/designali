"use client"

import * as React from "react"
import {
  HistoryIcon,
  SparklesIcon,
  StarIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@workspace/ui/components/command"

export default function ClearableRecentSearches() {
  const [recent, setRecent] = React.useState([
    "invoice 2026-114",
    "refund policy",
    "Acme onboarding deck",
  ])

  return (
    <Command className="w-full max-w-sm border">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        {recent.length ? (
          <CommandGroup heading="Recent searches">
            {recent.map((term) => (
              <CommandItem key={term} value={term}>
                <HistoryIcon />
                <span>{term}</span>
                <button
                  type="button"
                  aria-label={"Remove " + term}
                  className="ms-auto p-0.5 text-muted-foreground hover:text-foreground"
                  onClick={(event) => {
                    event.stopPropagation()
                    setRecent((current) => current.filter((t) => t !== term))
                  }}
                >
                  <XIcon className="size-3.5" />
                </button>
              </CommandItem>
            ))}
            <CommandItem
              value="clear-recent"
              onSelect={() => setRecent([])}
              className="text-muted-foreground"
            >
              <Trash2Icon />
              <span>Clear recent searches</span>
            </CommandItem>
          </CommandGroup>
        ) : null}
        <CommandSeparator />
        <CommandGroup heading="Suggested">
          <CommandItem>
            <SparklesIcon />
            <span>What&apos;s new this month</span>
          </CommandItem>
          <CommandItem>
            <StarIcon />
            <span>Starred reports</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
