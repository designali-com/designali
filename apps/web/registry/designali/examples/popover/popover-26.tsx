"use client"

import * as React from "react"
import { CheckIcon, PlusIcon, TagIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

export default function TagPickerPopover() {
  const [tags, setTags] = React.useState([
    "design",
    "frontend",
    "bug",
    "research",
    "copy",
    "urgent",
  ])
  const [selected, setSelected] = React.useState<string[]>(["frontend"])
  const [query, setQuery] = React.useState("")
  const filtered = tags.filter((t) => t.includes(query.toLowerCase()))
  const canCreate =
    query.trim() !== "" && !tags.includes(query.trim().toLowerCase())

  const toggle = (tag: string) =>
    setSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )

  return (
    <div className="flex w-full max-w-xs flex-wrap items-center gap-1.5">
      {selected.map((tag) => (
        <Badge key={tag} variant="secondary">
          {tag}
        </Badge>
      ))}
      <Popover>
        <PopoverTrigger render={<Button variant="outline" size="xs" />}>
          <TagIcon data-icon="inline-start" /> Add tag
        </PopoverTrigger>
        <PopoverContent className="w-56 gap-1.5 p-1.5" align="start">
          <Input
            placeholder="Search or create..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-7"
          />
          <div className="flex max-h-40 flex-col overflow-y-auto">
            {filtered.map((tag) => (
              <Button
                key={tag}
                variant="ghost"
                size="sm"
                className="justify-between"
                onClick={() => toggle(tag)}
              >
                {tag}
                {selected.includes(tag) && <CheckIcon />}
              </Button>
            ))}
            {canCreate && (
              <Button
                variant="ghost"
                size="sm"
                className="justify-start"
                onClick={() => {
                  const tag = query.trim().toLowerCase()
                  setTags((prev) => [...prev, tag])
                  setSelected((prev) => [...prev, tag])
                  setQuery("")
                }}
              >
                <PlusIcon data-icon="inline-start" /> Create &quot;
                {query.trim()}&quot;
              </Button>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
