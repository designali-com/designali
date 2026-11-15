"use client"

import * as React from "react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb"
import { Button } from "@workspace/ui/components/button"

const steps = ["Workspace", "Invite team", "Connect data", "Finish"]

export default function WizardStepBreadcrumb() {
  const [step, setStep] = React.useState(2)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <Breadcrumb>
        <BreadcrumbList>
          {steps.slice(0, step + 1).map((label, index) => (
            <React.Fragment key={label}>
              <BreadcrumbItem>
                {index === step ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    render={<button type="button" />}
                    onClick={() => setStep(index)}
                  >
                    {label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < step && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold">{steps[step]}</h3>
        <p className="text-xs text-muted-foreground">
          Step {step + 1} of {steps.length}
        </p>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          size="sm"
          disabled={step === 0}
          onClick={() => setStep(step - 1)}
        >
          Back
        </Button>
        <Button
          size="sm"
          disabled={step === steps.length - 1}
          onClick={() => setStep(step + 1)}
        >
          Continue
        </Button>
      </div>
    </div>
  )
}
