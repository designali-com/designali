"use client"

import * as React from "react"
import {
  Play as PlayIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { Textarea } from "@workspace/ui/components/textarea"

const rows = [
  { plan: "free", users: 1204 },
  { plan: "pro", users: 388 },
  { plan: "studio", users: 41 },
]

export default function SqlQueryTextarea() {
  const [ran, setRan] = React.useState(false)

  return (
    <div className="w-full max-w-md border">
      <Textarea
        spellCheck={false}
        defaultValue={
          "SELECT plan, count(*) AS users\nFROM accounts\nGROUP BY plan\nORDER BY users DESC;"
        }
        className="min-h-24 border-0 font-sans focus-visible:ring-0"
        aria-label="SQL query"
      />
      <div className="flex items-center justify-between border-y bg-muted/40 px-2 py-1">
        <span className="text-xs text-muted-foreground">
          {ran ? "3 rows · 18 ms" : "Not run yet"}
        </span>
        <Button size="xs" onClick={() => setRan(true)}>
          <PlayIcon data-icon="inline-start" />
          Run
        </Button>
      </div>
      {ran && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>plan</TableHead>
              <TableHead className="text-end">users</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.plan}>
                <TableCell className="font-sans">{r.plan}</TableCell>
                <TableCell className="text-end tabular-nums">
                  {r.users}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
