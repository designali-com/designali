import * as React from "react"

import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import { Separator } from "@workspace/ui/components/separator"

const sections = [
  {
    title: "General",
    items: [
      { label: "Command menu", keys: ["⌘", "K"] },
      { label: "Search", keys: ["/"] },
    ],
  },
  {
    title: "Navigation",
    items: [
      { label: "Go to inbox", keys: ["G", "I"] },
      { label: "Go to projects", keys: ["G", "P"] },
    ],
  },
]

export default function ShortcutSectionsSeparated() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4 text-sm">
      {sections.map((section, index) => (
        <React.Fragment key={section.title}>
          {index > 0 && <Separator />}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-muted-foreground">
              {section.title}
            </span>
            {section.items.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between"
              >
                <span>{item.label}</span>
                <KbdGroup>
                  {item.keys.map((key) => (
                    <Kbd key={key}>{key}</Kbd>
                  ))}
                </KbdGroup>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
