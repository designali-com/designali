import {
  DatabaseBackup as DatabaseBackupIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@workspace/ui/components/progress"

export default function BackupInProgress() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-2">
        <DatabaseBackupIcon className="size-4 text-muted-foreground" />
        <span className="text-sm font-medium">Nightly backup</span>
        <Badge variant="secondary" className="ms-auto">
          Running
        </Badge>
      </div>
      <Progress value={57}>
        <ProgressLabel className="text-muted-foreground">
          18,204 of 31,900 files
        </ProgressLabel>
        <ProgressValue />
      </Progress>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Started 2:00 AM &middot; 14 min elapsed</span>
        <Button variant="ghost" size="xs">
          Cancel
        </Button>
      </div>
    </div>
  )
}
