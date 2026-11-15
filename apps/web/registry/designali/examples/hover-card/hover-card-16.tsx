import { BoldIcon, CodeIcon, LinkIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@workspace/ui/components/hover-card"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"

const tools = [
  {
    label: "Bold",
    icon: BoldIcon,
    keys: ["⌘", "B"],
    hint: "Make the selected text stand out.",
  },
  {
    label: "Insert link",
    icon: LinkIcon,
    keys: ["⌘", "K"],
    hint: "Attach a URL or link to another page.",
  },
  {
    label: "Code block",
    icon: CodeIcon,
    keys: ["⌘", "⇧", "C"],
    hint: "Format a snippet with syntax highlighting.",
  },
]

export default function ToolbarShortcutHoverCard() {
  return (
    <div className="flex items-center gap-1 border p-1">
      {tools.map((tool) => (
        <HoverCard key={tool.label}>
          <HoverCardTrigger
            delay={400}
            render={
              <Button variant="ghost" size="icon-sm" aria-label={tool.label} />
            }
          >
            <tool.icon />
          </HoverCardTrigger>
          <HoverCardContent side="top" className="w-52">
            <div className="flex items-center justify-between">
              <span className="font-medium">{tool.label}</span>
              <KbdGroup>
                {tool.keys.map((k) => (
                  <Kbd key={k}>{k}</Kbd>
                ))}
              </KbdGroup>
            </div>
            <p className="mt-1 text-muted-foreground">{tool.hint}</p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
