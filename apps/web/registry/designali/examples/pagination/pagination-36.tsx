"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const counts: Record<string, number> = { open: 6, closed: 3 }

export default function TabsWithPagination() {
  const [pages, setPages] = React.useState<Record<string, number>>({
    open: 1,
    closed: 1,
  })

  return (
    <Tabs defaultValue="open" className="w-full max-w-sm">
      <TabsList>
        <TabsTrigger value="open">Open</TabsTrigger>
        <TabsTrigger value="closed">Closed</TabsTrigger>
      </TabsList>
      {Object.keys(counts).map((tab) => (
        <TabsContent
          key={tab}
          value={tab}
          className="flex flex-col gap-3 border p-3"
        >
          <p className="text-xs text-muted-foreground">
            Viewing page {pages[tab]} of {counts[tab]} {tab} issues
          </p>
          <Pagination>
            <PaginationContent>
              {Array.from({ length: counts[tab]! }, (_, i) => i + 1).map(
                (p) => (
                  <PaginationItem key={p}>
                    <PaginationLink
                      href="#"
                      size="icon-sm"
                      isActive={p === pages[tab]}
                      onClick={(event) => {
                        event.preventDefault()
                        setPages((prev) => ({ ...prev, [tab]: p }))
                      }}
                    >
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
            </PaginationContent>
          </Pagination>
        </TabsContent>
      ))}
    </Tabs>
  )
}
