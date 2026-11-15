import { ChevronDownIcon, KeyboardIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"

const groups = [
  {
    title: "Navigation",
    items: [
      { label: "Go to inbox", keys: ["G", "I"] },
      { label: "Go to projects", keys: ["G", "P"] },
      { label: "Search", keys: ["⌘", "K"] },
    ],
  },
  {
    title: "Editing",
    items: [
      { label: "Bold", keys: ["⌘", "B"] },
      { label: "Insert link", keys: ["⌘", "L"] },
      { label: "Undo", keys: ["⌘", "Z"] },
    ],
  },
]

export default function KeyboardShortcutGroups() {
  return (
    <div className="w-full max-w-sm space-y-2">
      {groups.map((group) => (
        <Collapsible key={group.title} defaultOpen className="border">
          <CollapsibleTrigger
            render={
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <KeyboardIcon />
                {group.title}
                <ChevronDownIcon className="ml-auto transition-transform group-data-panel-open/button:rotate-180" />
              </Button>
            }
          />
          <CollapsibleContent className="h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0">
            <ul className="divide-y border-t">
              {group.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between px-3 py-2 text-sm"
                >
                  {item.label}
                  <KbdGroup>
                    {item.keys.map((key) => (
                      <Kbd key={key}>{key}</Kbd>
                    ))}
                  </KbdGroup>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}
