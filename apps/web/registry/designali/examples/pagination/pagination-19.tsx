"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"
import { cn } from "@workspace/ui/lib/utils"

const releases = ["v3.4.0", "v3.3.2", "v3.3.1", "v3.3.0", "v3.2.0"]

export default function ChangelogNewerOlder() {
  const [index, setIndex] = React.useState(1)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <Badge variant="outline">{releases[index]}</Badge>
        {index === 0 && <Badge>Latest</Badge>}
      </div>
      <p className="text-xs text-muted-foreground">
        460+ blocks, 240 landing pages and 2300+ UI examples, now live on
        designali.com.
      </p>
      <Pagination>
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              text="Newer"
              aria-disabled={index === 0}
              className={cn(index === 0 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setIndex((i) => Math.max(0, i - 1))
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              text="Older"
              aria-disabled={index === releases.length - 1}
              className={cn(
                index === releases.length - 1 &&
                  "pointer-events-none opacity-50"
              )}
              onClick={(event) => {
                event.preventDefault()
                setIndex((i) => Math.min(releases.length - 1, i + 1))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
