import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

export default function SwitchSettingRow() {
  return (
    <div className="flex w-full max-w-md items-center justify-between gap-6 border p-4">
      <div className="grid gap-1.5">
        <Label htmlFor="weekly-digest" className="text-sm font-medium">
          Weekly digest
        </Label>
        <p id="weekly-digest-desc" className="text-xs text-muted-foreground">
          A Monday summary of new Designali templates, blocks and comments.
        </p>
      </div>
      <Switch
        id="weekly-digest"
        defaultChecked
        aria-describedby="weekly-digest-desc"
      />
    </div>
  )
}
