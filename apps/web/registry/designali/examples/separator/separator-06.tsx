import {
  FingerprintPattern as FingerprintIcon,
  KeyRound as KeyRoundIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Separator } from "@workspace/ui/components/separator"

export default function OrContinueWithDivider() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Input type="email" placeholder="you@designali.com" aria-label="Email" />
      <Button className="w-full">Continue with email</Button>
      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground uppercase">
          or continue with
        </span>
        <Separator className="flex-1" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline">
          <FingerprintIcon data-icon="inline-start" />
          SSO
        </Button>
        <Button variant="outline">
          <KeyRoundIcon data-icon="inline-start" />
          Passkey
        </Button>
      </div>
    </div>
  )
}
