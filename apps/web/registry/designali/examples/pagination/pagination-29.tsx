"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"
import { cn } from "@workspace/ui/lib/utils"

const slides = [
  "from-primary to-chart-1",
  "from-primary to-primary",
  "from-primary to-chart-1",
  "from-primary to-primary",
  "from-chart-1 to-primary/20",
]

export default function GalleryThumbnailPagination() {
  const [index, setIndex] = React.useState(0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div
        className={cn("relative aspect-video bg-gradient-to-br", slides[index])}
      >
        <span className="absolute end-2 bottom-2 bg-background/80 px-1.5 py-0.5 text-[11px] tabular-nums">
          {index + 1} / {slides.length}
        </span>
      </div>
      <Pagination>
        <PaginationContent className="gap-1.5">
          {slides.map((tone, i) => (
            <PaginationItem key={tone}>
              <PaginationLink
                href="#"
                isActive={i === index}
                aria-label={"Show image " + (i + 1)}
                className={cn(
                  "h-9 w-12 bg-gradient-to-br p-0 opacity-60 hover:opacity-100 data-[active=true]:opacity-100 data-[active=true]:ring-2 data-[active=true]:ring-ring",
                  tone
                )}
                onClick={(event) => {
                  event.preventDefault()
                  setIndex(i)
                }}
              />
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  )
}
