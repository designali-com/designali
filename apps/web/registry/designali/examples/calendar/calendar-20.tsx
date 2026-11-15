"use client"

import * as React from "react"
import { arSA } from "react-day-picker/locale"

import { Calendar } from "@workspace/ui/components/calendar"

export default function ArabicRtlCalendar() {
  const [date, setDate] = React.useState<undefined | Date>(() => new Date())

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-2">
      <Calendar
        mode="single"
        dir="rtl"
        locale={arSA}
        numerals="arab"
        selected={date}
        onSelect={setDate}
        className="border"
      />
      <span className="text-xs text-muted-foreground">
        Right-to-left layout · Arabic numerals
      </span>
    </div>
  )
}
