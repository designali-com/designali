"use client"

import * as React from "react"
import { TrophyIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"
import { cn } from "@workspace/ui/lib/utils"

const players = Array.from({ length: 30 }, (_, i) => ({
  rank: i + 1,
  name:
    ["Nova", "Pixel", "Rook", "Echo", "Sable", "Vex"][i % 6] +
    " " +
    (100 + i * 7),
  score: 9800 - i * 173,
}))

const PAGE_SIZE = 5
const MY_RANK = 23

export default function LeaderboardPagination() {
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(players.length / PAGE_SIZE)
  const rows = players.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-3">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-sm font-medium">
          <TrophyIcon className="size-4" /> Season leaderboard
        </span>
        <Button
          variant="outline"
          size="xs"
          onClick={() => setPage(Math.ceil(MY_RANK / PAGE_SIZE))}
        >
          My rank
        </Button>
      </div>
      <ol className="flex flex-col">
        {rows.map((player) => (
          <li
            key={player.rank}
            className={cn(
              "flex items-center gap-2 px-2 py-1 text-xs",
              player.rank === MY_RANK && "bg-muted font-medium"
            )}
          >
            <span className="w-5 text-muted-foreground tabular-nums">
              {player.rank}
            </span>
            <span className="flex-1">
              {player.rank === MY_RANK ? "You" : player.name}
            </span>
            <span className="tabular-nums">
              {player.score.toLocaleString()}
            </span>
          </li>
        ))}
      </ol>
      <Pagination>
        <PaginationContent>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                size="icon-sm"
                isActive={p === page}
                onClick={(event) => {
                  event.preventDefault()
                  setPage(p)
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  )
}
