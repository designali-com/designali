"use client"

import * as React from "react"
import { BellRingIcon, LayoutDashboardIcon, UsersIcon } from "lucide-react"

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

const steps = [
  {
    icon: LayoutDashboardIcon,
    title: "Build your dashboard",
    body: "Drag widgets onto the canvas to track the metrics your team cares about.",
  },
  {
    icon: UsersIcon,
    title: "Bring your team",
    body: "Invite collaborators and assign owners to every report.",
  },
  {
    icon: BellRingIcon,
    title: "Stay in the loop",
    body: "Set alerts so you hear about spikes before your customers do.",
  },
]

export default function OnboardingStepsDialog() {
  const [step, setStep] = React.useState(0)
  const current = steps[step]!
  const last = step === steps.length - 1

  return (
    <Dialog onOpenChange={(open) => open && setStep(0)}>
      <DialogTrigger render={<Button />}>Take the tour</DialogTrigger>
      <DialogContent showCloseButton={false}>
        <div className="flex size-10 items-center justify-center bg-muted">
          <current.icon className="size-5" />
        </div>
        <DialogHeader>
          <p className="text-muted-foreground">
            Step {step + 1} of {steps.length}
          </p>
          <DialogTitle>{current.title}</DialogTitle>
          <DialogDescription>{current.body}</DialogDescription>
        </DialogHeader>
        <Progress value={((step + 1) / steps.length) * 100} />
        <DialogFooter className="sm:justify-between">
          <DialogClose render={<Button variant="ghost" />}>Skip</DialogClose>
          <div className="flex gap-2">
            <Button
              variant="outline"
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
            >
              Back
            </Button>
            {last ? (
              <DialogClose render={<Button />}>Get started</DialogClose>
            ) : (
              <Button onClick={() => setStep(step + 1)}>Next</Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
