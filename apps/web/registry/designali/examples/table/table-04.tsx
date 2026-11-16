"use client"

import * as React from "react"

import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const people = [
  {
    id: "u1",
    name: "Ali Imam",
    email: "ali@designali.com",
    role: "Designer",
  },
  {
    id: "u2",
    name: "Sara Khan",
    email: "sara@designali.com",
    role: "Engineer",
  },
  { id: "u3", name: "Omar Ali", email: "omar@designali.com", role: "Product" },
  {
    id: "u4",
    name: "Priya Shah",
    email: "priya@designali.com",
    role: "Engineer",
  },
]

export default function SelectableRowsTable() {
  const [selected, setSelected] = React.useState<string[]>(["u2"])
  const allSelected = selected.length === people.length
  const someSelected = selected.length > 0 && !allSelected

  return (
    <div className="flex w-full max-w-xl flex-col gap-2">
      <p className="text-xs text-muted-foreground">
        {selected.length} of {people.length} selected
      </p>
      <div className="border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-8">
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onCheckedChange={(checked) =>
                    setSelected(checked ? people.map((p) => p.id) : [])
                  }
                  aria-label="Select all"
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {people.map((person) => {
              const isSelected = selected.includes(person.id)
              return (
                <TableRow
                  key={person.id}
                  data-state={isSelected ? "selected" : undefined}
                >
                  <TableCell>
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={(checked) =>
                        setSelected((s) =>
                          checked
                            ? [...s, person.id]
                            : s.filter((id) => id !== person.id)
                        )
                      }
                      aria-label={"Select " + person.name}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{person.name}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {person.email}
                  </TableCell>
                  <TableCell>{person.role}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
