"use client"

import * as React from "react"
import {
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
  Check as CheckIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

const steps = ["Profile", "Company", "Plan"]

export default function StepNavigationButtons() {
  const [step, setStep] = React.useState(0)
  const last = step === steps.length - 1

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex gap-1">
        {steps.map((label, index) => (
          <div
            key={label}
            className={cn(
              "h-1 flex-1",
              index <= step ? "bg-primary" : "bg-muted"
            )}
          />
        ))}
      </div>
      <p className="text-sm font-medium">
        Step {step + 1}: {steps[step]}
      </p>
      <div className="flex justify-between">
        <Button
          variant="ghost"
          disabled={step === 0}
          onClick={() => setStep(step - 1)}
        >
          <ArrowLeftIcon data-icon="inline-start" />
          Back
        </Button>
        <Button onClick={() => setStep(last ? 0 : step + 1)}>
          {last ? "Finish" : "Next"}
          {last ? (
            <CheckIcon data-icon="inline-end" />
          ) : (
            <ArrowRightIcon data-icon="inline-end" />
          )}
        </Button>
      </div>
    </div>
  )
}
