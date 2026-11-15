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

const codes = [
  { label: "+1", value: "us", country: "United States" },
  { label: "+44", value: "uk", country: "United Kingdom" },
  { label: "+49", value: "de", country: "Germany" },
  { label: "+61", value: "au", country: "Australia" },
  { label: "+81", value: "jp", country: "Japan" },
]

export default function PhoneCountryCodeSelect() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="phone">Phone number</FieldLabel>
      <ButtonGroup className="w-full">
        <Select items={codes} defaultValue="uk">
          <SelectTrigger className="w-20" aria-label="Country code">
            <SelectValue />
          </SelectTrigger>
          <SelectContent
            alignItemWithTrigger={false}
            align="start"
            className="min-w-52"
          >
            {codes.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                <span className="w-8 tabular-nums">{item.label}</span>
                <span className="text-muted-foreground">{item.country}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          id="phone"
          type="tel"
          placeholder="7700 900123"
          className="flex-1"
        />
      </ButtonGroup>
      <FieldDescription>
        We&apos;ll text a code to verify this number.
      </FieldDescription>
    </Field>
  )
}
