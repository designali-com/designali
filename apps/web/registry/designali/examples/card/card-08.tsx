"use client"

import * as React from "react"
import {
  Check as CheckIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Switch } from "@workspace/ui/components/switch"

import { CounterNumber } from "@/registry/designali/ui/counter-number"

const features = [
  "All 460+ blocks and 240+ pages",
  "Up to 25 team seats",
  "4000+ icons and logos",
  "Priority support from Ali Imam",
  "Figma source files",
]

export default function PricingPlanCard() {
  const [yearly, setYearly] = React.useState(true)
  const price = yearly ? 24 : 29

  return (
    <Card className="w-full max-w-xs ring-2 ring-primary">
      <CardHeader>
        <CardTitle>Designali Team</CardTitle>
        <CardDescription>For studios shipping design to code.</CardDescription>
        <CardAction>
          <Badge>Most popular</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-end gap-1">
          <CounterNumber
            value={price}
            startValue={price}
            prefix="$"
            size="lg"
            className="font-semibold tracking-normal"
          />
          <span className="pb-1 text-muted-foreground">per seat / month</span>
        </div>
        <label className="flex items-center gap-2 text-xs">
          <Switch checked={yearly} onCheckedChange={setYearly} />
          Billed yearly{" "}
          <span className="text-primary dark:text-primary">
            save 17%
          </span>
        </label>
        <ul className="grid gap-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <CheckIcon className="size-3.5 text-primary" />
              {f}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Upgrade to Team</Button>
      </CardFooter>
    </Card>
  )
}
