"use client"

import * as React from "react"
import {
  Plus as PlusIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

export default function AddableDashboardTabs() {
  const [views, setViews] = React.useState(["Overview", "Marketing"])
  const [active, setActive] = React.useState("Overview")

  function addView() {
    const name = "View " + (views.length + 1)
    setViews([...views, name])
    setActive(name)
  }

  return (
    <Tabs
      value={active}
      onValueChange={(v) => setActive(v as string)}
      className="w-full max-w-md"
    >
      <div className="flex items-center gap-1">
        <TabsList variant="line">
          {views.map((v) => (
            <TabsTrigger key={v} value={v}>
              {v}
            </TabsTrigger>
          ))}
        </TabsList>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Add view"
          onClick={addView}
          disabled={views.length >= 5}
        >
          <PlusIcon />
        </Button>
      </div>
      {views.map((v) => (
        <TabsContent
          key={v}
          value={v}
          className="flex h-24 items-center justify-center border border-dashed text-muted-foreground"
        >
          {v} widgets appear here
        </TabsContent>
      ))}
    </Tabs>
  )
}
