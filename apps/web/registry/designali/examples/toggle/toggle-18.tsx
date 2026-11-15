"use client"

import * as React from "react"
import { BookmarkIcon } from "lucide-react"

import { Toggle } from "@workspace/ui/components/toggle"

const articles = [
  { id: "a", title: "Designing calm notifications", mins: 6 },
  { id: "b", title: "A field guide to color tokens", mins: 11 },
  { id: "c", title: "Why your forms feel slow", mins: 4 },
]

export default function ArticleBookmarkToggles() {
  const [saved, setSaved] = React.useState<string[]>(["b"])

  return (
    <div className="w-full max-w-sm border">
      <div className="flex justify-between border-b bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
        <span>This week</span>
        <span>{saved.length} saved</span>
      </div>
      {articles.map((a) => (
        <div
          key={a.id}
          className="flex items-center gap-3 border-b px-3 py-2.5 last:border-b-0"
        >
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm">{a.title}</p>
            <p className="text-xs text-muted-foreground">{a.mins} min read</p>
          </div>
          <Toggle
            size="sm"
            pressed={saved.includes(a.id)}
            onPressedChange={(on) =>
              setSaved((prev) =>
                on ? [...prev, a.id] : prev.filter((x) => x !== a.id)
              )
            }
            aria-label={"Bookmark " + a.title}
          >
            <BookmarkIcon className="group-aria-pressed/toggle:fill-current" />
          </Toggle>
        </div>
      ))}
    </div>
  )
}
