"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"

const scopes = ["All", "Files", "People"]

export default function ScopedSearchInput() {
  const [scope, setScope] = React.useState("All")

  return (
    <InputGroup className="w-full max-w-md">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput
        aria-label="Search"
        placeholder={
          "Search " + (scope === "All" ? "everything" : scope.toLowerCase())
        }
      />
      <InputGroupAddon align="inline-end" className="gap-0.5">
        {scopes.map((s) => (
          <InputGroupButton
            key={s}
            variant={scope === s ? "secondary" : "ghost"}
            aria-pressed={scope === s}
            onClick={() => setScope(s)}
          >
            {s}
          </InputGroupButton>
        ))}
      </InputGroupAddon>
    </InputGroup>
  )
}
