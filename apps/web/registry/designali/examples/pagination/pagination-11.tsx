"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"

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

const TOTAL = 64

export default function JumpToPagePagination() {
  const [page, setPage] = React.useState(1)
  const [draft, setDraft] = React.useState("")
  const value = Number(draft)
  const invalid =
    draft !== "" && (!Number.isInteger(value) || value < 1 || value > TOTAL)

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3">
      <Pagination>
        <PaginationContent>
          {getPages(page, TOTAL).map((p, index) =>
            p === "ellipsis" ? (
              <PaginationItem key={"e" + index}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
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
            )
          )}
        </PaginationContent>
      </Pagination>
      <form
        className="flex items-center gap-2"
        onSubmit={(event) => {
          event.preventDefault()
          if (invalid || draft === "") return
          setPage(value)
          setDraft("")
        }}
      >
        <Label htmlFor="jump-page" className="text-xs text-muted-foreground">
          Go to
        </Label>
        <Input
          id="jump-page"
          inputMode="numeric"
          placeholder={String(page)}
          value={draft}
          aria-invalid={invalid}
          onChange={(event) => setDraft(event.target.value)}
          className="h-8 w-16"
        />
        <Button
          type="submit"
          size="sm"
          variant="outline"
          disabled={invalid || draft === ""}
        >
          Go
        </Button>
      </form>
      {invalid && (
        <p className="text-xs text-destructive">
          Enter a page between 1 and {TOTAL}.
        </p>
      )}
    </div>
  )
}
