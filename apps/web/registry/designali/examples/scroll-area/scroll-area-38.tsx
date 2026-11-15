import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const sections = [
  {
    title: "General",
    items: [
      ["Command menu", ["⌘", "K"]],
      ["Search", ["/"]],
      ["Settings", ["⌘", ","]],
    ],
  },
  {
    title: "Navigation",
    items: [
      ["Go to inbox", ["G", "I"]],
      ["Go to projects", ["G", "P"]],
      ["Next item", ["J"]],
      ["Previous item", ["K"]],
    ],
  },
  {
    title: "Editing",
    items: [
      ["Bold", ["⌘", "B"]],
      ["Italic", ["⌘", "I"]],
      ["Undo", ["⌘", "Z"]],
      ["Redo", ["⌘", "⇧", "Z"]],
    ],
  },
] as const

export default function KeyboardShortcutsSheet() {
  return (
    <ScrollArea className="h-72 w-full max-w-sm border">
      <div className="flex flex-col gap-4 p-4">
        {sections.map((s) => (
          <div key={s.title} className="flex flex-col gap-2">
            <span className="text-[11px] font-medium text-muted-foreground uppercase">
              {s.title}
            </span>
            {s.items.map(([label, keys]) => (
              <div
                key={label}
                className="flex items-center justify-between text-xs"
              >
                <span>{label}</span>
                <KbdGroup>
                  {keys.map((k) => (
                    <Kbd key={k}>{k}</Kbd>
                  ))}
                </KbdGroup>
              </div>
            ))}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
