"use client"

import * as React from "react"
import {
  History as HistoryIcon,
  Search as SearchIcon,
} from "@designali/icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

const recent = ["invoice template", "brand assets 2025", "onboarding checklist"]

export default function RecentSearchesInput() {
  const [focused, setFocused] = React.useState(false)
  const [q, setQ] = React.useState("")

  return (
    <div className="relative w-full max-w-sm">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          aria-label="Search"
          placeholder="Search Designali files"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 120)}
        />
      </InputGroup>
      {focused && !q && (
        <div className="absolute inset-x-0 top-full z-10 mt-1 border bg-popover p-1 text-sm shadow-md">
          <p className="px-2 py-1 text-xs text-muted-foreground">Recent</p>
          {recent.map((r) => (
            <button
              key={r}
              type="button"
              className="flex w-full items-center gap-2 px-2 py-1.5 text-start hover:bg-muted"
              onClick={() => setQ(r)}
            >
              <HistoryIcon className="size-3.5 text-muted-foreground" />
              {r}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
