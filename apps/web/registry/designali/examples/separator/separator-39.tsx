"use client"

import * as React from "react"

import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

const items = ["General", "Members", "Billing", "Security"]

export default function SettingsSideNavSplit() {
  const [active, setActive] = React.useState("Billing")

  return (
    <div className="flex h-48 w-full max-w-md border">
      <nav className="flex w-28 shrink-0 flex-col gap-0.5 p-2">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setActive(item)}
            className={cn(
              "px-2 py-1.5 text-start text-xs",
              item === active
                ? "bg-muted font-medium"
                : "text-muted-foreground hover:bg-muted/50"
            )}
          >
            {item}
          </button>
        ))}
      </nav>
      <Separator orientation="vertical" />
      <div className="flex flex-1 flex-col gap-1 p-4">
        <span className="text-sm font-medium">{active}</span>
        <span className="text-xs text-muted-foreground">
          Manage {active.toLowerCase()} preferences for the Fieldnote workspace.
        </span>
      </div>
    </div>
  )
}
