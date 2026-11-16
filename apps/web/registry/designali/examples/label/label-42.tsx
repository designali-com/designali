import { Label } from "@workspace/ui/components/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { cn } from "@workspace/ui/lib/utils"

const times = [
  "9:00",
  "9:30",
  "10:00",
  "11:30",
  "13:00",
  "14:30",
  "15:00",
  "16:30",
]
const taken = new Set(["10:00", "14:30"])

export default function TimeSlotLabels() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <span className="text-xs font-medium">Book a call with Ali Imam - Thursday, Dec 4</span>
      <RadioGroup defaultValue="11:30" className="grid grid-cols-4 gap-2">
        {times.map((time) => (
          <Label
            key={time}
            htmlFor={"slot-" + time}
            className={cn(
              "justify-center border py-2 tabular-nums hover:bg-muted has-data-checked:border-primary has-data-checked:bg-primary has-data-checked:text-primary-foreground",
              taken.has(time) && "pointer-events-none line-through opacity-40"
            )}
          >
            <RadioGroupItem
              id={"slot-" + time}
              value={time}
              disabled={taken.has(time)}
              className="sr-only"
            />
            {time}
          </Label>
        ))}
      </RadioGroup>
    </div>
  )
}
