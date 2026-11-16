import {
  Server as ServerIcon,
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

const regions = [
  { label: "US East (Virginia)", value: "us-east", available: true },
  { label: "US West (Oregon)", value: "us-west", available: true },
  { label: "EU Central (Frankfurt)", value: "eu-central", available: true },
  { label: "AP South (Mumbai)", value: "ap-south", available: false },
  { label: "SA East (Sao Paulo)", value: "sa-east", available: false },
]

export default function DataRegionSelect() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="region">Data region</FieldLabel>
      <Select items={regions} defaultValue="eu-central">
        <SelectTrigger id="region" className="w-full">
          <ServerIcon className="text-muted-foreground" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {regions.map((item) => (
            <SelectItem
              key={item.value}
              value={item.value}
              disabled={!item.available}
            >
              {item.label}
              {!item.available && (
                <Badge variant="outline" className="ms-auto">
                  Soon
                </Badge>
              )}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldDescription>
        Region cannot be changed after the project is created.
      </FieldDescription>
    </Field>
  )
}
