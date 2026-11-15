import { LockIcon } from "lucide-react"

import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function ReadOnlyLockedLabel() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="org-id" className="justify-between">
        <span>Organization ID</span>
        <span className="flex items-center gap-1 font-normal text-muted-foreground">
          <LockIcon className="size-3" />
          Managed by admin
        </span>
      </Label>
      <Input
        id="org-id"
        readOnly
        value="org_8F3kQ2xLm"
        className="bg-muted font-mono"
      />
    </div>
  )
}
