import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@workspace/ui/components/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { cn } from "@workspace/ui/lib/utils"

const models = [
  {
    value: "swift",
    label: "Swift",
    hint: "Fast replies for quick questions",
    speed: 3,
    depth: 1,
  },
  {
    value: "balanced",
    label: "Balanced",
    hint: "Good for everyday writing",
    speed: 2,
    depth: 2,
  },
  {
    value: "deep",
    label: "Deep think",
    hint: "Slower, best for analysis",
    speed: 1,
    depth: 3,
  },
]

function Meter({ value }: { value: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={cn("h-2 w-1", n <= value ? "bg-foreground" : "bg-muted")}
        />
      ))}
    </span>
  )
}

export default function AssistantModelSelect() {
  return (
    <RadioGroup defaultValue="balanced" className="w-full max-w-sm">
      {models.map((m) => (
        <FieldLabel key={m.value} htmlFor={"model-" + m.value}>
          <Field orientation="horizontal">
            <RadioGroupItem value={m.value} id={"model-" + m.value} />
            <FieldContent>
              <FieldTitle>{m.label}</FieldTitle>
              <FieldDescription>{m.hint}</FieldDescription>
            </FieldContent>
            <div className="flex flex-col items-end gap-1 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                Speed <Meter value={m.speed} />
              </span>
              <span className="flex items-center gap-1.5">
                Depth <Meter value={m.depth} />
              </span>
            </div>
          </Field>
        </FieldLabel>
      ))}
    </RadioGroup>
  )
}
