import {
  Lock as LockIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Slider } from "@workspace/ui/components/slider"

export default function DisabledProSlider() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <LockIcon className="size-3.5 text-muted-foreground" />
          <span className="text-sm font-medium">Data retention</span>
        </div>
        <Badge>Pro</Badge>
      </div>
      <Slider
        aria-label="Data retention"
        defaultValue={[30]}
        max={365}
        disabled
      />
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>30 days on Starter</span>
        <Button variant="link" size="xs" className="h-auto px-0">
          Upgrade for 1 year
        </Button>
      </div>
    </div>
  )
}
