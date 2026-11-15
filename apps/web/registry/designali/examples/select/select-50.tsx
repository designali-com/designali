import { ActivityIcon } from "lucide-react"

import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const intervals = {
  "1m": "Every minute",
  "5m": "Every 5 minutes",
  "15m": "Every 15 minutes",
  "1h": "Every hour",
}

export default function RecordItemsSelect() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <ActivityIcon className="size-4 text-emerald-500" />
        <span className="text-sm font-medium">api.fieldnote.app/health</span>
      </div>
      <Field orientation="horizontal" className="justify-between">
        <FieldLabel htmlFor="interval">Check interval</FieldLabel>
        <Select items={intervals} defaultValue="5m">
          <SelectTrigger id="interval" className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(intervals).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
    </div>
  )
}
