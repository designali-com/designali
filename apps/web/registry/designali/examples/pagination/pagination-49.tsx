"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"

const slides = ["designali", "Brand identity", "UI/UX design", "Web development", "CGI & motion", "AI workflows"]

export default function SlideDeckPagination() {
  const [active, setActive] = React.useState(2)

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex aspect-video items-center justify-center border bg-muted/40">
        <span className="text-lg font-semibold">{slides[active]}</span>
      </div>
      <Pagination>
        <PaginationContent className="w-full gap-1.5 overflow-x-auto pb-1">
          {slides.map((slide, i) => (
            <PaginationItem key={slide} className="shrink-0">
              <PaginationLink
                href="#"
                isActive={i === active}
                className="h-auto w-16 flex-col items-start gap-0.5 border p-1.5 data-[active=true]:border-primary"
                onClick={(event) => {
                  event.preventDefault()
                  setActive(i)
                }}
              >
                <span className="text-[10px] text-muted-foreground">
                  {i + 1}
                </span>
                <span className="w-full truncate text-start text-[10px]">
                  {slide}
                </span>
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  )
}
