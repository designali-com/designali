"use client"

import * as React from "react"
import { HistoryIcon } from "lucide-react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"

const versions = ["2.0", "2.1", "2.2", "2.3", "2.4", "2.5"]
const notes: Record<string, string> = {
  "2.0": "New sync engine and offline mode.",
  "2.1": "Shared folders and granular permissions.",
  "2.2": "Faster search with typo tolerance.",
  "2.3": "Two-factor recovery codes.",
  "2.4": "Bulk edit for tags and owners.",
  "2.5": "Workspace analytics dashboard.",
}

export default function ReleaseHistoryPagination() {
  const [version, setVersion] = React.useState("2.5")

  return (
    <div className="flex w-full max-w-md flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <HistoryIcon className="size-4 text-muted-foreground" />
        <span className="text-sm font-medium">Release {version}</span>
      </div>
      <p className="text-xs text-muted-foreground">{notes[version]}</p>
      <Pagination>
        <PaginationContent className="flex-wrap">
          {versions.map((v) => (
            <PaginationItem key={v}>
              <PaginationLink
                href="#"
                size="sm"
                isActive={v === version}
                className="font-mono"
                onClick={(event) => {
                  event.preventDefault()
                  setVersion(v)
                }}
              >
                v{v}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  )
}
