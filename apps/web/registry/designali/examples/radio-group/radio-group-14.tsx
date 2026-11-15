import { FieldLegend, FieldSet } from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"

const scale = [
  { value: "1", label: "Strongly disagree" },
  { value: "2", label: "Disagree" },
  { value: "3", label: "Neutral" },
  { value: "4", label: "Agree" },
  { value: "5", label: "Strongly agree" },
]

export default function LikertAgreementScale() {
  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend variant="label">
        The onboarding made it easy to get started.
      </FieldLegend>
      <RadioGroup defaultValue="4" className="grid grid-cols-5 gap-1">
        {scale.map((s) => (
          <label
            key={s.value}
            htmlFor={"likert-" + s.value}
            className="flex cursor-pointer flex-col items-center gap-2 text-center"
          >
            <RadioGroupItem value={s.value} id={"likert-" + s.value} />
            <span className="text-[11px] leading-tight text-muted-foreground">
              {s.label}
            </span>
          </label>
        ))}
      </RadioGroup>
    </FieldSet>
  )
}
