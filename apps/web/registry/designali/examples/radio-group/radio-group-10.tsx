import { Badge } from "@workspace/ui/components/badge"
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const regions = [
  { value: "us-east", label: "US East (Virginia)", available: true },
  { value: "eu-west", label: "EU West (Dublin)", available: true },
  { value: "ap-south", label: "Asia Pacific (Mumbai)", available: false },
]

export default function ComingSoonOptionDisabled() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Data region</FieldLegend>
      <FieldDescription>Where your workspace data is stored.</FieldDescription>
      <RadioGroup defaultValue="eu-west">
        {regions.map((region) => (
          <Field
            key={region.value}
            orientation="horizontal"
            data-disabled={!region.available || undefined}
          >
            <RadioGroupItem
              value={region.value}
              id={"region-" + region.value}
              disabled={!region.available}
            />
            <FieldLabel
              htmlFor={"region-" + region.value}
              className="font-normal"
            >
              {region.label}
            </FieldLabel>
            {!region.available && <Badge variant="outline">Coming soon</Badge>}
          </Field>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}
