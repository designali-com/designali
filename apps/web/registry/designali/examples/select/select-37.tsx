import { ButtonGroup } from "@workspace/ui/components/button-group"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

const units = [
  { label: "kg", value: "kg" },
  { label: "lb", value: "lb" },
  { label: "oz", value: "oz" },
]

export default function WeightUnitSelect() {
  return (
    <Field className="w-full max-w-60">
      <FieldLabel htmlFor="weight">Package weight</FieldLabel>
      <ButtonGroup className="w-full">
        <Input
          id="weight"
          type="number"
          defaultValue="2.4"
          step="0.1"
          className="flex-1"
        />
        <Select items={units} defaultValue="kg">
          <SelectTrigger className="w-20" aria-label="Unit">
            <SelectValue />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false} align="end">
            {units.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </ButtonGroup>
      <FieldDescription>Include packaging for accurate rates.</FieldDescription>
    </Field>
  )
}
