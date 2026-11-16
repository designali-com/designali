"use client"

import * as React from "react"
import {
  ArrowDown as ArrowDownIcon,
  ArrowUp as ArrowUpIcon,
  ChevronsUpDown as ChevronsUpDownIcon,
  EyeOff as EyeOffIcon,
  Pin as PinIcon,
  X as XIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu"

export default function ColumnHeaderMenu() {
  const [sort, setSort] = React.useState<Record<string, string>>({
    Plan: "none",
    MRR: "desc",
  })

  return (
    <div className="flex w-full max-w-sm border bg-muted/40 text-xs">
      {["Plan", "MRR"].map((column) => (
        <div
          key={column}
          className="flex flex-1 items-center justify-between border-e px-2 py-1 last:border-e-0"
        >
          <span className="font-medium">{column}</span>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-xs"
                  aria-label={column + " column options"}
                />
              }
            >
              {sort[column] === "asc" ? (
                <ArrowUpIcon />
              ) : sort[column] === "desc" ? (
                <ArrowDownIcon />
              ) : (
                <ChevronsUpDownIcon />
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuRadioGroup
                value={sort[column]}
                onValueChange={(value) => setSort({ ...sort, [column]: value })}
              >
                <DropdownMenuRadioItem value="asc">
                  <ArrowUpIcon />
                  Ascending
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="desc">
                  <ArrowDownIcon />
                  Descending
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="none">
                  <XIcon />
                  Unsorted
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PinIcon />
                Pin column
              </DropdownMenuItem>
              <DropdownMenuItem>
                <EyeOffIcon />
                Hide column
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ))}
    </div>
  )
}
