"use client"

import * as React from "react"
import {
  BadgePercent as BadgePercentIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const reasons = [
  "Too expensive",
  "Missing features",
  "Switching to another tool",
  "Just taking a break",
]

export default function CancelSubscriptionFlowDialog() {
  const [step, setStep] = React.useState<"reason" | "offer">("reason")
  const [reason, setReason] = React.useState("")

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          setStep("reason")
          setReason("")
        }
      }}
    >
      <DialogTrigger
        render={<Button variant="ghost" className="text-destructive" />}
      >
        Cancel subscription
      </DialogTrigger>
      <DialogContent>
        {step === "reason" ? (
          <>
            <DialogHeader>
              <DialogTitle>Why are you leaving?</DialogTitle>
              <DialogDescription>
                Your feedback shapes what we build next.
              </DialogDescription>
            </DialogHeader>
            <RadioGroup
              value={reason}
              onValueChange={(value) => setReason(String(value))}
            >
              {reasons.map((item, index) => (
                <Field key={item} orientation="horizontal">
                  <RadioGroupItem value={item} id={"reason-" + index} />
                  <FieldLabel htmlFor={"reason-" + index}>{item}</FieldLabel>
                </Field>
              ))}
            </RadioGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>
                Never mind
              </DialogClose>
              <Button disabled={!reason} onClick={() => setStep("offer")}>
                Continue
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <div className="flex size-10 items-center justify-center bg-muted">
              <BadgePercentIcon className="size-5" />
            </div>
            <DialogHeader>
              <DialogTitle>Before you go: 40% off for 3 months</DialogTitle>
              <DialogDescription>
                Stay on Designali Pro for $14/mo instead of $24/mo. You can still cancel
                later.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose render={<Button variant="destructive" />}>
                Cancel anyway
              </DialogClose>
              <DialogClose render={<Button />}>Claim offer</DialogClose>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
