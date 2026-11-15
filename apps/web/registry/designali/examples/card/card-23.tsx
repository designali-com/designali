"use client"

import * as React from "react"
import { Settings2Icon, WebhookIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

export default function IntegrationCard() {
  const [connected, setConnected] = React.useState(true)

  return (
    <Card className="w-full max-w-xs">
      <CardHeader className="grid-cols-[auto_1fr_auto] gap-x-3">
        <div className="row-span-2 flex size-10 items-center justify-center bg-gradient-to-br from-indigo-500 to-sky-500 text-white">
          <WebhookIcon className="size-5" />
        </div>
        <CardTitle>Relaybox</CardTitle>
        <CardDescription>Sync form submissions to your CRM.</CardDescription>
        <CardAction className="col-start-3">
          <Switch
            checked={connected}
            onCheckedChange={setConnected}
            aria-label="Enable Relaybox"
          />
        </CardAction>
      </CardHeader>
      <CardFooter className="justify-between">
        <Badge
          variant={connected ? "secondary" : "outline"}
          className="gap-1.5"
        >
          <span
            className={cn(
              "size-1.5 rounded-full",
              connected ? "bg-emerald-500" : "bg-muted-foreground"
            )}
          />
          {connected ? "Connected" : "Disconnected"}
        </Badge>
        <Button variant="ghost" size="sm" disabled={!connected}>
          <Settings2Icon data-icon="inline-start" />
          Configure
        </Button>
      </CardFooter>
    </Card>
  )
}
