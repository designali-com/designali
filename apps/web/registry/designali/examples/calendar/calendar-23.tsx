"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { type DateRange } from "react-day-picker"
import {
  Plane as PlaneIcon,
} from "@designali/icons"

import { Calendar } from "@workspace/ui/components/calendar"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

const today = new Date()

export default function FlightTripDates() {
  const [departure, setDeparture] = React.useState<undefined | Date>(
    addDays(today, 14)
  )
  const [trip, setTrip] = React.useState<DateRange | undefined>({
    from: addDays(today, 14),
    to: addDays(today, 21),
  })

  return (
    <Card className="w-fit max-w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PlaneIcon className="size-4 text-muted-foreground" />
          Designali client workshop trip
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="round">
          <TabsList>
            <TabsTrigger value="round">Round trip</TabsTrigger>
            <TabsTrigger value="oneway">One way</TabsTrigger>
          </TabsList>
          <TabsContent value="round" className="flex flex-col gap-2">
            <Calendar
              mode="range"
              numberOfMonths={2}
              pagedNavigation
              selected={trip}
              onSelect={setTrip}
              defaultMonth={trip?.from}
              disabled={{ before: today }}
              className="p-0"
            />
            <p className="text-xs text-muted-foreground">
              {trip?.from && trip?.to
                ? "Depart " +
                  format(trip.from, "EEE, MMM d") +
                  " · Return " +
                  format(trip.to, "EEE, MMM d")
                : "Select departure and return"}
            </p>
          </TabsContent>
          <TabsContent value="oneway" className="flex flex-col gap-2">
            <Calendar
              mode="single"
              selected={departure}
              onSelect={setDeparture}
              defaultMonth={departure}
              disabled={{ before: today }}
              className="p-0"
            />
            <p className="text-xs text-muted-foreground">
              {departure
                ? "Depart " + format(departure, "EEE, MMM d")
                : "Select departure"}
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
