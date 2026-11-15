import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const options = [
  { value: "128", label: "128 GB", price: "$699" },
  { value: "256", label: "256 GB", price: "$799" },
  { value: "512", label: "512 GB", price: "$999" },
  { value: "1024", label: "1 TB", price: "$1,199" },
]

export default function StorageCapacityVariant() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Storage</FieldLegend>
      <RadioGroup defaultValue="256" className="grid grid-cols-2 gap-2">
        {options.map((o) => (
          <FieldLabel key={o.value} htmlFor={"cap-" + o.value}>
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>{o.label}</FieldTitle>
                <FieldDescription>From {o.price}</FieldDescription>
              </FieldContent>
              <RadioGroupItem value={o.value} id={"cap-" + o.value} />
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}
