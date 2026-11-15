"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"
import { cn } from "@workspace/ui/lib/utils"

const workspaces = [
  {
    label: "Acme Studio",
    value: "acme",
    plan: "Pro",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    label: "Lumen Labs",
    value: "lumen",
    plan: "Free",
    gradient: "from-sky-500 to-cyan-400",
  },
  {
    label: "Harbor & Co",
    value: "harbor",
    plan: "Team",
    gradient: "from-amber-500 to-orange-500",
  },
]

export default function WorkspaceSwitcherSelect() {
  return (
    <div className="flex h-56 w-full max-w-60 flex-col justify-end border bg-muted/30 p-2">
      <Select items={workspaces} defaultValue="acme">
        <SelectTrigger className="h-12 w-full" aria-label="Workspace">
          <SelectValue>
            {(value: string) => {
              const workspace = workspaces.find((item) => item.value === value)
              if (!workspace) return null
              return (
                <>
                  <span
                    className={cn(
                      "size-7 shrink-0 bg-linear-to-br",
                      workspace.gradient
                    )}
                  />
                  <span className="flex flex-col text-start">
                    <span className="font-medium">{workspace.label}</span>
                    <span className="text-muted-foreground">
                      {workspace.plan} plan
                    </span>
                  </span>
                </>
              )
            }}
          </SelectValue>
        </SelectTrigger>
        <SelectContent side="top" alignItemWithTrigger={false}>
          <SelectGroup>
            <SelectLabel>Workspaces</SelectLabel>
            {workspaces.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                <span className={cn("size-5 bg-linear-to-br", item.gradient)} />
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
