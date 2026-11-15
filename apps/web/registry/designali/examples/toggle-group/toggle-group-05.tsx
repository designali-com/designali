import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const sizes = ["sm", "default", "lg"] as const

export default function ToggleGroupSizeScale() {
  return (
    <div className="flex flex-col items-center gap-3">
      {sizes.map((size) => (
        <div key={size} className="flex items-center gap-3">
          <span className="w-14 text-end text-xs text-muted-foreground">
            {size}
          </span>
          <ToggleGroup variant="outline" size={size} defaultValue={["day"]}>
            <ToggleGroupItem value="day">Day</ToggleGroupItem>
            <ToggleGroupItem value="week">Week</ToggleGroupItem>
            <ToggleGroupItem value="month">Month</ToggleGroupItem>
          </ToggleGroup>
        </div>
      ))}
    </div>
  )
}
