"use client"

import * as React from "react"
import { addDays, format, isSameDay } from "date-fns"
import { XIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

const today = new Date()

export default function MeetingPollDates() {
  const [dates, setDates] = React.useState<Date[]>([
    addDays(today, 2),
    addDays(today, 4),
  ])
  const sorted = [...dates].sort((a, b) => a.getTime() - b.getTime())

  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Propose meeting dates</CardTitle>
        <CardDescription>
          Pick up to 5 options for the team to vote on.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3">
        <Calendar
          mode="multiple"
          max={5}
          selected={dates}
          onSelect={(next) => setDates(next ?? [])}
          disabled={{ before: today }}
          className="p-0"
        />
        <div className="flex min-h-6 w-full flex-wrap gap-1.5">
          {sorted.length === 0 ? (
            <span className="text-xs text-muted-foreground">
              No dates selected yet.
            </span>
          ) : null}
          {sorted.map((d) => (
            <Badge
              key={d.toISOString()}
              variant="secondary"
              className="gap-1 pe-1"
            >
              {format(d, "EEE, MMM d")}
              <button
                type="button"
                aria-label={"Remove " + format(d, "MMM d")}
                onClick={() => setDates(dates.filter((x) => !isSameDay(x, d)))}
                className="text-muted-foreground hover:text-foreground"
              >
                <XIcon className="size-3" />
              </button>
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-xs text-muted-foreground">
          {dates.length}/5 selected
        </span>
        <Button size="sm" disabled={dates.length < 2}>
          Send poll
        </Button>
      </CardFooter>
    </Card>
  )
}
