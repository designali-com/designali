"use client"

import * as React from "react"
import {
  Pause as PauseIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Switch } from "@workspace/ui/components/switch"

export default function BookingsPausedToggle() {
  const [paused, setPaused] = React.useState(true)
  const [date, setDate] = React.useState<undefined | Date>()

  return (
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>designali.com/contact booking page</CardTitle>
        <CardDescription>
          {paused
            ? "Guests can't pick a date right now."
            : "Accepting new bookings."}
        </CardDescription>
        <CardAction>
          <Switch
            checked={!paused}
            onCheckedChange={(on) => setPaused(!on)}
            aria-label="Accept bookings"
          />
        </CardAction>
      </CardHeader>
      <CardContent className="relative">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={paused}
          className="p-0"
        />
        {paused ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Badge variant="secondary" className="gap-1">
              <PauseIcon className="size-3" />
              Bookings paused
            </Badge>
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
