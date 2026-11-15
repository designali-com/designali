import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

const spacings = [0, 2, 4]

export default function ToggleGroupSpacingVariants() {
  return (
    <div className="flex flex-col items-center gap-4">
      {spacings.map((spacing) => (
        <div key={spacing} className="flex flex-col items-center gap-1.5">
          <ToggleGroup variant="outline" spacing={spacing} defaultValue={["b"]}>
            <ToggleGroupItem value="a">Draft</ToggleGroupItem>
            <ToggleGroupItem value="b">Review</ToggleGroupItem>
            <ToggleGroupItem value="c">Published</ToggleGroupItem>
          </ToggleGroup>
          <span className="text-xs text-muted-foreground">
            spacing={spacing}
          </span>
        </div>
      ))}
    </div>
  )
}
