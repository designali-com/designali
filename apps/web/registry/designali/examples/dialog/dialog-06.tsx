import { KeyboardIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"

const groups = [
  {
    title: "Navigation",
    items: [
      { label: "Open command menu", keys: ["⌘", "K"] },
      { label: "Go to inbox", keys: ["G", "I"] },
      { label: "Go to projects", keys: ["G", "P"] },
    ],
  },
  {
    title: "Editing",
    items: [
      { label: "New issue", keys: ["C"] },
      { label: "Assign to me", keys: ["I"] },
      { label: "Change status", keys: ["S"] },
    ],
  },
]

export default function KeyboardShortcutsDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <KeyboardIcon data-icon="inline-start" />
        Shortcuts
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Keyboard shortcuts</DialogTitle>
          <DialogDescription>
            Move faster without leaving the keyboard.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          {groups.map((group) => (
            <div key={group.title} className="flex flex-col gap-2">
              <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                {group.title}
              </p>
              {group.items.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4"
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
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
