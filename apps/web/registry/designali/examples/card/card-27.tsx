"use client"

import * as React from "react"
import {
  CloudOff as CloudOffIcon,
  RefreshCw as RefreshCwIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Spinner } from "@workspace/ui/components/spinner"

export default function ErrorStateCard() {
  const [retrying, setRetrying] = React.useState(false)

  return (
    <Card className="w-full max-w-sm ring-destructive/30">
      <CardHeader>
        <CardTitle>designali.com conversion funnel</CardTitle>
        <CardDescription>Last 30 days</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2 py-6 text-center">
        <span className="flex size-10 items-center justify-center bg-destructive/10 text-destructive">
          <CloudOffIcon className="size-5" />
        </span>
        <span className="font-medium">Couldn&apos;t load this chart</span>
        <span className="text-muted-foreground">
          The analytics service timed out. Your data is safe.
        </span>
        <code className="bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
          ERR_TIMEOUT · req_8f2c91
        </code>
      </CardContent>
      <CardFooter className="justify-center gap-2">
        <Button
          size="sm"
          disabled={retrying}
          onClick={() => {
            setRetrying(true)
            setTimeout(() => setRetrying(false), 1500)
          }}
        >
          {retrying ? (
            <Spinner data-icon="inline-start" />
          ) : (
            <RefreshCwIcon data-icon="inline-start" />
          )}
          {retrying ? "Retrying..." : "Try again"}
        </Button>
        <Button size="sm" variant="ghost">
          Status page
        </Button>
      </CardFooter>
    </Card>
  )
}
