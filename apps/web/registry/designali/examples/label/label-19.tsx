import { Label } from "@workspace/ui/components/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { cn } from "@workspace/ui/lib/utils"

const colors = [
  { value: "indigo", className: "bg-indigo-500" },
  { value: "emerald", className: "bg-emerald-500" },
  { value: "amber", className: "bg-amber-500" },
  { value: "rose", className: "bg-rose-500" },
  { value: "slate", className: "bg-slate-500" },
]

export default function ColorSwatchLabels() {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-medium">Accent color</span>
      <RadioGroup defaultValue="indigo" className="flex gap-2">
        {colors.map((color) => (
          <Label
            key={color.value}
            htmlFor={"color-" + color.value}
            className="cursor-pointer p-0.5 ring-offset-2 ring-offset-background has-data-checked:ring-2 has-data-checked:ring-foreground"
          >
            <RadioGroupItem
              id={"color-" + color.value}
              value={color.value}
              className="sr-only"
            />
            <span className={cn("block size-7", color.className)} />
            <span className="sr-only">{color.value}</span>
          </Label>
        ))}
      </RadioGroup>
    </div>
  )
}
