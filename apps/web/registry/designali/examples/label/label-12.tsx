import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"

export default function PeerDisabledLabel() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="export-csv" defaultChecked />
        <Label htmlFor="export-csv">Export Designali blocks as TSX</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="export-pdf" disabled />
        <Label htmlFor="export-pdf">Export as Figma file (Designali Pro)</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="export-xlsx" disabled defaultChecked />
        <Label htmlFor="export-xlsx">Export as Framer (Designali Pro)</Label>
      </div>
    </div>
  )
}
