"use client"

import * as React from "react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Skeleton } from "@workspace/ui/components/skeleton"

export default function LoadingSkeletonCard() {
  const [loading, setLoading] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <Card>
        <CardHeader>
          {loading ? (
            <>
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-48" />
            </>
          ) : (
            <>
              <CardTitle>Designali weekly report</CardTitle>
              <CardDescription>Nov 10 - Nov 16 · designali.com</CardDescription>
            </>
          )}
          <CardAction>
            {loading ? (
              <Skeleton className="size-8" />
            ) : (
              <Badge variant="secondary">Ready</Badge>
            )}
          </CardAction>
        </CardHeader>
        <CardContent className="grid gap-2">
          {loading ? (
            <>
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-2/3" />
            </>
          ) : (
            <>
              <div className="flex h-24 items-end gap-1.5 bg-muted/40 p-2">
                {[40, 65, 50, 80, 72, 90, 60].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-primary/80"
                    style={{ height: h + "%" }}
                  />
                ))}
              </div>
              <p className="text-muted-foreground">
                Template downloads grew 18% week over week, driven by the new blocks launch.
              </p>
            </>
          )}
        </CardContent>
      </Card>
      <Button
        variant="outline"
        size="sm"
        className="self-center"
        onClick={() => setLoading(!loading)}
      >
        {loading ? "Finish loading" : "Show loading state"}
      </Button>
    </div>
  )
}
