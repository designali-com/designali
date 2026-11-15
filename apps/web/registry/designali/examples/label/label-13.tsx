import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function GroupDisabledLabel() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="group grid gap-2" data-disabled="true">
        <Label htmlFor="sso-domain">SSO domain</Label>
        <Input id="sso-domain" placeholder="acme-corp.com" disabled />
        <p className="text-xs text-muted-foreground">
          Available on the Enterprise plan.
        </p>
      </div>
      <div className="group grid gap-2" data-disabled="false">
        <Label htmlFor="team-name">Team name</Label>
        <Input id="team-name" defaultValue="Platform Squad" />
      </div>
    </div>
  )
}
