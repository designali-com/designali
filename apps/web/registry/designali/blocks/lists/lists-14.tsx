"use client"

import { useState } from "react"
import {
  ChevronUp,
  MessageCircle,
} from "@designali/icons"

import { cn } from "@workspace/ui/lib/utils"

const initial = [
  { id: 1, title: "Mobile app UI kit for iPhone and Android", tag: "UI designs", status: "Planned", votes: 412, comments: 58 },
  { id: 2, title: "Figma files for every block", tag: "Blocks", status: "In progress", votes: 367, comments: 41 },
  { id: 3, title: "More e-commerce templates", tag: "Templates", status: "Under review", votes: 298, comments: 33 },
  { id: 4, title: "Animated variants in @designali/icons", tag: "Icons", status: "Planned", votes: 254, comments: 27 },
  { id: 5, title: "Keyboard navigation in every block", tag: "Accessibility", status: "Under review", votes: 189, comments: 12 },
  { id: 6, title: "3D illustrations in @designali/vectors", tag: "Illustrations", status: "Under review", votes: 143, comments: 9 },
]

const statusTone: Record<string, string> = {
  Planned: "text-violet-700 dark:text-violet-300",
  "In progress": "text-sky-700 dark:text-sky-300",
  "Under review": "text-muted-foreground",
}

export default function Lists14() {
  const [items, setItems] = useState(initial)
  const [voted, setVoted] = useState<number[]>([])

  const vote = (id: number) => {
    const has = voted.includes(id)
    setVoted((current) => (has ? current.filter((v) => v !== id) : [...current, id]))
    setItems((current) =>
      current
        .map((item) => (item.id === id ? { ...item, votes: item.votes + (has ? -1 : 1) } : item))
        .sort((a, b) => b.votes - a.votes)
    )
  }

  return (
    <section className="w-full bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Feature requests</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Vote on what Designali builds next. Ali reviews the top requests every Monday.
            </p>
          </div>
          <a href="#" className="inline-flex h-9 items-center justify-center bg-foreground px-4 text-xs font-medium text-background hover:opacity-90">
            Suggest a feature
          </a>
        </div>

        <ul className="mt-10 divide-y divide-border border-y border-border">
          {items.map((item) => {
            const isVoted = voted.includes(item.id)
            return (
              <li key={item.id} className="flex items-center gap-4 py-4">
                <button
                  type="button"
                  aria-pressed={isVoted}
                  aria-label={`Upvote ${item.title}`}
                  onClick={() => vote(item.id)}
                  className={cn(
                    "flex w-14 shrink-0 flex-col items-center border py-2 transition-colors",
                    isVoted ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"
                  )}
                >
                  <ChevronUp className="size-4" />
                  <span className="font-mono text-xs font-semibold">{item.votes}</span>
                </button>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-medium sm:text-base">{item.title}</h3>
                  <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                    <span className="bg-muted px-1.5 py-0.5 text-muted-foreground">{item.tag}</span>
                    <span className={statusTone[item.status]}>{item.status}</span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <MessageCircle className="size-3" /> {item.comments}
                    </span>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
