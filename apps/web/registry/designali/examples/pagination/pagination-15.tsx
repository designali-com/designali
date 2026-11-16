"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Badge } from "@workspace/ui/components/badge"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"
import { cn } from "@workspace/ui/lib/utils"

const pages = [
  [
    {
      author: "Rhea",
      time: "2h ago",
      body: "The new icon search on designali.com is so much faster.",
    },
    {
      author: "Dario",
      time: "3h ago",
      body: "Can we get Figma files for the landing pages too?",
    },
  ],
  [
    {
      author: "Hana",
      time: "Yesterday",
      body: "Filed a dark mode issue on the pricing block.",
    },
    {
      author: "Owen",
      time: "Yesterday",
      body: "Thanks for shipping the Apple device mockups!",
    },
  ],
  [
    {
      author: "Lucia",
      time: "2 days ago",
      body: "First! Looking forward to the next template drop.",
    },
  ],
]

export default function CommentsThreadPagination() {
  const [page, setPage] = React.useState(0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Comments</span>
        <Badge variant="secondary">5</Badge>
      </div>
      <ul className="flex min-h-32 flex-col gap-3">
        {pages[page]!.map((comment) => (
          <li key={comment.author} className="flex gap-2">
            <Avatar size="sm">
              <AvatarFallback>
                {comment.author
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-medium">
                {comment.author}{" "}
                <span className="font-normal text-muted-foreground">
                  · {comment.time}
                </span>
              </span>
              <p className="text-xs text-muted-foreground">{comment.body}</p>
            </div>
          </li>
        ))}
      </ul>
      <Pagination>
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              text="Newer"
              aria-disabled={page === 0}
              className={cn(page === 0 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.max(0, p - 1))
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              text="Older"
              aria-disabled={page === pages.length - 1}
              className={cn(
                page === pages.length - 1 && "pointer-events-none opacity-50"
              )}
              onClick={(event) => {
                event.preventDefault()
                setPage((p) => Math.min(pages.length - 1, p + 1))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
