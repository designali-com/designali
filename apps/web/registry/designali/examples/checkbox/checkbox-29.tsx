"use client"

import * as React from "react"
import { Columns3Icon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table"

const columns = ["Customer", "Plan", "MRR", "Status"] as const
const rows = [
  { Customer: "Bluebird Co", Plan: "Team", MRR: "$480", Status: "Active" },
  {
    Customer: "Kestrel Labs",
    Plan: "Business",
    MRR: "$1,250",
    Status: "Trial",
  },
  { Customer: "Mosaic Inc", Plan: "Starter", MRR: "$0", Status: "Churned" },
]

export default function ColumnVisibilityPopover() {
  const [shown, setShown] = React.useState<string[]>([
    "Customer",
    "Plan",
    "MRR",
  ])

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <Popover>
        <PopoverTrigger
          render={<Button variant="outline" size="sm" className="self-end" />}
        >
          <Columns3Icon data-icon="inline-start" />
          Columns
        </PopoverTrigger>
        <PopoverContent align="end" className="w-44">
          <div className="flex flex-col gap-2.5">
            {columns.map((column) => (
              <label key={column} className="flex items-center gap-2 text-xs">
                <Checkbox
                  checked={shown.includes(column)}
                  disabled={column === "Customer"}
                  onCheckedChange={(checked) =>
                    setShown((list) =>
                      checked
                        ? [...list, column]
                        : list.filter((c) => c !== column)
                    )
                  }
                />
                {column}
              </label>
            ))}
          </div>
        </PopoverContent>
      </Popover>
      <Table>
        <TableHeader>
          <TableRow>
            {columns
              .filter((c) => shown.includes(c))
              .map((c) => (
                <TableHead key={c}>{c}</TableHead>
              ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Customer}>
              {columns
                .filter((c) => shown.includes(c))
                .map((c) => (
                  <TableCell key={c}>{row[c]}</TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
