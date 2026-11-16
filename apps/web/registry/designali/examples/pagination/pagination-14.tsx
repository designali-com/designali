"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"
import { cn } from "@workspace/ui/lib/utils"

const products = [
  { name: "Portfolio Template", price: 38, tone: "from-amber-200 to-orange-300" },
  { name: "Agency Template", price: 24, tone: "from-sky-200 to-indigo-300" },
  { name: "Icons Pack", price: 29, tone: "from-rose-200 to-pink-300" },
  { name: "Logos Pack", price: 19, tone: "from-emerald-200 to-teal-300" },
  { name: "Bento Blocks", price: 42, tone: "from-violet-200 to-purple-300" },
  { name: "Marquee", price: 16, tone: "from-lime-200 to-green-300" },
  { name: "Number Counter", price: 12, tone: "from-yellow-200 to-amber-300" },
  { name: "Device Mockups", price: 34, tone: "from-cyan-200 to-sky-300" },
  { name: "Illustrations", price: 22, tone: "from-orange-200 to-red-300" },
]

const PAGE_SIZE = 3

export default function ProductGridPagination() {
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(products.length / PAGE_SIZE)
  const items = products.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="grid grid-cols-3 gap-3">
        {items.map((product) => (
          <div key={product.name} className="flex flex-col gap-1.5">
            <div
              className={cn("aspect-square bg-gradient-to-br", product.tone)}
            />
            <span className="truncate text-xs font-medium">{product.name}</span>
            <span className="text-xs text-muted-foreground">
              ${product.price}
            </span>
          </div>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              aria-disabled={page === 1}
              className={cn(page === 1 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.max(1, p - 1))
              }}
            />
          </PaginationItem>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
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
            <PaginationNext
              href="#"
              aria-disabled={page === pageCount}
              className={cn(
                page === pageCount && "pointer-events-none opacity-50"
              )}
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.min(pageCount, p + 1))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
