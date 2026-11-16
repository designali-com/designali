import {
  Lock as LockIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const retention = [
  { label: "30 days", value: "30" },
  { label: "90 days", value: "90" },
  { label: "1 year", value: "365" },
]

export default function DisabledPlanSelect() {
  return (
    <Field className="w-full max-w-xs">
      <div className="flex items-center justify-between">
        <FieldLabel htmlFor="retention">Log retention</FieldLabel>
        <Badge variant="secondary">
          <LockIcon />
          Pro
        </Badge>
      </div>
      <Select items={retention} defaultValue="30" disabled>
        <SelectTrigger id="retention" className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {retention.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldDescription>
        Upgrade to Pro to keep logs for up to a year.
      </FieldDescription>
    </Field>
  )
}
