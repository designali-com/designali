"use client"

import * as React from "react"
import {
  ArrowDown as ArrowDownIcon,
  ArrowUp as ArrowUpIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  Pin as PinIcon,
} from "@designali/icons"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@workspace/ui/components/context-menu"
import { cn } from "@workspace/ui/lib/utils"

const columns = ["Product", "Plan", "MRR"]
const rows = [
  ["Templates", "Pro", 420],
  ["Blocks", "Team", 1280],
  ["Icons", "Starter", 49],
]

export default function TableColumnHeaderMenu() {
  const [hidden, setHidden] = React.useState<string[]>([])
  const [sort, setSort] = React.useState<{
    col: number
    dir: "asc" | "desc"
  } | null>(null)
  const [pinned, setPinned] = React.useState("none")

  const visible = columns
    .map((c, i) => ({ c, i }))
    .filter(({ c }) => !hidden.includes(c))
  const sorted = [...rows].sort((a, b) => {
    if (!sort) return 0
    const x = a[sort.col]!
    const y = b[sort.col]!
    const result =
      typeof x === "number"
        ? x - (y as number)
        : String(x).localeCompare(String(y))
    return sort.dir === "asc" ? result : -result
  })

  return (
    <div className="w-full max-w-md overflow-x-auto border">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b bg-muted/40">
            {visible.map(({ c, i }) => (
              <ContextMenu key={c}>
                <ContextMenuTrigger
                  render={<th />}
                  className={cn(
                    "px-3 py-2 text-start font-medium data-popup-open:bg-muted",
                    pinned === c && "bg-muted"
                  )}
                >
                  <span className="flex items-center gap-1">
                    {pinned === c ? <PinIcon className="size-3" /> : null}
                    {c}
                    {sort?.col === i ? (
                      sort.dir === "asc" ? (
                        <ArrowUpIcon className="size-3" />
                      ) : (
                        <ArrowDownIcon className="size-3" />
                      )
                    ) : null}
                  </span>
                </ContextMenuTrigger>
                <ContextMenuContent className="w-44">
                  <ContextMenuGroup>
                    <ContextMenuItem
                      onClick={() => setSort({ col: i, dir: "asc" })}
                    >
                      <ArrowUpIcon />
                      Sort ascending
                    </ContextMenuItem>
                    <ContextMenuItem
                      onClick={() => setSort({ col: i, dir: "desc" })}
                    >
                      <ArrowDownIcon />
                      Sort descending
                    </ContextMenuItem>
                    <ContextMenuItem
                      disabled={!sort}
                      onClick={() => setSort(null)}
                    >
                      Clear sort
                    </ContextMenuItem>
                  </ContextMenuGroup>
                  <ContextMenuSeparator />
                  <ContextMenuRadioGroup
                    value={pinned}
                    onValueChange={setPinned}
                  >
                    <ContextMenuLabel>Pin column</ContextMenuLabel>
                    <ContextMenuRadioItem value={c}>
                      Pin {c}
                    </ContextMenuRadioItem>
                    <ContextMenuRadioItem value="none">
                      No pinned column
                    </ContextMenuRadioItem>
                  </ContextMenuRadioGroup>
                  <ContextMenuSeparator />
                  <ContextMenuGroup>
                    <ContextMenuItem
                      disabled={visible.length === 1}
                      onClick={() => setHidden((h) => [...h, c])}
                    >
                      <EyeOffIcon />
                      Hide column
                    </ContextMenuItem>
                    <ContextMenuItem
                      disabled={!hidden.length}
                      onClick={() => setHidden([])}
                    >
                      <EyeIcon />
                      Show all columns
                    </ContextMenuItem>
                  </ContextMenuGroup>
                </ContextMenuContent>
              </ContextMenu>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row) => (
            <tr key={String(row[0])} className="border-b last:border-0">
              {visible.map(({ c, i }) => (
                <td
                  key={c}
                  className={cn("px-3 py-2", pinned === c && "bg-muted/40")}
                >
                  {typeof row[i] === "number" ? "$" + row[i] : row[i]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
