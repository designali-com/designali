import {
  CircleX as CircleXIcon,
  RefreshCw as RefreshCwIcon,
  RefreshCwOff as RefreshCwOffIcon,
} from "@designali/icons"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import { Button } from "@workspace/ui/components/button"

export default function SyncErrorRetry() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        <RefreshCwOffIcon data-icon="inline-start" />
        Sync failed
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive">
            <CircleXIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Couldn&apos;t sync your Figma files</AlertDialogTitle>
          <AlertDialogDescription>
            The provider rejected our request. Check your connection or{" "}
            <a href="#">reconnect the account</a>.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <pre className="overflow-x-auto bg-muted p-3 font-mono text-xs text-muted-foreground">
          ERR_TOKEN_EXPIRED (401){"\n"}request_id: 7f3a-91c2-bb04
        </pre>
        <AlertDialogFooter>
          <AlertDialogCancel>Dismiss</AlertDialogCancel>
          <AlertDialogAction>
            <RefreshCwIcon data-icon="inline-start" />
            Try again
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
