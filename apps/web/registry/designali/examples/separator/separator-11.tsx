import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Separator } from "@workspace/ui/components/separator"
import { Switch } from "@workspace/ui/components/switch"

export default function LabeledSectionDivider() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="project-name">Project name</Label>
        <Input id="project-name" defaultValue="designali-portfolio" />
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Advanced
        </span>
        <Separator className="flex-1" />
      </div>
      <div className="flex items-center justify-between text-sm">
        <Label htmlFor="preview">Preview deployments</Label>
        <Switch id="preview" defaultChecked />
      </div>
      <div className="flex items-center justify-between text-sm">
        <Label htmlFor="protect">Password protection</Label>
        <Switch id="protect" />
      </div>
    </div>
  )
}
