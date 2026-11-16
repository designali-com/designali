import {
  Globe as GlobeIcon,
} from "@designali/icons"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const regions = [
  {
    label: "Americas",
    zones: [
      { label: "Los Angeles", value: "america-la", offset: "UTC-8" },
      { label: "Chicago", value: "america-chicago", offset: "UTC-6" },
      { label: "New York", value: "america-ny", offset: "UTC-5" },
      { label: "Sao Paulo", value: "america-sp", offset: "UTC-3" },
    ],
  },
  {
    label: "Europe",
    zones: [
      { label: "London", value: "europe-london", offset: "UTC+0" },
      { label: "Berlin", value: "europe-berlin", offset: "UTC+1" },
      { label: "Athens", value: "europe-athens", offset: "UTC+2" },
    ],
  },
  {
    label: "Asia Pacific",
    zones: [
      { label: "Dubai", value: "asia-dubai", offset: "UTC+4" },
      { label: "Singapore", value: "asia-singapore", offset: "UTC+8" },
      { label: "Tokyo", value: "asia-tokyo", offset: "UTC+9" },
      { label: "Sydney", value: "australia-sydney", offset: "UTC+10" },
    ],
  },
]

const items = regions.flatMap((region) => region.zones)

export default function TimezoneSelect() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="timezone">Timezone</FieldLabel>
      <Select items={items} defaultValue="europe-berlin">
        <SelectTrigger id="timezone" className="w-full">
          <GlobeIcon className="text-muted-foreground" />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {regions.map((region, index) => (
            <SelectGroup key={region.label}>
              {index > 0 && <SelectSeparator />}
              <SelectLabel>{region.label}</SelectLabel>
              {region.zones.map((zone) => (
                <SelectItem key={zone.value} value={zone.value}>
                  {zone.label}
                  <span className="ms-auto text-muted-foreground tabular-nums">
                    {zone.offset}
                  </span>
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
      <FieldDescription>
        Used for scheduled reports and reminders.
      </FieldDescription>
    </Field>
  )
}
