"use client"

import * as React from "react"
import { UsersIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Slider } from "@workspace/ui/components/slider"
import { cn } from "@workspace/ui/lib/utils"

export default function SeatPricingSlider() {
  const [seats, setSeats] = React.useState([12])
  const n = seats[0]!
  const perSeat = n >= 50 ? 9 : n >= 20 ? 12 : 15

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Team plan</CardTitle>
        <CardDescription>Volume discounts apply automatically.</CardDescription>
        <CardAction>
          <Badge variant="outline">
            <UsersIcon />
            {n} seats
          </Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Slider
          aria-label="Seats"
          value={seats}
          onValueChange={(value) => setSeats(value as number[])}
          min={1}
          max={100}
        />
        <div className="grid grid-cols-3 text-center text-xs">
          {[
            { label: "1-19", price: 15 },
            { label: "20-49", price: 12 },
            { label: "50+", price: 9 },
          ].map((tier) => (
            <div
              key={tier.label}
              className={cn(
                "border py-2",
                tier.price === perSeat
                  ? "border-primary bg-primary/5"
                  : "text-muted-foreground"
              )}
            >
              <div>{tier.label}</div>
              <div className="font-medium">${tier.price}/seat</div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-between border-t">
        <span className="text-sm text-muted-foreground">Billed monthly</span>
        <span className="text-lg font-semibold tabular-nums">
          ${(n * perSeat).toLocaleString()}
        </span>
      </CardFooter>
    </Card>
  )
}
