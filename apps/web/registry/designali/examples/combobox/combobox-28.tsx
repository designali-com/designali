"use client"

import { GitBranchIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "@workspace/ui/components/combobox"

type Branch = { name: string; updated: string; isDefault?: boolean }

const branches: Branch[] = [
  { name: "main", updated: "2h ago", isDefault: true },
  { name: "feat/billing-portal", updated: "20m ago" },
  { name: "fix/date-picker-tz", updated: "1d ago" },
  { name: "chore/upgrade-deps", updated: "3d ago" },
]

export default function GitBranchSwitcher() {
  return (
    <Combobox
      items={branches}
      defaultValue={branches[1]}
      itemToStringLabel={(branch: Branch) => branch.name}
    >
      <ComboboxTrigger
        render={
          <Button
            variant="outline"
            size="sm"
            className="w-56 justify-between font-mono"
          />
        }
      >
        <span className="flex min-w-0 items-center gap-1.5">
          <GitBranchIcon />
          <span className="truncate">
            <ComboboxValue />
          </span>
        </span>
      </ComboboxTrigger>
      <ComboboxContent className="w-64">
        <ComboboxInput showTrigger={false} placeholder="Find a branch" />
        <ComboboxEmpty>No branches found.</ComboboxEmpty>
        <ComboboxList>
          {(branch: Branch) => (
            <ComboboxItem key={branch.name} value={branch}>
              <span className="flex-1 truncate font-mono">{branch.name}</span>
              {branch.isDefault ? (
                <Badge variant="secondary" className="h-4 px-1 text-[10px]">
                  default
                </Badge>
              ) : (
                <span className="text-[11px] text-muted-foreground">
                  {branch.updated}
                </span>
              )}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
