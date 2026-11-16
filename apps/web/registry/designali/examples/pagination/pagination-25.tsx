"use client"

import * as React from "react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@workspace/ui/components/pagination"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  "Create your designali account",
  "Invite your team",
  "Install @designali/icons",
  "Pick a template",
]

export default function OnboardingStepPagination() {
  const [step, setStep] = React.useState(1)
  const last = step === steps.length - 1

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 border p-4">
      <div className="flex flex-col gap-1">
        <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
          Step {step + 1} of {steps.length}
        </span>
        <span className="text-sm font-medium">{steps[step]}</span>
      </div>
      <div className="flex gap-1">
        {steps.map((label, i) => (
          <span
            key={label}
            className={cn("h-1 flex-1 bg-muted", i <= step && "bg-primary")}
          />
        ))}
      </div>
      <Pagination>
        <PaginationContent className="w-full justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              text="Back"
              aria-disabled={step === 0}
              className={cn(step === 0 && "pointer-events-none opacity-50")}
              onClick={(event) => {
                event.preventDefault()
                setStep((s) => Math.max(0, s - 1))
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              text={last ? "Finish" : "Continue"}
              className="border"
              onClick={(event) => {
                event.preventDefault()
                setStep((s) => Math.min(steps.length - 1, s + 1))
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
