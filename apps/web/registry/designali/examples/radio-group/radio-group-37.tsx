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
import { cn } from "@workspace/ui/lib/utils"

const priorities = [
  { value: "low", label: "Low", dot: "bg-muted-foreground" },
  { value: "medium", label: "Medium", dot: "bg-sky-500" },
  { value: "high", label: "High", dot: "bg-amber-500" },
  { value: "urgent", label: "Urgent", dot: "bg-destructive" },
]

export default function TicketPriorityPicker() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend variant="label">Priority</FieldLegend>
      <RadioGroup defaultValue="medium" className="grid grid-cols-2 gap-2">
        {priorities.map((p) => (
          <FieldLabel key={p.value} htmlFor={"prio-" + p.value}>
            <Field orientation="horizontal">
              <RadioGroupItem value={p.value} id={"prio-" + p.value} />
              <span className={cn("size-2", p.dot)} />
              <span className="text-sm">{p.label}</span>
            </Field>
          </FieldLabel>
        ))}
      </RadioGroup>
      <FieldDescription>
        Urgent tickets page the on-call engineer.
      </FieldDescription>
    </FieldSet>
  )
}
