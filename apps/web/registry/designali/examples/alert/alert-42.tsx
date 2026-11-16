import {
  ArrowUpRight as ArrowUpRightIcon,
  DatabaseBackup as DatabaseBackupIcon,
} from "@designali/icons"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"

export default function AlertBackupComplete() {
  return (
    <Alert variant="success" className="max-w-md">
      <DatabaseBackupIcon />
      <AlertTitle>Nightly backup complete</AlertTitle>
      <AlertDescription>
        <p>
          <span className="text-foreground">designali-prod</span> &middot; 18.4 GB
          &middot; finished 03:12 UTC
        </p>
      </AlertDescription>
      <AlertAction>
        <Button
          size="xs"
          variant="ghost"
          nativeButton={false}
          render={<a href="#" />}
        >
          View logs
          <ArrowUpRightIcon data-icon="inline-end" />
        </Button>
      </AlertAction>
    </Alert>
  )
}
