"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"

const sections = [
  "Profile",
  "Security",
  "Notifications",
  "Billing",
  "Integrations",
]

export default function VerticalPagination() {
  const [active, setActive] = React.useState(1)

  return (
    <div className="flex w-full max-w-sm gap-4 border p-3">
      <Pagination className="mx-0 w-auto">
        <PaginationContent className="flex-col items-stretch">
          {sections.map((section, i) => (
            <PaginationItem key={section}>
              <PaginationLink
                href="#"
                size="sm"
                isActive={i === active}
                className="w-full justify-start gap-2"
                onClick={(event) => {
                  event.preventDefault()
                  setActive(i)
                }}
              >
                <span className="text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
      <div className="flex flex-1 flex-col gap-1 border-s ps-4">
        <span className="text-sm font-medium">{sections[active]}</span>
        <span className="text-xs text-muted-foreground">
          Section {active + 1} of {sections.length}
        </span>
      </div>
    </div>
  )
}
