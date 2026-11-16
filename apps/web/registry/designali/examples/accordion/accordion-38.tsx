"use client"

import * as React from "react"
import {
  Check as CheckIcon,
  ChevronDown as ChevronDownIcon,
} from "@designali/icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { cn } from "@workspace/ui/lib/utils"

const steps = [
  { value: "contact", title: "Contact" },
  { value: "shipping", title: "Billing address" },
  { value: "payment", title: "Payment" },
]

export default function AccordionCheckoutSteps() {
  const [open, setOpen] = React.useState<string[]>(["contact"])
  const [completed, setCompleted] = React.useState<string[]>([])

  const next = (current: string) => {
    const index = steps.findIndex((s) => s.value === current)
    setCompleted((prev) => (prev.includes(current) ? prev : [...prev, current]))
    const following = steps[index + 1]
    setOpen(following ? [following.value] : [])
  }

  return (
    <Accordion
      keepMounted
      value={open}
      onValueChange={(value) => setOpen(value as string[])}
      className="w-full max-w-sm border px-3"
    >
      {steps.map((step, index) => (
        <AccordionItem key={step.value} value={step.value}>
          <AccordionTrigger className="items-center text-sm">
            <span className="flex items-center gap-2">
              <span
                className={cn(
                  "flex size-5 items-center justify-center border text-[10px]",
                  completed.includes(step.value) &&
                    "border-foreground bg-foreground text-background"
                )}
              >
                {completed.includes(step.value) ? (
                  <CheckIcon className="size-3" />
                ) : (
                  index + 1
                )}
              </span>
              {step.title}
            </span>
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent className="space-y-2">
            {step.value === "contact" && (
              <Input
                type="email"
                placeholder="you@example.com"
                aria-label="Email"
              />
            )}
            {step.value === "shipping" && (
              <>
                <Input
                  placeholder="Street address"
                  aria-label="Street address"
                />
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="City" aria-label="City" />
                  <Input placeholder="Postcode" aria-label="Postcode" />
                </div>
              </>
            )}
            {step.value === "payment" && (
              <Input
                placeholder="Card number"
                inputMode="numeric"
                aria-label="Card number"
              />
            )}
            <Button
              size="sm"
              className="w-full"
              onClick={() => next(step.value)}
            >
              {index === steps.length - 1 ? "Place order" : "Continue"}
            </Button>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
