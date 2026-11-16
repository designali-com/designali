"use client"

import * as React from "react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@workspace/ui/components/input-group"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

const CAP = 50000

export default function BudgetAllocationInputs() {
  const [budget, setBudget] = React.useState({
    Branding: 22000,
    Development: 24000,
    Motion: 7000,
  })
  const total = Object.values(budget).reduce((a, b) => a + b, 0)
  const over = total > CAP

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <p className="text-sm font-medium">Designali project budget</p>
      {Object.entries(budget).map(([dept, value]) => (
        <div
          key={dept}
          className="flex items-center justify-between gap-3 text-sm"
        >
          <label htmlFor={"budget-" + dept}>{dept}</label>
          <InputGroup className="w-32">
            <InputGroupAddon>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput
              id={"budget-" + dept}
              type="number"
              step={500}
              value={value}
              aria-invalid={over}
              onChange={(e) =>
                setBudget({ ...budget, [dept]: Number(e.target.value) })
              }
              className="text-right tabular-nums"
            />
          </InputGroup>
        </div>
      ))}
      <Separator />
      <div
        className={cn(
          "flex justify-between text-sm font-medium",
          over && "text-destructive"
        )}
      >
        <span>Total</span>
        <span className="tabular-nums">
          {"$" + total.toLocaleString()} / {"$" + CAP.toLocaleString()}
        </span>
      </div>
      {over && (
        <p className="text-xs text-destructive">
          Reduce by {"$" + (total - CAP).toLocaleString()} to stay within the
          cap.
        </p>
      )}
    </div>
  )
}
