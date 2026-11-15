"use client"

import * as React from "react"
import { SearchIcon, XIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

export default function ClearableSearchInput() {
  const [query, setQuery] = React.useState("quarterly report")

  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput
        aria-label="Search files"
        placeholder="Search files"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            size="icon-xs"
            aria-label="Clear search"
            onClick={() => setQuery("")}
          >
            <XIcon />
          </InputGroupButton>
        </InputGroupAddon>
      )}
    </InputGroup>
  )
}
