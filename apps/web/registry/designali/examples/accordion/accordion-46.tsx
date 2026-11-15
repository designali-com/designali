import { ChevronDownIcon, KeyboardIcon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"

const groups = [
  {
    value: "general",
    title: "General",
    shortcuts: [
      { action: "Open command menu", keys: ["Ctrl", "K"] },
      { action: "Search", keys: ["/"] },
      { action: "Show shortcuts", keys: ["?"] },
    ],
  },
  {
    value: "editing",
    title: "Editing",
    shortcuts: [
      { action: "Bold", keys: ["Ctrl", "B"] },
      { action: "Insert link", keys: ["Ctrl", "L"] },
      { action: "Undo", keys: ["Ctrl", "Z"] },
    ],
  },
  {
    value: "navigation",
    title: "Navigation",
    shortcuts: [
      { action: "Go to inbox", keys: ["G", "I"] },
      { action: "Next item", keys: ["J"] },
    ],
  },
]

export default function AccordionKeyboardShortcuts() {
  return (
    <Accordion
      multiple
      defaultValue={["general"]}
      className="w-full max-w-sm border px-3"
    >
      {groups.map((group) => (
        <AccordionItem key={group.value} value={group.value}>
          <AccordionTrigger className="items-center">
            <span className="flex items-center gap-2">
              <KeyboardIcon className="size-4 text-muted-foreground" />
              {group.title}
            </span>
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent className="space-y-1.5">
            {group.shortcuts.map((shortcut) => (
              <div
                key={shortcut.action}
                className="flex items-center justify-between"
              >
                <span className="text-muted-foreground">{shortcut.action}</span>
                <KbdGroup>
                  {shortcut.keys.map((key) => (
                    <Kbd key={key}>{key}</Kbd>
                  ))}
                </KbdGroup>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
