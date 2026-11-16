"use client"

import * as React from "react"
import {
  Search as SearchIcon,
} from "@designali/icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const contacts = [
  { name: "Ali Imam", company: "Designali", city: "Founder" },
  { name: "Sara Khan", company: "Brand identity", city: "Client" },
  { name: "Omar Ali", company: "Next.js website", city: "Client" },
  { name: "Priya Shah", company: "Design system", city: "Client" },
  { name: "Daniel Roy", company: "CGI & motion", city: "Client" },
]

export default function SearchFilterTable() {
  const [query, setQuery] = React.useState("")
  const q = query.trim().toLowerCase()
  const filtered = contacts.filter((c) =>
    (c.name + " " + c.company).toLowerCase().includes(q)
  )

  return (
    <div className="flex w-full max-w-lg flex-col gap-2">
      <InputGroup>
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="Search contacts"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputGroup>
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((contact) => (
              <TableRow key={contact.name}>
                <TableCell className="font-medium">{contact.name}</TableCell>
                <TableCell>{contact.company}</TableCell>
                <TableCell className="text-muted-foreground">
                  {contact.city}
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={3}
                  className="h-20 text-center text-muted-foreground"
                >
                  No contacts match &quot;{query}&quot;
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
