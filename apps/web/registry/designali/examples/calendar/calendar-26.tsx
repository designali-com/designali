"use client"

import * as React from "react"
import { format } from "date-fns"

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

const now = new Date()
const fyStart = now.getMonth() >= 3 ? now.getFullYear() : now.getFullYear() - 1
const start = new Date(fyStart, 3, 1)
const end = new Date(fyStart + 1, 2, 31)

export default function FiscalYearExpenseDate() {
  const [date, setDate] = React.useState<undefined | Date>()

  return (
    <Card size="sm" className="w-fit">
      <CardHeader>
        <CardTitle>Expense date</CardTitle>
        <CardDescription>
          {format(start, "MMM yyyy")} - {format(end, "MMM yyyy")}
        </CardDescription>
        <CardAction>
          <Badge variant="secondary">FY{String(fyStart + 1).slice(2)}</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          captionLayout="dropdown-months"
          selected={date}
          onSelect={setDate}
          startMonth={start}
          endMonth={end}
          disabled={[{ before: start }, { after: end }]}
          className="p-0"
        />
      </CardContent>
    </Card>
  )
}
