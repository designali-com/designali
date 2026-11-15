import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

const modes = [
  { label: "No resize", className: "resize-none" },
  { label: "Vertical", className: "resize-y [field-sizing:fixed]" },
  {
    label: "Fixed 4 rows",
    className: "resize-none [field-sizing:fixed]",
    rows: 4,
  },
]

export default function TextareaResizeModes() {
  return (
    <div className="grid w-full max-w-md gap-3 sm:grid-cols-3">
      {modes.map((m) => (
        <div key={m.label} className="grid content-start gap-1.5">
          <Label htmlFor={"ta-" + m.label}>{m.label}</Label>
          <Textarea
            id={"ta-" + m.label}
            rows={m.rows}
            className={m.className}
            placeholder="Notes"
          />
        </div>
      ))}
    </div>
  )
}
