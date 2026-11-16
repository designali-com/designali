"use client"

import * as React from "react"
import {
  Zap as ZapIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Spinner } from "@workspace/ui/components/spinner"

export default function WebhookTestInput() {
  const [url, setUrl] = React.useState("https://hooks.designali.com/orders")
  const [state, setState] = React.useState<"idle" | "sending" | "ok">("idle")

  return (
    <Field className="w-full max-w-md">
      <FieldLabel htmlFor="webhook">Endpoint URL</FieldLabel>
      <div className="flex gap-2">
        <Input
          id="webhook"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="font-sans"
        />
        <Button
          variant="outline"
          disabled={state === "sending"}
          onClick={() => {
            setState("sending")
            setTimeout(() => setState("ok"), 1000)
          }}
        >
          {state === "sending" ? (
            <Spinner data-icon="inline-start" />
          ) : (
            <ZapIcon data-icon="inline-start" />
          )}
          Send test
        </Button>
      </div>
      {state === "ok" && (
        <FieldDescription className="flex items-center gap-2">
          <Badge variant="secondary" className="font-sans">
            200 OK
          </Badge>
          Delivered in 142 ms
        </FieldDescription>
      )}
    </Field>
  )
}
