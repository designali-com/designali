"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { cn } from "@workspace/ui/lib/utils"

const statuses = [
  { label: "Backlog", value: "backlog", color: "bg-neutral-400" },
  { label: "Todo", value: "todo", color: "bg-sky-500" },
  { label: "In progress", value: "progress", color: "bg-amber-500" },
  { label: "Done", value: "done", color: "bg-emerald-500" },
  { label: "Canceled", value: "canceled", color: "bg-red-500" },
]

export default function IssueStatusSelect() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-4 border p-3">
      <div className="flex min-w-0 flex-col">
        <span className="text-xs text-muted-foreground">DES-482</span>
        <span className="truncate text-sm font-medium">
          Redesign designali.com onboarding
        </span>
      </div>
      <Select items={statuses} defaultValue="progress">
        <SelectTrigger size="sm" aria-label="Status">
          <SelectValue>
            {(value: string) => {
              const status = statuses.find((item) => item.value === value)
              return (
                <>
                  <span className={cn("size-2 rounded-full", status?.color)} />
                  {status?.label}
                </>
              )
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {statuses.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <span className={cn("size-2 rounded-full", item.color)} />
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
