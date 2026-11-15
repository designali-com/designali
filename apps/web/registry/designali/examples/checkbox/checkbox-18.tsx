import { Checkbox } from "@workspace/ui/components/checkbox"
import { cn } from "@workspace/ui/lib/utils"

const labels = [
  {
    name: "Bug",
    color: "data-checked:bg-chart-1 data-checked:border-chart-1 border-chart-1",
  },
  {
    name: "Feature",
    color: "data-checked:bg-chart-2 data-checked:border-chart-2 border-chart-2",
  },
  {
    name: "Docs",
    color: "data-checked:bg-chart-3 data-checked:border-chart-3 border-chart-3",
  },
  {
    name: "Design",
    color: "data-checked:bg-chart-4 data-checked:border-chart-4 border-chart-4",
  },
  {
    name: "Infra",
    color: "data-checked:bg-chart-5 data-checked:border-chart-5 border-chart-5",
  },
]

export default function LabelColorCheckboxes() {
  return (
    <div className="flex w-full max-w-[12rem] flex-col gap-1 border p-2">
      <span className="px-2 py-1 text-xs text-muted-foreground">
        Filter by label
      </span>
      {labels.map((label, index) => (
        <label
          key={label.name}
          className="flex cursor-pointer items-center gap-2 px-2 py-1.5 text-sm hover:bg-muted"
        >
          <Checkbox
            defaultChecked={index < 2}
            className={cn("data-checked:text-background", label.color)}
          />
          {label.name}
        </label>
      ))}
    </div>
  )
}
