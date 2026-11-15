import { CircleAlertIcon } from "lucide-react"

import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function InvalidFieldLabel() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="username" className="text-destructive">
        Username
      </Label>
      <Input
        id="username"
        defaultValue="admin"
        aria-invalid
        aria-describedby="username-error"
      />
      <p
        id="username-error"
        className="flex items-center gap-1 text-xs text-destructive"
      >
        <CircleAlertIcon className="size-3.5" />
        That username is reserved. Try another.
      </p>
    </div>
  )
}
