"use client"

import * as React from "react"
import {
  MapPin as MapPinIcon,
} from "@designali/icons"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Slider } from "@workspace/ui/components/slider"

export default function DeliveryRadiusSlider() {
  const [radius, setRadius] = React.useState([5])
  const r = radius[0]!

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPinIcon className="size-4" />
          Delivery radius
        </CardTitle>
        <CardDescription>
          Orders outside this area are hidden from the menu.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-end justify-between">
          <span className="text-3xl font-semibold tabular-nums">
            {r}
            <span className="text-base font-normal text-muted-foreground">
              {" "}
              km
            </span>
          </span>
          <span className="text-xs text-muted-foreground">
            ~{Math.round(r * r * 410).toLocaleString()} households
          </span>
        </div>
        <Slider
          aria-label="Delivery radius"
          value={radius}
          onValueChange={(value) => setRadius(value as number[])}
          min={1}
          max={15}
          step={0.5}
        />
      </CardContent>
    </Card>
  )
}
