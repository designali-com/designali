import { ClockIcon } from "lucide-react"

import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const slots = Array.from({ length: 48 }, (_, index) => {
  const hours = Math.floor(index / 2)
  const minutes = index % 2 === 0 ? "00" : "30"
  const period = hours < 12 ? "AM" : "PM"
  const display =
    (hours % 12 === 0 ? 12 : hours % 12) + ":" + minutes + " " + period
  return {
    label: display,
    value: String(hours).padStart(2, "0") + ":" + minutes,
  }
})

export default function MeetingTimeSelect() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex flex-col">
        <span className="text-sm font-medium">Design review</span>
        <span className="text-xs text-muted-foreground">
          Thursday, March 12 - 45 min
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Field>
          <FieldLabel htmlFor="start-time">Start</FieldLabel>
          <Select items={slots} defaultValue="10:00">
            <SelectTrigger id="start-time" className="w-full">
              <ClockIcon className="text-muted-foreground" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {slots.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="end-time">End</FieldLabel>
          <Select items={slots} defaultValue="10:30">
            <SelectTrigger id="end-time" className="w-full">
              <ClockIcon className="text-muted-foreground" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {slots.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>
    </div>
  )
}
