"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

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

const features = [
  "Unlimited projects",
  "Up to 25 editors",
  "Version history (90 days)",
  "Priority email support",
  "SSO with Google and Okta",
]

export default function PricingPlanCard() {
  const [yearly, setYearly] = React.useState(true)
  const price = yearly ? 24 : 29

  return (
    <Card className="w-full max-w-xs ring-2 ring-primary">
      <CardHeader>
        <CardTitle>Team</CardTitle>
        <CardDescription>For growing product teams.</CardDescription>
        <CardAction>
          <Badge>Most popular</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-end gap-1">
          <span className="text-3xl font-semibold tabular-nums">
            {"$" + price}
          </span>
          <span className="pb-1 text-muted-foreground">per editor / month</span>
        </div>
        <label className="flex items-center gap-2 text-xs">
          <Switch checked={yearly} onCheckedChange={setYearly} />
          Billed yearly{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
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
