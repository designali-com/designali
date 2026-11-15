"use client"

import * as React from "react"
import { QuoteIcon } from "lucide-react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"
import { cn } from "@workspace/ui/lib/utils"

const quotes = [
  {
    text: "We closed our books two days faster.",
    who: "Farah Idris, Finance Lead",
  },
  {
    text: "Onboarding new hires is finally painless.",
    who: "Mateo Silva, Ops Manager",
  },
  {
    text: "The reports basically write themselves.",
    who: "Grace Liu, Analyst",
  },
  {
    text: "Support answers within minutes, every time.",
    who: "Ben Adler, Founder",
  },
]

export default function DotsPagination() {
  const [index, setIndex] = React.useState(0)

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 border p-5 text-center">
      <QuoteIcon className="size-5 text-muted-foreground" />
      <p className="text-sm">{quotes[index]!.text}</p>
      <span className="text-xs text-muted-foreground">
        {quotes[index]!.who}
      </span>
      <Pagination>
        <PaginationContent className="gap-1">
          {quotes.map((quote, i) => (
            <PaginationItem key={quote.who}>
              <PaginationLink
                href="#"
                size="icon-xs"
                isActive={i === index}
                aria-label={"Show testimonial " + (i + 1)}
                className="border-0 hover:bg-transparent"
                onClick={(event) => {
                  event.preventDefault()
                  setIndex(i)
                }}
              >
                <span
                  className={cn(
                    "block size-1.5 rounded-full bg-muted-foreground/40 transition-all",
                    i === index && "w-4 bg-foreground"
                  )}
                />
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  )
}
