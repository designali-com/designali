"use client"

import * as React from "react"

import { Checkbox } from "@workspace/ui/components/checkbox"

const groups = [
  { id: "projects", label: "Projects", perms: ["View", "Create", "Archive"] },
  {
    id: "billing",
    label: "Billing",
    perms: ["View invoices", "Update payment method"],
  },
  {
    id: "members",
    label: "Members",
    perms: ["Invite", "Remove", "Change roles"],
  },
]

export default function RolePermissionGroups() {
  const [granted, setGranted] = React.useState<Record<string, string[]>>({
    projects: ["View", "Create"],
    billing: [],
    members: ["Invite"],
  })

  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      {groups.map((group) => {
        const list = granted[group.id] ?? []
        const all = list.length === group.perms.length
        return (
          <div key={group.id} className="flex flex-col gap-2.5 p-3">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Checkbox
                checked={all}
                indeterminate={list.length > 0 && !all}
                onCheckedChange={(checked) =>
                  setGranted((g) => ({
                    ...g,
                    [group.id]: checked ? group.perms : [],
                  }))
                }
                className="data-indeterminate:border-primary data-indeterminate:bg-primary data-indeterminate:text-primary-foreground"
              />
              {group.label}
              <span className="ms-auto text-xs font-normal text-muted-foreground">
                {list.length}/{group.perms.length}
              </span>
            </label>
            <div className="flex flex-col gap-2 ps-6">
              {group.perms.map((perm) => (
                <label key={perm} className="flex items-center gap-2 text-xs">
                  <Checkbox
                    checked={list.includes(perm)}
                    onCheckedChange={(checked) =>
                      setGranted((g) => ({
                        ...g,
                        [group.id]: checked
                          ? [...list, perm]
                          : list.filter((p) => p !== perm),
                      }))
                    }
                  />
                  {perm}
                </label>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
