import { Button } from "@workspace/ui/components/button"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const ranges = [
  { value: "any", label: "Any price", count: 248 },
  { value: "0-25", label: "Under $25", count: 64 },
  { value: "25-50", label: "$25 to $50", count: 92 },
  { value: "50-100", label: "$50 to $100", count: 71 },
  { value: "100+", label: "$100 and up", count: 21 },
]

export default function PriceRangeFilter() {
  return (
    <div className="flex w-full max-w-60 flex-col gap-3 border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Price</span>
        <Button variant="link" size="xs" className="h-auto p-0">
          Clear
        </Button>
      </div>
      <RadioGroup defaultValue="any" className="gap-2.5">
        {ranges.map((r) => (
          <Field key={r.value} orientation="horizontal">
            <RadioGroupItem value={r.value} id={"price-" + r.value} />
            <FieldLabel htmlFor={"price-" + r.value} className="font-normal">
              {r.label}
            </FieldLabel>
            <span className="ms-auto text-xs text-muted-foreground tabular-nums">
              {r.count}
            </span>
          </Field>
        ))}
      </RadioGroup>
    </div>
  )
}
