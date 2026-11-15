"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { Spinner } from "@workspace/ui/components/spinner"

const actions = [
  "created a project",
  "uploaded 3 files",
  "commented on a task",
  "closed an issue",
  "updated the roadmap",
]
const people = ["Ava", "Ben", "Chloe", "Dev", "Elif"]

function makeItems(start: number, count: number) {
  return Array.from({ length: count }, (_, i) => {
    const n = start + i
    return {
      id: n,
      who: people[n % people.length]!,
      what: actions[n % actions.length]!,
      when: n + 1 + "h ago",
    }
  })
}

export default function LoadMoreAtBottom() {
  const [items, setItems] = React.useState(() => makeItems(0, 6))
  const [loading, setLoading] = React.useState(false)
  const done = items.length >= 18

  const loadMore = () => {
    setLoading(true)
    setTimeout(() => {
      setItems((prev) => [...prev, ...makeItems(prev.length, 6)])
      setLoading(false)
    }, 800)
  }

  return (
    <ScrollArea className="h-72 w-full max-w-sm border">
      <div className="flex flex-col divide-y">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 px-3 py-2.5 text-xs"
          >
            <Avatar className="size-6">
              <AvatarFallback className="text-[10px]">
                {item.who[0]}
              </AvatarFallback>
            </Avatar>
            <span className="flex-1">
              <span className="font-medium">{item.who}</span> {item.what}
            </span>
            <span className="text-muted-foreground">{item.when}</span>
          </div>
        ))}
        <div className="p-3">
          <Button
            variant="outline"
            className="w-full"
            disabled={loading || done}
            onClick={loadMore}
          >
            {loading && <Spinner data-icon="inline-start" />}
            {done
              ? "You're all caught up"
              : loading
                ? "Loading..."
                : "Load more"}
          </Button>
        </div>
      </div>
    </ScrollArea>
  )
}
