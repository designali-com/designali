import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"

export default function PeerDisabledLabel() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Checkbox id="export-csv" defaultChecked />
        <Label htmlFor="export-csv">Export as CSV</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="export-pdf" disabled />
        <Label htmlFor="export-pdf">Export as PDF (Pro plan)</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="export-xlsx" disabled defaultChecked />
        <Label htmlFor="export-xlsx">Export as Excel (Pro plan)</Label>
      </div>
    </div>
  )
}
