"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@workspace/ui/components/pagination"

const people = [
  "Ava Lindqvist",
  "Ben Osei",
  "Cara Novak",
  "Dev Malhotra",
  "Eli Brooks",
  "Fatima Zahir",
  "Gus Moreau",
  "Hiro Tanaka",
  "Isla Grant",
  "Jae Park",
  "Kira Volkov",
  "Liam Doyle",
  "Mina Rahimi",
  "Nico Bauer",
]

const PAGE_SIZE = 4

export default function FilteredListPagination() {
  const [query, setQuery] = React.useState("")
  const [page, setPage] = React.useState(1)
  const filtered = people.filter((p) =>
    p.toLowerCase().includes(query.toLowerCase())
  )
  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="Filter teammates"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setPage(1)
          }}
        />
      </InputGroup>
      <ul className="flex min-h-28 flex-col divide-y border">
        {rows.length ? (
          rows.map((person) => (
            <li key={person} className="px-3 py-1.5 text-xs">
              {person}
            </li>
          ))
        ) : (
          <li className="p-3 text-center text-xs text-muted-foreground">
            No teammates match.
          </li>
        )}
      </ul>
      <Pagination>
        <PaginationContent>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
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
          ))}
        </PaginationContent>
      </Pagination>
    </div>
  )
}
