"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const cycles = [
  { label: "Monthly", value: "monthly", price: 20, note: "Billed every month" },
  { label: "Quarterly", value: "quarterly", price: 18, note: "Save 10%" },
  { label: "Yearly", value: "yearly", price: 16, note: "Save 20%" },
]

export default function BillingCycleSelect() {
  const [cycle, setCycle] = React.useState<string | null>("yearly")
  const current = cycles.find((item) => item.value === cycle) ?? cycles[0]!

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Studio plan</CardTitle>
        <CardDescription>For small creative teams.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-semibold">{"$" + current.price}</span>
          <span className="text-sm text-muted-foreground">
            per seat / month
          </span>
        </div>
        <Select items={cycles} value={cycle} onValueChange={setCycle}>
          <SelectTrigger className="w-full" aria-label="Billing cycle">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {cycles.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
                <span className="ms-auto ps-4 text-muted-foreground">
                  {item.note}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Upgrade</Button>
      </CardFooter>
    </Card>
  )
}
