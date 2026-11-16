"use client"

import * as React from "react"
import {
  History as HistoryIcon,
} from "@designali/icons"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"

const versions = ["2.0", "2.1", "2.2", "2.3", "2.4", "2.5"]
const notes: Record<string, string> = {
  "2.0": "460+ new blocks across every category.",
  "2.1": "240 landing pages ready to ship.",
  "2.2": "2300+ UI examples on designali.com/ui.",
  "2.3": "4000+ icons in @designali/icons.",
  "2.4": "Brand logos in @designali/logos.",
  "2.5": "Apple device mockups: iPhone, iPad, MacBook.",
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
