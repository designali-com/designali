"use client"

import * as React from "react"
import { CircleCheckIcon, CircleIcon, TruckIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"
import { cn } from "@workspace/ui/lib/utils"

const notify = createToastManager()

const steps = [
  "Order placed",
  "Packed",
  "Shipped",
  "Out for delivery",
  "Delivered",
]

export default function OrderShippedToast() {
  const [step, setStep] = React.useState(0)

  function advance() {
    const next = Math.min(step + 1, steps.length - 1)
    setStep(next)
    notify.add({
      id: "order",
      type: next === steps.length - 1 ? "success" : "info",
      title: "Order #A-3391: " + steps[next],
      description:
        next === 2 ? "Tracking number 1Z 999 AA1 01 2345 6784" : undefined,
      actionProps: next === 2 ? { children: "Track" } : undefined,
    })
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
        <ol className="flex flex-col gap-1.5">
          {steps.map((s, i) => (
            <li
              key={s}
              className={cn(
                "flex items-center gap-2 text-sm",
                i > step && "text-muted-foreground"
              )}
            >
              {i <= step ? (
                <CircleCheckIcon className="size-4" />
              ) : (
                <CircleIcon className="size-4" />
              )}
              {s}
            </li>
          ))}
        </ol>
        <Button
          size="sm"
          onClick={advance}
          disabled={step === steps.length - 1}
        >
          <TruckIcon data-icon="inline-start" />
          Advance status
        </Button>
      </div>
    </Toaster>
  )
}
