"use client"

import * as React from "react"
import {
  Zap as ZapIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function WebhookTestToast() {
  const [url, setUrl] = React.useState("https://www.designali.com/api/webhooks/orders")

  function test() {
    const ms = 80 + Math.round(Math.random() * 200)
    const ok = url.startsWith("https://")
    const request = new Promise<number>((resolve, reject) =>
      setTimeout(() => (ok ? resolve(ms) : reject(new Error())), 900)
    )
    notify
      .promise(request, {
        loading: "Sending test event...",
        success: (latency: number) => ({
          title: "200 OK",
          description: "order.created delivered in " + latency + "ms",
        }),
        error: {
          title: "Delivery failed",
          description: "Webhook URLs must use HTTPS.",
        },
      })
      .catch(() => {})
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
        <Label htmlFor="hook-url">Endpoint URL</Label>
        <div className="flex gap-2">
          <Input
            id="hook-url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="font-sans text-xs"
          />
          <Button variant="outline" onClick={test}>
            <ZapIcon data-icon="inline-start" />
            Test
          </Button>
        </div>
      </div>
    </Toaster>
  )
}
