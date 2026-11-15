import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { cn } from "@workspace/ui/lib/utils"

const sizes = [
  {
    value: "sm",
    label: "Small",
    item: "size-3.5 [&_[data-slot=radio-group-indicator]]:size-3.5 [&_[data-slot=radio-group-indicator]_span]:size-1.5",
    text: "text-xs",
  },
  { value: "md", label: "Default", item: "", text: "text-sm" },
  {
    value: "lg",
    label: "Large",
    item: "size-5 [&_[data-slot=radio-group-indicator]]:size-5 [&_[data-slot=radio-group-indicator]_span]:size-2.5",
    text: "text-base",
  },
]

export default function RadioItemSizes() {
  return (
    <RadioGroup defaultValue="md" className="w-fit gap-4">
      {sizes.map((s) => (
        <Field key={s.value} orientation="horizontal">
          <RadioGroupItem
            value={s.value}
            id={"rsize-" + s.value}
            className={s.item}
          />
          <FieldLabel
            htmlFor={"rsize-" + s.value}
            className={cn("font-normal", s.text)}
          >
            {s.label}
          </FieldLabel>
        </Field>
      ))}
    </RadioGroup>
  )
}
