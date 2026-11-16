"use client"

import * as React from "react"
import {
  Search as SearchIcon,
} from "@designali/icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

const allSettings = [
  { id: "spell", label: "Spell check", on: true },
  { id: "autosave", label: "Autosave drafts", on: true },
  { id: "wordwrap", label: "Word wrap", on: false },
  { id: "minimap", label: "Show minimap", on: false },
  { id: "linenumbers", label: "Line numbers", on: true },
  { id: "format", label: "Format on save", on: true },
]

export default function SearchableSettingsList() {
  const [query, setQuery] = React.useState("")
  const filtered = allSettings.filter((s) =>
    s.label.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="Search settings"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputGroup>
      <div className="divide-y border">
        {filtered.map((setting) => (
          <div
            key={setting.id}
            className="flex items-center justify-between px-3 py-2.5"
          >
            <Label htmlFor={"search-" + setting.id}>{setting.label}</Label>
            <Switch
              id={"search-" + setting.id}
              size="sm"
              defaultChecked={setting.on}
            />
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="px-3 py-6 text-center text-xs text-muted-foreground">
            No settings match &quot;{query}&quot;
          </p>
        )}
      </div>
    </div>
  )
}
