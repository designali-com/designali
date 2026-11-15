"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Progress } from "@workspace/ui/components/progress"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { Skeleton } from "@workspace/ui/components/skeleton"

export default function LoadingContentSheet() {
  const [loading, setLoading] = React.useState(true)
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleOpenChange(open: boolean) {
    if (timer.current) clearTimeout(timer.current)
    if (open) {
      setLoading(true)
      timer.current = setTimeout(() => setLoading(false), 1200)
    }
  }

  React.useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
    },
    []
  )

  return (
    <Sheet onOpenChange={handleOpenChange}>
      <SheetTrigger render={<Button variant="outline" />}>
        Open usage report
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Usage this month</SheetTitle>
          <SheetDescription>
            {loading ? "Fetching the latest numbers…" : "Updated just now"}
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          {[
            { label: "API requests", value: "1.28M", pct: 64 },
            { label: "Storage", value: "38 GB", pct: 38 },
            { label: "Bandwidth", value: "412 GB", pct: 82 },
          ].map((row) =>
            loading ? (
              <div key={row.label} className="flex flex-col gap-2">
                <Skeleton className="h-3 w-24" />
                <Skeleton className="h-1 w-full" />
              </div>
            ) : (
              <div key={row.label} className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span>{row.label}</span>
                  <span className="font-medium">{row.value}</span>
                </div>
                <Progress value={row.pct} />
              </div>
            )
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
