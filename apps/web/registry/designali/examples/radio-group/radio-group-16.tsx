import {
  Calendar as CalendarIcon,
} from "@designali/icons"

import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const slots = [
  { value: "08", label: "8-10 AM", full: false },
  { value: "10", label: "10-12 PM", full: true },
  { value: "12", label: "12-2 PM", full: false },
  { value: "14", label: "2-4 PM", full: false },
  { value: "16", label: "4-6 PM", full: true },
  { value: "18", label: "6-8 PM", full: false },
]

export default function DeliveryTimeSlots() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <p className="flex items-center gap-2 text-sm font-medium">
        <CalendarIcon className="size-4" />
        Saturday, Nov 22
      </p>
      <RadioGroup defaultValue="12" className="grid grid-cols-3 gap-2">
        {slots.map((slot) => (
          <label
            key={slot.value}
            htmlFor={"slot-" + slot.value}
            className="flex cursor-pointer flex-col items-center gap-0.5 border px-2 py-2.5 text-sm has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-checked:border-primary has-data-checked:bg-primary/5"
          >
            <RadioGroupItem
              value={slot.value}
              id={"slot-" + slot.value}
              disabled={slot.full}
              className="sr-only"
            />
            <span className="font-medium">{slot.label}</span>
            <span className="text-[11px] text-muted-foreground">
              {slot.full ? "Full" : "$3.99"}
            </span>
          </label>
        ))}
      </RadioGroup>
    </div>
  )
}
