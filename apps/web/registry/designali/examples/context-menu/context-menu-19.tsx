"use client"

import * as React from "react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"

const players = [
  { name: "Templates", score: 9120, joined: 3 },
  { name: "Blocks", score: 11840, joined: 1 },
  { name: "Icons", score: 7600, joined: 4 },
  { name: "Logos", score: 10230, joined: 2 },
]

export default function SortOrderRadioMenu() {
  const [sort, setSort] = React.useState("score")
  const sorted = [...players].sort((a, b) =>
    sort === "score"
      ? b.score - a.score
      : sort === "name"
        ? a.name.localeCompare(b.name)
        : a.joined - b.joined
  )

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex w-full max-w-xs flex-col border">
        <div className="flex items-center justify-between border-b px-3 py-2 text-xs">
          <span className="font-medium">Top Designali products</span>
          <span className="text-muted-foreground">by {sort}</span>
        </div>
        {sorted.map((player, index) => (
          <div
            key={player.name}
            className="flex items-center gap-2 px-3 py-1.5 text-xs"
          >
            <span className="w-4 text-muted-foreground">{index + 1}</span>
            <span className="flex-1">{player.name}</span>
            <span className="tabular-nums">
              {player.score.toLocaleString()}
            </span>
          </div>
        ))}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-44">
        <ContextMenuRadioGroup value={sort} onValueChange={setSort}>
          <ContextMenuLabel>Sort by</ContextMenuLabel>
          <ContextMenuRadioItem value="score">
            Highest score
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="name">Name (A–Z)</ContextMenuRadioItem>
          <ContextMenuRadioItem value="joined">
            First to join
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
