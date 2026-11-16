import {
  ListChecks as ListChecksIcon,
  List as ListIcon,
  ListOrdered as ListOrderedIcon,
} from "@designali/icons"

import { Kbd } from "@workspace/ui/components/kbd"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@workspace/ui/components/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"

const items = [
  { value: "bullet", label: "Bulleted list", keys: "⌘⇧8", icon: ListIcon },
  {
    value: "number",
    label: "Numbered list",
    keys: "⌘⇧7",
    icon: ListOrderedIcon,
  },
  { value: "check", label: "Checklist", keys: "⌘⇧9", icon: ListChecksIcon },
]

export default function ToggleGroupWithTooltips() {
  return (
    <TooltipProvider>
      <ToggleGroup variant="outline" spacing={0} defaultValue={["bullet"]}>
        {items.map((item) => (
          <Tooltip key={item.value}>
            <TooltipTrigger
              render={
                <ToggleGroupItem value={item.value} aria-label={item.label} />
              }
            >
              <item.icon />
            </TooltipTrigger>
            <TooltipContent>
              {item.label}
              <Kbd>{item.keys}</Kbd>
            </TooltipContent>
          </Tooltip>
        ))}
      </ToggleGroup>
    </TooltipProvider>
  )
}
