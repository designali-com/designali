import {
  BoldIcon,
  ChevronRightIcon,
  CodeIcon,
  HighlighterIcon,
  ItalicIcon,
  StrikethroughIcon,
  SubscriptIcon,
  UnderlineIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { Separator } from "@workspace/ui/components/separator"

const extra = [
  { label: "Strikethrough", icon: StrikethroughIcon },
  { label: "Code", icon: CodeIcon },
  { label: "Highlight", icon: HighlighterIcon },
  { label: "Subscript", icon: SubscriptIcon },
]

export default function HorizontalToolbarOverflow() {
  return (
    <Collapsible className="flex w-fit items-center gap-1 border p-1">
      <Button variant="ghost" size="icon-sm" aria-label="Bold">
        <BoldIcon />
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Italic">
        <ItalicIcon />
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Underline">
        <UnderlineIcon />
      </Button>
      <CollapsibleContent className="w-(--collapsible-panel-width) overflow-hidden transition-[width] duration-200 ease-out data-ending-style:w-0 data-starting-style:w-0">
        <div className="flex w-max items-center gap-1">
          {extra.map((tool) => (
            <Button
              key={tool.label}
              variant="ghost"
              size="icon-sm"
              aria-label={tool.label}
            >
              <tool.icon />
            </Button>
          ))}
        </div>
      </CollapsibleContent>
      <Separator orientation="vertical" className="mx-1 h-5" />
      <CollapsibleTrigger
        render={
          <Button variant="ghost" size="icon-sm" aria-label="More formatting">
            <ChevronRightIcon className="transition-transform group-data-panel-open/button:rotate-180" />
          </Button>
        }
      />
    </Collapsible>
  )
}
