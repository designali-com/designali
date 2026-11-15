import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

const sizes = [
  {
    label: "Small",
    className: "min-h-12 px-2 py-1.5 text-[11px] md:text-[11px]",
  },
  { label: "Default", className: "" },
  { label: "Large", className: "min-h-24 px-3 py-2.5 text-sm md:text-sm" },
]

export default function TextareaSizes() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      {sizes.map((s) => (
        <div key={s.label} className="grid gap-1">
          <Label
            htmlFor={"ta-size-" + s.label}
            className="text-muted-foreground"
          >
            {s.label}
          </Label>
          <Textarea
            id={"ta-size-" + s.label}
            className={s.className}
            placeholder="Leave a note for the courier"
          />
        </div>
      ))}
    </div>
  )
}
