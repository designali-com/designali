"use client"

import * as React from "react"

import { Skeleton } from "@workspace/ui/components/skeleton"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

export default function TabsContentSkeleton() {
  const [loaded, setLoaded] = React.useState<string[]>(["overview"])

  function handleChange(value: unknown) {
    const tab = String(value)
    if (loaded.includes(tab)) return
    setTimeout(() => setLoaded((prev) => [...prev, tab]), 1000)
  }

  return (
    <Tabs
      defaultValue="overview"
      onValueChange={handleChange}
      className="w-full max-w-sm"
    >
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="usage">Usage</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      {["overview", "usage", "billing"].map((tab) => (
        <TabsContent key={tab} value={tab} className="border p-4">
          {loaded.includes(tab) ? (
            <div className="flex flex-col gap-1 text-xs">
              <span className="font-medium capitalize">{tab}</span>
              <span className="text-muted-foreground">
                Data for the {tab} panel is ready.
              </span>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3.5 w-24" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-2/3" />
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  )
}
