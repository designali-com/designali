"use client"

import * as React from "react"
import { FlagIcon } from "lucide-react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"
import { cn } from "@workspace/ui/lib/utils"

const answered = new Set([1, 2, 3, 5, 6, 8])
const flagged = new Set([4, 9])

export default function QuizQuestionPagination() {
  const [question, setQuestion] = React.useState(7)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-3">
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium">Question {question} of 12</span>
        <span className="text-muted-foreground">{answered.size} answered</span>
      </div>
      <Pagination>
        <PaginationContent className="grid grid-cols-6 gap-1">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((q) => (
            <PaginationItem key={q}>
              <PaginationLink
                href="#"
                size="icon-sm"
                isActive={q === question}
                className={cn(
                  "w-full",
                  answered.has(q) && q !== question && "bg-muted",
                  flagged.has(q) && "text-amber-600 dark:text-amber-400"
                )}
                onClick={(event) => {
                  event.preventDefault()
                  setQuestion(q)
                }}
              >
                {flagged.has(q) ? <FlagIcon className="size-3" /> : q}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
      <div className="flex gap-3 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="size-2 bg-muted ring-1 ring-border" /> Answered
        </span>
        <span className="flex items-center gap-1">
          <FlagIcon className="size-3 text-amber-600 dark:text-amber-400" />{" "}
          Flagged
        </span>
      </div>
    </div>
  )
}
