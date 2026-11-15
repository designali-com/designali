"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"
import { cn } from "@workspace/ui/lib/utils"

const shots = [
  {
    title: "Dune ridge at dawn",
    tone: "from-orange-300 via-rose-300 to-purple-400",
  },
  { title: "Glacier lagoon", tone: "from-cyan-200 via-sky-300 to-blue-500" },
  { title: "Pine valley", tone: "from-emerald-300 via-green-400 to-teal-600" },
  {
    title: "Desert bloom",
    tone: "from-yellow-200 via-amber-300 to-orange-400",
  },
]

export default function LightboxOverlayPagination() {
  const [index, setIndex] = React.useState(0)
  const shot = shots[index]!

  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] w-full max-w-sm flex-col justify-end bg-gradient-to-br p-3",
        shot.tone
      )}
    >
      <div className="flex items-center justify-between gap-2 bg-background/85 p-1.5 backdrop-blur">
        <div className="flex min-w-0 flex-col ps-1">
          <span className="truncate text-xs font-medium">{shot.title}</span>
          <span className="text-[11px] text-muted-foreground">
            {index + 1} of {shots.length}
          </span>
        </div>
        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationLink
                href="#"
                size="icon-sm"
                aria-label="Previous photo"
                onClick={(event) => {
                  event.preventDefault()
                  setIndex((i) => (i - 1 + shots.length) % shots.length)
                }}
              >
                <ChevronLeftIcon />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                size="icon-sm"
                aria-label="Next photo"
                onClick={(event) => {
                  event.preventDefault()
                  setIndex((i) => (i + 1) % shots.length)
                }}
              >
                <ChevronRightIcon />
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
