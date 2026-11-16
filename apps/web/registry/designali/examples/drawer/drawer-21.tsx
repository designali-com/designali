"use client"

import * as React from "react"
import {
  Calendar as CalendarIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Calendar } from "@workspace/ui/components/calendar"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@workspace/ui/components/drawer"

const initialDate: Date | undefined = new Date(2026, 10, 20)

export default function DatePickerDrawer() {
  const [date, setDate] = React.useState(initialDate)
  const label = date
    ? date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Pick a date"

  return (
    <Drawer>
      <DrawerTrigger
        render={
          <Button variant="outline" className="w-full max-w-60 justify-start" />
        }
      >
        <CalendarIcon data-icon="inline-start" />
        {label}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-xs flex-col">
          <DrawerHeader>
            <DrawerTitle>Kickoff date</DrawerTitle>
            <DrawerDescription>Designali project kickoff</DrawerDescription>
          </DrawerHeader>
          <div className="flex justify-center p-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border"
            />
          </div>
          <DrawerFooter>
            <DrawerClose render={<Button disabled={!date} />}>
              Confirm {date ? label : ""}
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
