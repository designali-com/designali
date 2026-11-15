"use client"

import * as React from "react"
import { BellRingIcon, FlameIcon, ListChecksIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  {
    title: "Track every habit",
    body: "Add the routines you want to build and pick the days that matter.",
    icon: ListChecksIcon,
  },
  {
    title: "Get gentle nudges",
    body: "Choose when we remind you. You can always snooze.",
    icon: BellRingIcon,
  },
  {
    title: "Watch your streaks",
    body: "See progress over weeks and celebrate the small wins.",
    icon: FlameIcon,
  },
]

export default function OnboardingStepperDrawer() {
  const [step, setStep] = React.useState(0)
  const current = steps[step]!

  return (
    <Drawer onOpenChange={(open) => open && setStep(0)}>
      <DrawerTrigger render={<Button />}>Get started</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-3 p-6 text-center">
          <div className="flex size-14 items-center justify-center rounded-full bg-muted">
            <current.icon className="size-6" />
          </div>
          <DrawerTitle className="text-base">{current.title}</DrawerTitle>
          <DrawerDescription>{current.body}</DrawerDescription>
          <div
            className="flex gap-1.5 py-2"
            aria-label={"Step " + (step + 1) + " of " + steps.length}
          >
            {steps.map((item, index) => (
              <span
                key={item.title}
                className={cn(
                  "h-1.5 rounded-full bg-muted transition-all",
                  index === step ? "w-6 bg-foreground" : "w-1.5"
                )}
              />
            ))}
          </div>
          <div className="flex w-full gap-2">
            <Button
              variant="outline"
              className="flex-1"
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
            >
              Back
            </Button>
            {step < steps.length - 1 ? (
              <Button className="flex-1" onClick={() => setStep(step + 1)}>
                Continue
              </Button>
            ) : (
              <DrawerClose render={<Button className="flex-1" />}>
                Start tracking
              </DrawerClose>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
