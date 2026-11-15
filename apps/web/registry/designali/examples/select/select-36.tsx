"use client"

import * as React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const pageSizes = [
  { label: "10", value: "10" },
  { label: "25", value: "25" },
  { label: "50", value: "50" },
  { label: "100", value: "100" },
]

const total = 248

export default function RowsPerPageSelect() {
  const [size, setSize] = React.useState<string | null>("25")
  const [page, setPage] = React.useState(1)
  const perPage = Number(size ?? 25)
  const pages = Math.ceil(total / perPage)

  return (
    <div className="flex w-full max-w-md flex-wrap items-center justify-between gap-3 border-t pt-3 text-xs">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">Rows per page</span>
        <Select
          items={pageSizes}
          value={size}
          onValueChange={(next) => {
            setSize(next)
            setPage(1)
          }}
        >
          <SelectTrigger size="sm" className="w-16" aria-label="Rows per page">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {pageSizes.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground tabular-nums">
          Page {page} of {pages}
        </span>
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Previous page"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Next page"
          disabled={page === pages}
          onClick={() => setPage(page + 1)}
        >
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  )
}
