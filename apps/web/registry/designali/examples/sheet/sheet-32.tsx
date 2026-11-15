"use client"

import * as React from "react"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import { Progress } from "@workspace/ui/components/progress"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const steps = [
  {
    title: "Name your workspace",
    field: "Workspace name",
    placeholder: "Acorn Analytics",
  },
  { title: "Pick a URL", field: "Workspace URL", placeholder: "acorn" },
  {
    title: "Invite your team",
    field: "Teammate emails",
    placeholder: "kai@acorn.example, rosa@acorn.example",
  },
]

export default function OnboardingStepsSheet() {
  const [step, setStep] = React.useState(0)
  const current = steps[step]!
  const last = step === steps.length - 1

  return (
    <Sheet onOpenChange={(open) => open && setStep(0)}>
      <SheetTrigger render={<Button />}>Get started</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <span className="text-muted-foreground">
            Step {step + 1} of {steps.length}
          </span>
          <SheetTitle>{current.title}</SheetTitle>
          <SheetDescription>
            You can change this later in settings.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <Progress value={((step + 1) / steps.length) * 100} />
          <Field>
            <FieldLabel htmlFor={"onboarding-" + step}>
              {current.field}
            </FieldLabel>
            <Input
              key={step}
              id={"onboarding-" + step}
              placeholder={current.placeholder}
            />
          </Field>
        </div>
        <SheetFooter className="flex-row">
          <Button
            variant="outline"
            className="flex-1"
            disabled={step === 0}
            onClick={() => setStep((s) => s - 1)}
          >
            Back
          </Button>
          {last ? (
            <SheetClose render={<Button className="flex-1" />}>
              Finish
            </SheetClose>
          ) : (
            <Button className="flex-1" onClick={() => setStep((s) => s + 1)}>
              Next
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
