import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

const dims = [
  { id: "pkg-weight", label: "Weight", unit: "kg", value: "2.4" },
  { id: "pkg-length", label: "Length", unit: "cm", value: "40" },
  { id: "pkg-width", label: "Width", unit: "cm", value: "30" },
]

export default function UnitSuffixLabels() {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-3">
      {dims.map((dim) => (
        <div key={dim.id} className="grid gap-2">
          <Label htmlFor={dim.id}>
            {dim.label}
            <span className="font-normal text-muted-foreground">
              ({dim.unit})
            </span>
          </Label>
          <Input id={dim.id} type="number" defaultValue={dim.value} />
        </div>
      ))}
    </div>
  )
}
