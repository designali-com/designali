"use client"

import * as React from "react"

import { Spinner } from "@workspace/ui/components/spinner"
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"

const content: Record<string, string> = {
  overview: "14 open issues, 3 merged pull requests in designali/blocks this week.",
  activity: "Ali Imam commented on #482 and closed #479.",
  settings: "Branch protection is enabled for main.",
}

export default function TabsPanelLoading() {
  const [tab, setTab] = React.useState("overview")
  const [loading, setLoading] = React.useState(false)

  return (
    <Tabs
      value={tab}
      onValueChange={(value) => {
        setTab(value as string)
        setLoading(true)
        setTimeout(() => setLoading(false), 800)
      }}
      className="w-full max-w-sm"
    >
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <div className="flex h-24 items-center justify-center border p-4 text-sm">
        {loading ? (
          <Spinner className="size-5 text-muted-foreground" />
        ) : (
          content[tab]
        )}
      </div>
    </Tabs>
  )
}
