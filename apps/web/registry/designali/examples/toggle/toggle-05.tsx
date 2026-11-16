import {
  Bell as BellIcon,
  Cloud as CloudIcon,
  RefreshCw as RefreshCwIcon,
} from "@designali/icons"

import { Toggle } from "@workspace/ui/components/toggle"

export default function DisabledToggleStates() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3 border p-4">
      <div className="flex flex-wrap gap-2">
        <Toggle variant="outline" aria-label="Notifications">
          <BellIcon />
          Alerts
        </Toggle>
        <Toggle variant="outline" disabled aria-label="Sync">
          <RefreshCwIcon />
          Sync
        </Toggle>
        <Toggle variant="outline" disabled defaultPressed aria-label="Backup">
          <CloudIcon />
          Backup
        </Toggle>
      </div>
      <p className="text-xs text-muted-foreground">
        Sync and Backup are managed by your Designali studio admin.
      </p>
    </div>
  )
}
