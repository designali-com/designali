import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"

export default function SwitchSizes() {
  return (
    <div className="grid w-full max-w-xs grid-cols-2 gap-4 border p-4">
      <div className="flex flex-col gap-3">
        <span className="text-xs font-medium text-muted-foreground">
          Default
        </span>
        <div className="flex items-center gap-2">
          <Switch id="size-default-off" />
          <Label htmlFor="size-default-off">Off</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="size-default-on" defaultChecked />
          <Label htmlFor="size-default-on">On</Label>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-xs font-medium text-muted-foreground">Small</span>
        <div className="flex items-center gap-2">
          <Switch id="size-sm-off" size="sm" />
          <Label htmlFor="size-sm-off" className="text-xs">
            Off
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="size-sm-on" size="sm" defaultChecked />
          <Label htmlFor="size-sm-on" className="text-xs">
            On
          </Label>
        </div>
      </div>
    </div>
  )
}
