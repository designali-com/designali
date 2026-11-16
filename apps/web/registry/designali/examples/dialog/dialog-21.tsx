"use client"

import * as React from "react"
import {
  Timer as TimerIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Progress } from "@workspace/ui/components/progress"

export default function SessionTimeoutDialog() {
  const [open, setOpen] = React.useState(false)
  const [seconds, setSeconds] = React.useState(60)

  React.useEffect(() => {
    if (!open) return
    const timer = window.setInterval(() => {
      setSeconds((value) => Math.max(0, value - 1))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [open])

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (next) setSeconds(60)
      }}
      disablePointerDismissal
    >
      <DialogTrigger render={<Button variant="outline" />}>
        <TimerIcon data-icon="inline-start" />
        Simulate idle session
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Are you still there?</DialogTitle>
          <DialogDescription>
            For your security, you&apos;ll be signed out of Designali soon.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-1 border bg-muted/50 py-4">
          <span className="font-heading text-3xl font-semibold tabular-nums">
            0:{String(seconds).padStart(2, "0")}
          </span>
          <span className="text-muted-foreground">
            until automatic sign out
          </span>
        </div>
        <Progress value={(seconds / 60) * 100} />
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Sign out now
          </DialogClose>
          <DialogClose render={<Button />}>Stay signed in</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
