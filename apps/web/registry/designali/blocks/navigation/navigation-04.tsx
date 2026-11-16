"use client"

import { useState } from "react"
import {
  ArrowRight,
  Command,
  FileText,
  Search,
  Settings,
  Users,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const results = [
  {
    group: "Pages",
    items: [
      { icon: FileText, label: "Getting started with Designali", hint: "Docs" },
      { icon: FileText, label: "@designali/icons", hint: "Docs" },
      { icon: FileText, label: "Pricing", hint: "designali.com" },
    ],
  },
  {
    group: "Actions",
    items: [
      { icon: Users, label: "Invite teammates", hint: "⌘ I" },
      { icon: Settings, label: "Open settings", hint: "⌘ ," },
    ],
  },
]

export default function Navigation04() {
  const [query, setQuery] = useState("")
  const [highlight, setHighlight] = useState(0)

  const flat = results.flatMap((group) =>
    group.items
      .filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
      .map((item) => ({ ...item, group: group.group }))
  )

  return (
    <section className="w-full bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-xl px-6">
        <p className="mb-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          Press
          <kbd className="inline-flex items-center gap-1 border bg-background px-1.5 py-0.5 font-mono text-xs">
            <Command className="size-3" />K
          </kbd>
          anywhere to jump
        </p>
        <div className="border bg-background shadow-xl/5">
          <div className="flex items-center gap-3 border-b px-4">
            <Search className="size-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value)
                setHighlight(0)
              }}
              placeholder="Search Designali blocks, docs and actions..."
              className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <kbd className="border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              ESC
            </kbd>
          </div>
          <ul className="max-h-80 overflow-y-auto p-2">
            {flat.map((item, index) => (
              <li key={item.label}>
                {(index === 0 || flat[index - 1]?.group !== item.group) && (
                  <p className="px-3 pt-3 pb-1 text-xs text-muted-foreground">
                    {item.group}
                  </p>
                )}
                <a
                  href="#"
                  onMouseEnter={() => setHighlight(index)}
                  className={cn(
                    "flex h-11 items-center gap-3 px-3 text-sm",
                    highlight === index && "bg-muted"
                  )}
                >
                  <item.icon className="size-4 text-muted-foreground" />
                  {item.label}
                  <span className="ms-auto text-xs text-muted-foreground">
                    {highlight === index ? <ArrowRight className="size-3.5" /> : item.hint}
                  </span>
                </a>
              </li>
            ))}
            {flat.length === 0 && (
              <li className="px-3 py-10 text-center text-sm text-muted-foreground">
                No results for &ldquo;{query}&rdquo;
              </li>
            )}
          </ul>
          <div className="flex items-center gap-4 border-t px-4 py-2.5 text-xs text-muted-foreground">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
          </div>
        </div>
      </div>
    </section>
  )
}
