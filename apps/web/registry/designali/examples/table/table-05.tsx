"use client"

import * as React from "react"
import { ArrowDownIcon, ArrowUpIcon, ChevronsUpDownIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"
import { cn } from "@workspace/ui/lib/utils"

const rows = [
  { name: "Atlas", stars: 4820, updated: 3, language: "TypeScript" },
  { name: "Beacon", stars: 1290, updated: 12, language: "Go" },
  { name: "Comet", stars: 9310, updated: 1, language: "Rust" },
  { name: "Drift", stars: 560, updated: 30, language: "Python" },
]

type SortKey = "name" | "stars" | "updated"

export default function SortableColumnsTable() {
  const [sort, setSort] = React.useState<{ key: SortKey; dir: "asc" | "desc" }>(
    { key: "stars", dir: "desc" }
  )
  const sorted = [...rows].sort((a, b) => {
    const av = a[sort.key]
    const bv = b[sort.key]
    const cmp =
      typeof av === "string"
        ? av.localeCompare(bv as string)
        : (av as number) - (bv as number)
    return sort.dir === "asc" ? cmp : -cmp
  })

  function header(key: SortKey, label: string, className?: string) {
    const active = sort.key === key
    const Icon = !active
      ? ChevronsUpDownIcon
      : sort.dir === "asc"
        ? ArrowUpIcon
        : ArrowDownIcon
    return (
      <TableHead className={className}>
        <Button
          variant="ghost"
          size="xs"
          className="-ms-2"
          onClick={() =>
            setSort({
              key,
              dir: active && sort.dir === "desc" ? "asc" : "desc",
            })
          }
        >
          {label}
          <Icon
            data-icon="inline-end"
            className={cn(!active && "text-muted-foreground")}
          />
        </Button>
      </TableHead>
    )
  }

  return (
    <div className="w-full max-w-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            {header("name", "Repository")}
            <TableHead>Language</TableHead>
            {header("stars", "Stars")}
            {header("updated", "Updated")}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sorted.map((row) => (
            <TableRow key={row.name}>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell className="text-muted-foreground">
                {row.language}
              </TableCell>
              <TableCell className="tabular-nums">
                {row.stars.toLocaleString()}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {row.updated}d ago
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
