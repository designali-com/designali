"use client"

import { GlobeIcon, LockIcon, UsersIcon } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const levels = [
  {
    label: "Private",
    value: "private",
    icon: LockIcon,
    hint: "Only you can open it",
  },
  {
    label: "Team",
    value: "team",
    icon: UsersIcon,
    hint: "Everyone in Lumen Labs",
  },
  {
    label: "Public link",
    value: "public",
    icon: GlobeIcon,
    hint: "Anyone with the link",
  },
]

export default function VisibilitySelect() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-3 border p-3">
      <div className="flex min-w-0 flex-col">
        <span className="truncate text-sm font-medium">Launch plan v2</span>
        <span className="text-xs text-muted-foreground">
          Edited 5 minutes ago
        </span>
      </div>
      <Select items={levels} defaultValue="team">
        <SelectTrigger size="sm" aria-label="Visibility">
          <SelectValue>
            {(value: string) => {
              const level = levels.find((item) => item.value === value)
              if (!level) return null
              return (
                <>
                  <level.icon className="text-muted-foreground" />
                  {level.label}
                </>
              )
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent
          align="end"
          alignItemWithTrigger={false}
          className="min-w-56"
        >
          {levels.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              <item.icon />
              <span className="flex flex-col">
                <span>{item.label}</span>
                <span className="text-muted-foreground">{item.hint}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
