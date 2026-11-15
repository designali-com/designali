import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

const shortcuts = [
  { id: "vim", label: "Vim key bindings", keys: ["Esc"], on: false },
  { id: "command", label: "Command palette", keys: ["Ctrl", "K"], on: true },
  { id: "zen", label: "Focus mode", keys: ["Ctrl", "."], on: true },
]

export default function KeyboardShortcutToggles() {
  return (
    <div className="w-full max-w-sm divide-y border">
      {shortcuts.map((shortcut) => (
        <div key={shortcut.id} className="flex items-center gap-3 px-4 py-3">
          <Label htmlFor={"kbd-" + shortcut.id} className="flex-1">
            {shortcut.label}
          </Label>
          <KbdGroup>
            {shortcut.keys.map((key) => (
              <Kbd key={key}>{key}</Kbd>
            ))}
          </KbdGroup>
          <Switch
            id={"kbd-" + shortcut.id}
            size="sm"
            defaultChecked={shortcut.on}
          />
        </div>
      ))}
    </div>
  )
}
