import { LockIcon, SparklesIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { Switch } from "@workspace/ui/components/switch"

export default function UpgradeLockedFeaturePopover() {
  return (
    <div className="flex w-full max-w-sm flex-col divide-y border">
      <div className="flex items-center justify-between p-3">
        <div className="flex flex-col">
          <span className="text-xs font-medium">Two-factor authentication</span>
          <span className="text-[11px] text-muted-foreground">
            Required for all members
          </span>
        </div>
        <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between p-3">
        <div className="flex flex-col">
          <span className="text-xs font-medium">SAML single sign-on</span>
          <span className="text-[11px] text-muted-foreground">
            Connect your identity provider
          </span>
        </div>
        <Popover>
          <PopoverTrigger render={<Button variant="outline" size="xs" />}>
            <LockIcon data-icon="inline-start" /> Business
          </PopoverTrigger>
          <PopoverContent className="w-64" align="end">
            <div className="flex size-8 items-center justify-center bg-gradient-to-br from-violet-500 to-indigo-500 text-white">
              <SparklesIcon className="size-4" />
            </div>
            <PopoverHeader>
              <PopoverTitle>Available on Business</PopoverTitle>
              <PopoverDescription>
                Upgrade to enforce SSO, provision users automatically, and get
                audit logs.
              </PopoverDescription>
            </PopoverHeader>
            <div className="flex gap-2">
              <Button size="sm" className="flex-1">
                Upgrade
              </Button>
              <Button size="sm" variant="ghost" className="flex-1">
                Compare plans
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
