"use client"

import * as React from "react"

import { Kbd } from "@workspace/ui/components/kbd"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const panes = ["Console", "Network", "Storage"]

export default function KeyboardShortcutTabs() {
  const [active, setActive] = React.useState("Console")

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!e.altKey) return
      const i = Number(e.key) - 1
      if (panes[i]) setActive(panes[i]!)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <Tabs
      value={active}
      onValueChange={(v) => setActive(v as string)}
      className="w-full max-w-sm"
    >
      <TabsList>
        {panes.map((p, i) => (
          <TabsTrigger key={p} value={p}>
            {p}
            <Kbd>{i + 1}</Kbd>
          </TabsTrigger>
        ))}
      </TabsList>
      {panes.map((p) => (
        <TabsContent
          key={p}
          value={p}
          className="border p-3 font-sans text-muted-foreground"
        >
          {p.toLowerCase()} panel ready
        </TabsContent>
      ))}
      <p className="text-muted-foreground">Press Alt + 1–3 to switch panels.</p>
    </Tabs>
  )
}
