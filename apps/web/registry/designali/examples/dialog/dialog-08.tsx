"use client"

import * as React from "react"
import {
  Sparkles as SparklesIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
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
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 0,
    detail: "Free blocks and icons, community support",
  },
  {
    id: "pro",
    name: "Pro",
    price: 24,
    detail: "All templates, blocks and UI designs",
  },
  {
    id: "team",
    name: "Team",
    price: 59,
    detail: "Team license, Figma files, priority support",
  },
]

export default function UpgradePlanDialog() {
  const [plan, setPlan] = React.useState("pro")
  const selected = plans.find((item) => item.id === plan) ?? plans[1]!

  return (
    <Dialog>
      <DialogTrigger render={<Button />}>
        <SparklesIcon data-icon="inline-start" />
        Upgrade
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Choose your plan</DialogTitle>
          <DialogDescription>
            You can change or cancel at any time.
          </DialogDescription>
        </DialogHeader>
        <RadioGroup
          value={plan}
          onValueChange={(value) => setPlan(String(value))}
          className="gap-2"
        >
          {plans.map((item) => (
            <FieldLabel key={item.id} htmlFor={"plan-" + item.id}>
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>
                    {item.name}
                    {item.id === "pro" && (
                      <Badge variant="secondary">Popular</Badge>
                    )}
                  </FieldTitle>
                  <FieldDescription>{item.detail}</FieldDescription>
                </FieldContent>
                <span className="font-medium tabular-nums">
                  {"$" + item.price}/mo
                </span>
                <RadioGroupItem value={item.id} id={"plan-" + item.id} />
              </Field>
            </FieldLabel>
          ))}
        </RadioGroup>
        <DialogFooter className="items-center sm:justify-between">
          <p className="text-muted-foreground">
            Billed monthly:{" "}
            <span className="font-medium text-foreground">
              {"$" + selected.price}
            </span>
          </p>
          <DialogClose render={<Button disabled={plan === "starter"} />}>
            Continue to checkout
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
