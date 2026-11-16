"use client"

import * as React from "react"
import {
  BellRing as BellRingIcon,
  Flame as FlameIcon,
  ListChecks as ListChecksIcon,
} from "@designali/icons"

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
    title: "Browse Designali blocks",
    body: "Pick from 460+ blocks and 240+ landing pages built with Next.js.",
    icon: ListChecksIcon,
  },
  {
    title: "Grab icons and logos",
    body: "Install @designali/icons and @designali/logos in one command.",
    icon: BellRingIcon,
  },
  {
    title: "Ship your site",
    body: "Deploy to Vercel and go from design to code.",
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
