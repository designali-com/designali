"use client"

import * as React from "react"
import { Columns3Icon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

const columns = ["Name", "Email", "Role", "Last active", "Status"]

export default function TableColumnVisibility() {
  const [visible, setVisible] = React.useState(["Name", "Email", "Status"])

  const toggle = (column: string, checked: boolean) =>
    setVisible((prev) =>
      checked
        ? columns.filter((c) => prev.includes(c) || c === column)
        : prev.filter((c) => c !== column)
    )

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
            <Columns3Icon data-icon="inline-start" />
            Columns
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuGroup>
              <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
              {columns.map((column) => (
                <DropdownMenuCheckboxItem
                  key={column}
                  checked={visible.includes(column)}
                  disabled={column === "Name"}
                  onCheckedChange={(checked) => toggle(column, checked)}
                >
                  {column}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex border bg-muted/50 text-xs font-medium text-muted-foreground">
        {visible.map((column) => (
          <div
            key={column}
            className="flex-1 truncate border-e px-2 py-2 last:border-e-0"
          >
            {column}
          </div>
        ))}
      </div>
    </div>
  )
}
