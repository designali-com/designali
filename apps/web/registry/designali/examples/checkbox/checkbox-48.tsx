import { Checkbox } from "@workspace/ui/components/checkbox"
import { Field, FieldGroup, FieldLabel } from "@workspace/ui/components/field"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"

const prefs = [
  { id: "wrap", label: "Word wrap", keys: ["Alt", "Z"], on: true },
  { id: "minimap", label: "Show minimap", keys: ["Ctrl", "M"], on: false },
  { id: "lines", label: "Line numbers", keys: ["Ctrl", "L"], on: true },
  { id: "zen", label: "Zen mode", keys: ["Ctrl", "K", "Z"], on: false },
]

export default function ShortcutPreferenceList() {
  return (
    <FieldGroup className="w-full max-w-xs gap-3">
      {prefs.map((pref) => (
        <Field key={pref.id} orientation="horizontal">
          <Checkbox id={"pref-" + pref.id} defaultChecked={pref.on} />
          <FieldLabel
            htmlFor={"pref-" + pref.id}
            className="flex-1 font-normal"
          >
            {pref.label}
          </FieldLabel>
          <KbdGroup>
            {pref.keys.map((key) => (
              <Kbd key={key}>{key}</Kbd>
            ))}
          </KbdGroup>
        </Field>
      ))}
    </FieldGroup>
  )
}
