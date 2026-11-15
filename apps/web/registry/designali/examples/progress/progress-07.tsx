"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Progress, ProgressLabel } from "@workspace/ui/components/progress"

const steps = ["Account", "Profile", "Preferences", "Review"]

export default function StepWizardProgress() {
  const [step, setStep] = React.useState(1)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <Progress value={((step + 1) / steps.length) * 100}>
        <ProgressLabel className="text-sm font-medium">
          {steps[step]}
        </ProgressLabel>
        <span className="ms-auto text-xs text-muted-foreground">
          Step {step + 1} of {steps.length}
        </span>
      </Progress>
      <p className="text-sm text-muted-foreground">
        Fill in the {steps[step]?.toLowerCase()} details to continue.
      </p>
      <div className="flex justify-between">
        <Button
          variant="outline"
          size="sm"
          disabled={step === 0}
          onClick={() => setStep((s) => s - 1)}
        >
          Back
        </Button>
        <Button
          size="sm"
          disabled={step === steps.length - 1}
          onClick={() => setStep((s) => s + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
