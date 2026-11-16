"use client"

import * as React from "react"

import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

const tabs = ["Overview", "Activity", "Settings"]

export default function UnderlineTabsBaseline() {
  const [active, setActive] = React.useState("Activity")

  return (
    <div className="flex w-full max-w-sm flex-col">
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={cn(
              "relative pb-2 text-sm",
              tab === active
                ? "font-medium"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab}
            {tab === active && (
              <span className="absolute inset-x-0 -bottom-px h-0.5 bg-foreground" />
            )}
          </button>
        ))}
      </div>
      <Separator />
      <p className="pt-3 text-sm text-muted-foreground">
        Showing {active.toLowerCase()} for designali.com.
      </p>
    </div>
  )
}
