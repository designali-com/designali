"use client"

import * as React from "react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const articles = [
  { title: "Installing Designali blocks", tag: "setup" },
  { title: "Securing your designali.com account", tag: "security" },
  { title: "Understanding Designali invoices", tag: "billing" },
  { title: "Enabling two-factor login", tag: "security" },
  { title: "Using @designali/icons", tag: "setup" },
]

export default function TagFilterToggleGroup() {
  const [tags, setTags] = React.useState<string[]>(["setup", "security"])
  const visible = articles.filter(
    (a) => tags.length === 0 || tags.includes(a.tag)
  )

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <ToggleGroup
        multiple
        variant="outline"
        size="sm"
        value={tags}
        onValueChange={setTags}
      >
        <ToggleGroupItem value="setup">Setup</ToggleGroupItem>
        <ToggleGroupItem value="security">Security</ToggleGroupItem>
        <ToggleGroupItem value="billing">Billing</ToggleGroupItem>
      </ToggleGroup>
      <ul className="flex flex-col divide-y border text-sm">
        {visible.map((a) => (
          <li
            key={a.title}
            className="flex items-center justify-between px-3 py-2"
          >
            {a.title}
            <span className="text-xs text-muted-foreground capitalize">
              {a.tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
