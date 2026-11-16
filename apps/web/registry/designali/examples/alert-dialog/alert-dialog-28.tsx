"use client"

import * as React from "react"
import {
  Timer as TimerIcon,
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
} from "@workspace/ui/components/alert-dialog"
import { Button } from "@workspace/ui/components/button"
import { Progress } from "@workspace/ui/components/progress"

export default function SessionTimeoutCountdown() {
  const [open, setOpen] = React.useState(false)
  const [seconds, setSeconds] = React.useState(60)

  React.useEffect(() => {
    if (!open) return
    const timer = setInterval(() => {
      setSeconds((value) => (value > 0 ? value - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [open])

  function show() {
    setSeconds(60)
    setOpen(true)
  }

  return (
    <>
      <Button variant="outline" onClick={show}>
        <TimerIcon data-icon="inline-start" />
        Simulate idle timeout
      </Button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <TimerIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>Your designali.com session is about to expire</AlertDialogTitle>
            <AlertDialogDescription>
              For your security, you&apos;ll be signed out in{" "}
              <span className="font-mono font-medium text-foreground tabular-nums">
                0:{String(seconds).padStart(2, "0")}
              </span>
              .
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Progress value={(seconds / 60) * 100} />
          <AlertDialogFooter>
            <AlertDialogCancel>Sign out</AlertDialogCancel>
            <AlertDialogAction onClick={() => setOpen(false)}>
              Stay signed in
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
