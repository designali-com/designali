"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"
import { cn } from "@workspace/ui/lib/utils"

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const available = new Set([
  "A",
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "R",
  "S",
  "T",
  "V",
  "W",
])

export default function AlphabetPagination() {
  const [letter, setLetter] = React.useState("M")

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Pagination>
        <PaginationContent className="flex-wrap justify-center">
          {letters.map((l) => {
            const disabled = !available.has(l)
            return (
              <PaginationItem key={l}>
                <PaginationLink
                  href="#"
                  size="icon-xs"
                  isActive={l === letter}
                  aria-disabled={disabled}
                  className={cn(
                    "text-[11px]",
                    disabled && "pointer-events-none opacity-30"
                  )}
                  onClick={(event) => {
                    event.preventDefault()
                    setLetter(l)
                  }}
                >
                  {l}
                </PaginationLink>
              </PaginationItem>
            )
          })}
        </PaginationContent>
      </Pagination>
      <p className="text-center text-xs text-muted-foreground">
        Showing contacts starting with {letter}
      </p>
    </div>
  )
}
