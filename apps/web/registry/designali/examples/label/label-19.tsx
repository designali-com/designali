import { Label } from "@workspace/ui/components/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@workspace/ui/components/radio-group"
import { cn } from "@workspace/ui/lib/utils"

const colors = [
  { value: "designali-blue", className: "bg-primary" },
  { value: "chart-2", className: "bg-chart-2" },
  { value: "chart-3", className: "bg-chart-3" },
  { value: "chart-4", className: "bg-chart-4" },
  { value: "muted", className: "bg-muted-foreground" },
]

export default function ColorSwatchLabels() {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-medium">Designali theme accent</span>
      <RadioGroup defaultValue="designali-blue" className="flex gap-2">
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
