import { Badge } from "@workspace/ui/components/badge"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"

export default function DisabledItemToggleGroup() {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium">Export quality</span>
      <ToggleGroup variant="outline" defaultValue={["1080p"]}>
        <ToggleGroupItem value="720p">720p</ToggleGroupItem>
        <ToggleGroupItem value="1080p">1080p</ToggleGroupItem>
        <ToggleGroupItem value="4k" disabled>
          4K
          <Badge className="ms-1">Pro</Badge>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
