import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

const rows = [
  { id: "h-name", label: "Full name", value: "Ali Imam" },
  { id: "h-role", label: "Job title", value: "Founder, Design Engineer" },
  { id: "h-loc", label: "Location", value: "Lisbon, Portugal" },
]

export default function HorizontalFormLabels() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      {rows.map((row) => (
        <div
          key={row.id}
          className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:items-center"
        >
          <Label
            htmlFor={row.id}
            className="text-muted-foreground sm:justify-end"
          >
            {row.label}
          </Label>
          <Input id={row.id} defaultValue={row.value} />
        </div>
      ))}
    </div>
  )
}
