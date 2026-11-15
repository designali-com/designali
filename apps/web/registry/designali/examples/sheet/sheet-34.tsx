"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const plans = [
  { value: "starter", name: "Starter", price: 12, hint: "Up to 3 projects" },
  {
    value: "team",
    name: "Team",
    price: 39,
    hint: "Unlimited projects, 10 seats",
  },
  {
    value: "scale",
    name: "Scale",
    price: 99,
    hint: "SSO, audit logs, priority support",
  },
]

export default function ChangePlanSheet() {
  const [plan, setPlan] = React.useState("team")
  const selected = plans.find((p) => p.value === plan)!
  const diff = selected.price - 39

  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Change plan
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Change plan</SheetTitle>
          <SheetDescription>
            You&apos;re currently on Team, billed monthly.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-4">
          <RadioGroup value={plan} onValueChange={(v) => setPlan(v as string)}>
            {plans.map((p) => (
              <Label
                key={p.value}
                className="items-start gap-3 border p-3 font-normal has-data-checked:border-primary"
              >
                <RadioGroupItem value={p.value} />
                <span className="flex flex-1 flex-col">
                  <span className="font-medium">{p.name}</span>
                  <span className="text-muted-foreground">{p.hint}</span>
                </span>
                <span className="font-medium">${p.price}/mo</span>
              </Label>
            ))}
          </RadioGroup>
          <div className="bg-muted p-3 text-muted-foreground">
            {diff === 0
              ? "No change to your bill."
              : diff > 0
                ? "You'll be charged a prorated $" +
                  (diff / 2).toFixed(2) +
                  " today."
                : "You'll receive a $" +
                  (Math.abs(diff) / 2).toFixed(2) +
                  " credit on your next invoice."}
          </div>
        </div>
        <SheetFooter>
          <Button disabled={plan === "team"}>Confirm change</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
