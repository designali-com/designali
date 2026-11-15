import { KeyboardIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"

const shortcuts = [
  { label: "Command menu", keys: ["⌘", "K"] },
  { label: "New document", keys: ["⌘", "N"] },
  { label: "Search", keys: ["/"] },
  { label: "Toggle sidebar", keys: ["⌘", "B"] },
  { label: "Duplicate", keys: ["⌘", "D"] },
]

export default function KeyboardShortcutsPopover() {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            aria-label="Keyboard shortcuts"
          />
        }
      >
        <KeyboardIcon />
      </PopoverTrigger>
      <PopoverContent className="w-64" side="top">
        <PopoverTitle>Keyboard shortcuts</PopoverTitle>
        <ul className="flex flex-col gap-2">
          {shortcuts.map((shortcut) => (
            <li
              key={shortcut.label}
              className="flex items-center justify-between text-xs"
            >
              <span className="text-muted-foreground">{shortcut.label}</span>
              <KbdGroup>
                {shortcut.keys.map((key) => (
                  <Kbd key={key}>{key}</Kbd>
                ))}
              </KbdGroup>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  )
}
