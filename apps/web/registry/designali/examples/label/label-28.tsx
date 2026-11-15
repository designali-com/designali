import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"

const tags = [
  "Remote",
  "Full-time",
  "Contract",
  "Senior",
  "Design",
  "Engineering",
]

export default function FilterChipLabels() {
  return (
    <div className="flex w-full max-w-sm flex-wrap gap-2">
      {tags.map((tag, i) => (
        <Label
          key={tag}
          htmlFor={"chip-" + i}
          className="cursor-pointer border px-3 py-1.5 transition-colors hover:bg-muted has-data-checked:border-primary has-data-checked:bg-primary has-data-checked:text-primary-foreground"
        >
          <Checkbox
            id={"chip-" + i}
            defaultChecked={i < 2}
            className="sr-only"
          />
          {tag}
        </Label>
      ))}
    </div>
  )
}
