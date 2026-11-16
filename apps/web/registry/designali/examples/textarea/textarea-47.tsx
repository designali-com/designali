"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Textarea } from "@workspace/ui/components/textarea"

export default function ModerationRejectReason() {
  const [mode, setMode] = React.useState<"review" | "reject" | "done">("review")
  const [reason, setReason] = React.useState("")

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Template: Portfolio Simple</CardTitle>
        <CardDescription>
          Submitted to Designali Templates · awaiting review
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {mode === "reject" && (
          <Field data-invalid={!reason.trim() || undefined}>
            <FieldLabel htmlFor="mod-reason">
              Reason shown to the seller
            </FieldLabel>
            <Textarea
              id="mod-reason"
              autoFocus
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Photos don't match the description…"
            />
          </Field>
        )}
        {mode === "done" && (
          <p className="text-xs text-muted-foreground">Decision recorded.</p>
        )}
      </CardContent>
      {mode !== "done" && (
        <CardFooter className="gap-2">
          {mode === "review" ? (
            <>
              <Button size="sm" onClick={() => setMode("done")}>
                Approve
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setMode("reject")}
              >
                Reject
              </Button>
            </>
          ) : (
            <>
              <Button
                size="sm"
                variant="destructive"
                disabled={!reason.trim()}
                onClick={() => setMode("done")}
              >
                Confirm rejection
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setMode("review")}
              >
                Back
              </Button>
            </>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
