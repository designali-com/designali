"use client"

import * as React from "react"
import { format } from "date-fns"
import { type DateRange } from "react-day-picker"

import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
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
import { Textarea } from "@workspace/ui/components/textarea"
import { cn } from "@workspace/ui/lib/utils"

export default function OutOfOfficeSettings() {
  const [enabled, setEnabled] = React.useState(false)
  const [range, setRange] = React.useState<DateRange | undefined>()

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Out of office</CardTitle>
        <CardDescription>
          {enabled && range?.from && range?.to
            ? "Away " +
              format(range.from, "MMM d") +
              " - " +
              format(range.to, "MMM d")
            : "Let teammates know when you're away."}
        </CardDescription>
        <CardAction>
          <Switch
            checked={enabled}
            onCheckedChange={setEnabled}
            aria-label="Enable out of office"
          />
        </CardAction>
      </CardHeader>
      <CardContent
        className={cn(
          "flex flex-col gap-3 transition-opacity",
          !enabled && "opacity-50"
        )}
      >
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          disabled={!enabled}
          className="self-center p-0"
        />
        <Textarea
          disabled={!enabled}
          placeholder="I'm away with limited access to email. For urgent issues contact hello@designali.com."
          className="min-h-16 text-xs"
        />
      </CardContent>
      <CardFooter className="justify-end">
        <Button size="sm" disabled={!enabled || !range?.to}>
          Save
        </Button>
      </CardFooter>
    </Card>
  )
}
