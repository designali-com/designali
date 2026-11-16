import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"

const groups = [
  {
    title: "General",
    shortcuts: [
      { action: "Command menu", keys: ["⌘", "K"] },
      { action: "Search everywhere", keys: ["/"] },
      { action: "Toggle sidebar", keys: ["⌘", "\\"] },
      { action: "Open settings", keys: ["⌘", ","] },
    ],
  },
  {
    title: "Editing",
    shortcuts: [
      { action: "Bold", keys: ["⌘", "B"] },
      { action: "Insert link", keys: ["⌘", "K", "L"] },
      { action: "Duplicate block", keys: ["⌘", "D"] },
      { action: "Move block up", keys: ["⌥", "↑"] },
      { action: "Move block down", keys: ["⌥", "↓"] },
    ],
  },
  {
    title: "Navigation",
    shortcuts: [
      { action: "Go to icons", keys: ["G", "I"] },
      { action: "Go to pricing", keys: ["G", "P"] },
      { action: "Next item", keys: ["J"] },
      { action: "Previous item", keys: ["K"] },
    ],
  },
  {
    title: "Blocks",
    shortcuts: [
      { action: "New block", keys: ["C"] },
      { action: "Copy code", keys: ["Y"] },
      { action: "Toggle theme", keys: ["T"] },
      { action: "Open preview", keys: ["P"] },
      { action: "Copy block link", keys: ["⌘", "⇧", "C"] },
    ],
  },
  {
    title: "View",
    shortcuts: [
      { action: "Zoom in", keys: ["⌘", "+"] },
      { action: "Zoom out", keys: ["⌘", "-"] },
      { action: "Full screen", keys: ["⌃", "⌘", "F"] },
    ],
  },
  {
    title: "Selection",
    shortcuts: [
      { action: "Select all", keys: ["⌘", "A"] },
      { action: "Extend selection", keys: ["⇧", "J"] },
      { action: "Clear selection", keys: ["Esc"] },
    ],
  },
]

export default function Grid20() {
  return (
    <section className="w-full bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight">Keyboard shortcuts</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Never reach for the mouse. Press <Kbd>?</Kbd> anywhere on Designali to open this sheet.
            </p>
          </div>
          <span className="text-xs text-muted-foreground">macOS · Windows uses Ctrl for ⌘</span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="border border-border bg-background">
              <h3 className="border-b border-border px-5 py-3 text-xs font-medium tracking-widest text-muted-foreground uppercase">
                {group.title}
              </h3>
              <ul className="divide-y divide-border">
                {group.shortcuts.map((shortcut) => (
                  <li key={shortcut.action} className="flex items-center justify-between gap-4 px-5 py-3">
                    <span className="text-sm">{shortcut.action}</span>
                    <KbdGroup>
                      {shortcut.keys.map((key) => (
                        <Kbd key={key}>{key}</Kbd>
                      ))}
                    </KbdGroup>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
