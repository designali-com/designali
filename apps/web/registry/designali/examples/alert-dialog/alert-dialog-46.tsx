"use client"

import * as React from "react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"

export default function DecisionResultTracking() {
  const [open, setOpen] = React.useState(false)
  const [result, setResult] = React.useState<
    "none" | "confirmed" | "dismissed"
  >("none")

  return (
    <div className="flex flex-col items-center gap-3">
      <AlertDialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next)
          if (!next && result !== "confirmed") setResult("dismissed")
        }}
      >
        <AlertDialogTrigger
          render={
            <Button variant="outline" onClick={() => setResult("none")} />
          }
        >
          Reset analytics data
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Reset analytics?</AlertDialogTitle>
            <AlertDialogDescription>
              designali.com page views and events from the last 90 days will be cleared.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={() => {
                setResult("confirmed")
                setOpen(false)
              }}
            >
              Reset
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Badge variant={result === "confirmed" ? "destructive" : "secondary"}>
        Last decision: {result === "none" ? "pending" : result}
      </Badge>
    </div>
  )
}
