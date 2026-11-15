"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"
import { Progress } from "@workspace/ui/components/progress"
import { cn } from "@workspace/ui/lib/utils"

const chapters = [
  "The Harbor",
  "Salt and Iron",
  "A Quiet Ledger",
  "North Wind",
  "Lanterns",
  "Homecoming",
]

export default function ChapterReaderPagination() {
  const [chapter, setChapter] = React.useState(2)
  const progress = Math.round(((chapter + 1) / chapters.length) * 100)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">
          Chapter {chapter + 1}: {chapters[chapter]}
        </span>
        <span className="text-xs text-muted-foreground tabular-nums">
          {progress}%
        </span>
      </div>
      <Progress value={progress} />
      <Pagination>
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              text="Prev chapter"
              aria-disabled={chapter === 0}
              className={cn(chapter === 0 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setChapter((c) => Math.max(0, c - 1))
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              text="Next chapter"
              aria-disabled={chapter === chapters.length - 1}
              className={cn(
                chapter === chapters.length - 1 &&
                  "pointer-events-none opacity-50"
              )}
              onClick={(event) => {
                event.preventDefault()
                setChapter((c) => Math.min(chapters.length - 1, c + 1))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
