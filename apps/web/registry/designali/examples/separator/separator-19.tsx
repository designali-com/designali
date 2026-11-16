"use client"

import * as React from "react"
import {
  Check as CheckIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

const steps = ["Cart", "Shipping", "Payment", "Review"]

export default function StepperConnectors() {
  const [current, setCurrent] = React.useState(2)

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="flex items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            {index > 0 && (
              <Separator
                className={cn("mx-2 flex-1", index <= current && "bg-primary")}
              />
            )}
            <div className="flex flex-col items-center gap-1">
              <span
                className={cn(
                  "flex size-6 items-center justify-center rounded-full border text-[11px]",
                  index < current &&
                    "border-primary bg-primary text-primary-foreground",
                  index === current && "border-primary text-primary"
                )}
              >
                {index < current ? <CheckIcon className="size-3" /> : index + 1}
              </span>
              <span className="text-[11px] text-muted-foreground">{step}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-between">
        <Button
          variant="outline"
          size="sm"
          disabled={current === 0}
          onClick={() => setCurrent(current - 1)}
        >
          Back
        </Button>
        <Button
          size="sm"
          disabled={current === steps.length - 1}
          onClick={() => setCurrent(current + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
