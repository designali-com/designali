import {
  Calendar as CalendarIcon,
} from "@designali/icons"

import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function DateRangeLabels() {
  return (
    <div className="grid w-full max-w-sm grid-cols-2 gap-3">
      <div className="grid gap-2">
        <Label htmlFor="check-in">
          <CalendarIcon className="size-3.5" />
          Check-in
        </Label>
        <Input id="check-in" type="date" defaultValue="2026-12-18" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="check-out">
          <CalendarIcon className="size-3.5" />
          Check-out
        </Label>
        <Input id="check-out" type="date" defaultValue="2026-12-22" />
      </div>
    </div>
  )
}
