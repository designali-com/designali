import {
  CircleCheck as CircleCheckIcon,
} from "@designali/icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@workspace/ui/components/input-group"
import { Label } from "@workspace/ui/components/label"

export default function UrlFieldLabel() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="store-url">Store address</Label>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>designali.com/</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput id="store-url" defaultValue="templates" />
        <InputGroupAddon align="inline-end">
          <CircleCheckIcon className="text-emerald-600 dark:text-emerald-400" />
        </InputGroupAddon>
      </InputGroup>
      <p className="text-xs text-muted-foreground">
        This address is available.
      </p>
    </div>
  )
}
