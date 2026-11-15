"use client"

import * as React from "react"
import { ShieldCheckIcon } from "lucide-react"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

function getPages(current: number, total: number, siblings = 1) {
  const pages: (number | "ellipsis")[] = [1]
  const start = Math.max(2, current - siblings)
  const end = Math.min(total - 1, current + siblings)
  if (start > 2) pages.push("ellipsis")
  for (let i = start; i <= end; i++) pages.push(i)
  if (end < total - 1) pages.push("ellipsis")
  if (total > 1) pages.push(total)
  return pages
}

const TOTAL_EVENTS = 312
const sizes = [
  { label: "10", value: "10" },
  { label: "25", value: "25" },
  { label: "50", value: "50" },
]

export default function AuditLogPagination() {
  const [size, setSize] = React.useState(25)
  const [page, setPage] = React.useState(1)
  const pageCount = Math.ceil(TOTAL_EVENTS / size)
  const start = (page - 1) * size + 1

  return (
    <div className="flex w-full max-w-md flex-col gap-3 border p-3">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-sm font-medium">
          <ShieldCheckIcon className="size-4" /> Audit log
        </span>
        <Select
          items={sizes}
          value={String(size)}
          onValueChange={(value) => {
            setSize(Number(value))
            setPage(1)
          }}
        >
          <SelectTrigger size="sm" className="w-20" aria-label="Rows per page">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <p className="text-xs text-muted-foreground">
        Events {start}-{Math.min(start + size - 1, TOTAL_EVENTS)} of{" "}
        {TOTAL_EVENTS}
      </p>
      <Pagination>
        <PaginationContent>
          {getPages(page, pageCount).map((p, index) =>
            p === "ellipsis" ? (
              <PaginationItem key={"e" + index}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
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
            )
          )}
        </PaginationContent>
      </Pagination>
    </div>
  )
}
