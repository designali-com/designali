"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"

const results = [
  { title: "Installing @designali/icons", path: "docs / icons" },
  { title: "Using brand logos from @designali/logos", path: "docs / logos" },
  { title: "Customizing Designali blocks with Tailwind", path: "docs / blocks" },
]

export default function SearchResultsPagination() {
  const [page, setPage] = React.useState(1)

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <p className="text-xs text-muted-foreground">
        About 1,240 results for &quot;designali icons&quot;
      </p>
      <ul className="flex flex-col gap-3">
        {results.map((result) => (
          <li key={result.title} className="flex flex-col gap-0.5">
            <span className="text-[11px] text-muted-foreground">
              {result.path}
            </span>
            <a href="#" className="text-sm font-medium hover:underline">
              {result.title}
            </a>
          </li>
        ))}
      </ul>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.max(1, p - 1))
              }}
            />
          </PaginationItem>
          {[1, 2, 3, 4].map((p) => (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
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
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => p + 1)
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
