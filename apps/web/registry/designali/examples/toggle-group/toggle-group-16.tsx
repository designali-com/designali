import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import { cn } from "@workspace/ui/lib/utils"

const sizes = [
  { value: "xs", soldOut: false },
  { value: "s", soldOut: false },
  { value: "m", soldOut: false },
  { value: "l", soldOut: true },
  { value: "xl", soldOut: false },
  { value: "xxl", soldOut: true },
]

export default function ApparelSizeSelector() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">Size</span>
        <a
          href="#"
          className="text-xs text-muted-foreground underline underline-offset-4"
        >
          Size guide
        </a>
      </div>
      <ToggleGroup
        variant="outline"
        spacing={1}
        defaultValue={["m"]}
        className="flex-wrap"
      >
        {sizes.map((s) => (
          <ToggleGroupItem
            key={s.value}
            value={s.value}
            disabled={s.soldOut}
            className={cn("w-11 uppercase", s.soldOut && "line-through")}
          >
            {s.value}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  )
}
