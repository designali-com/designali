import { Checkbox } from "@workspace/ui/components/checkbox"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import { Label } from "@workspace/ui/components/label"

const shortcuts = [
  { id: "sc-search", label: "Search designali.com", keys: ["⌘", "K"] },
  { id: "sc-new", label: "New Designali project", keys: ["⌘", "N"] },
  { id: "sc-side", label: "Toggle sidebar", keys: ["⌘", "B"] },
]

export default function ShortcutSettingLabels() {
  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      {shortcuts.map((shortcut) => (
        <div
          key={shortcut.id}
          className="flex items-center justify-between gap-3 p-3"
        >
          <div className="flex items-center gap-2">
            <Checkbox id={shortcut.id} defaultChecked />
            <Label htmlFor={shortcut.id}>{shortcut.label}</Label>
          </div>
          <KbdGroup>
            {shortcut.keys.map((key) => (
              <Kbd key={key}>{key}</Kbd>
            ))}
          </KbdGroup>
        </div>
      ))}
    </div>
  )
}
