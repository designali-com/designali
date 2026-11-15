import { KeyboardIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const sections = [
  {
    title: "General",
    items: [
      { label: "Command menu", keys: ["⌘", "K"] },
      { label: "Toggle sidebar", keys: ["⌘", "B"] },
      { label: "Open settings", keys: ["⌘", ","] },
    ],
  },
  {
    title: "Editor",
    items: [
      { label: "Bold", keys: ["⌘", "B"] },
      { label: "Insert link", keys: ["⌘", "K"] },
      { label: "Duplicate line", keys: ["⇧", "⌥", "↓"] },
    ],
  },
]

export default function KeyboardShortcutsSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="ghost" />}>
        <KeyboardIcon data-icon="inline-start" />
        Shortcuts
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Keyboard shortcuts</SheetTitle>
          <SheetDescription>
            Work faster without leaving the keyboard.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-5 px-4">
          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <span className="font-medium">{section.title}</span>
              {section.items.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-muted-foreground">{item.label}</span>
                  <KbdGroup>
                    {item.keys.map((k) => (
                      <Kbd key={k}>{k}</Kbd>
                    ))}
                  </KbdGroup>
                </div>
              ))}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
