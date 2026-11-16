"use client"

import * as React from "react"
import {
  Webhook as WebhookIcon,
} from "@designali/icons"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import { Button } from "@workspace/ui/components/button"
import { Spinner } from "@workspace/ui/components/spinner"

export default function AsyncConfirmWithSpinner() {
  const [open, setOpen] = React.useState(false)
  const [pending, setPending] = React.useState(false)
  const [deleted, setDeleted] = React.useState(false)

  function handleConfirm() {
    setPending(true)
    setTimeout(() => {
      setPending(false)
      setDeleted(true)
      setOpen(false)
    }, 1500)
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <AlertDialog
        open={open}
        onOpenChange={(next) => !pending && setOpen(next)}
      >
        <AlertDialogTrigger
          render={<Button variant="outline" disabled={deleted} />}
        >
          {deleted ? "Webhook deleted" : "Delete webhook"}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <WebhookIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>Delete webhook endpoint?</AlertDialogTitle>
            <AlertDialogDescription>
              Events will no longer be sent to https://www.designali.com/api/hooks/orders.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={pending}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={handleConfirm}
              disabled={pending}
            >
              {pending && <Spinner data-icon="inline-start" />}
              {pending ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      {deleted && (
        <Button variant="link" size="sm" onClick={() => setDeleted(false)}>
          Reset demo
        </Button>
      )}
    </div>
  )
}
