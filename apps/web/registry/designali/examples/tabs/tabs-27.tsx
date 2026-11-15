"use client"

import * as React from "react"
import { CircleXIcon, GitMergeIcon, GitPullRequestIcon } from "lucide-react"

import { Skeleton } from "@workspace/ui/components/skeleton"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const content: Record<string, string[]> = {
  open: ["Fix checkout rounding", "Add CSV export", "Audit log filters"],
  merged: ["Upgrade router", "Drop legacy auth"],
  closed: ["Experimental grid layout"],
}

export default function LazyLoadingTabs() {
  const [tab, setTab] = React.useState("open")
  const [loading, setLoading] = React.useState(false)

  function change(value: string) {
    setTab(value)
    setLoading(true)
    setTimeout(() => setLoading(false), 700)
  }

  return (
    <Tabs
      value={tab}
      onValueChange={(v) => change(v as string)}
      className="w-full max-w-sm"
    >
      <TabsList>
        <TabsTrigger value="open">
          <GitPullRequestIcon data-icon="inline-start" />
          Open
        </TabsTrigger>
        <TabsTrigger value="merged">
          <GitMergeIcon data-icon="inline-start" />
          Merged
        </TabsTrigger>
        <TabsTrigger value="closed">
          <CircleXIcon data-icon="inline-start" />
          Closed
        </TabsTrigger>
      </TabsList>
      <TabsContent value={tab} className="flex flex-col gap-2 border p-3">
        {loading
          ? [0, 1, 2].map((i) => <Skeleton key={i} className="h-4 w-full" />)
          : content[tab]!.map((pr) => <p key={pr}>{pr}</p>)}
      </TabsContent>
    </Tabs>
  )
}
