import { HistoryIcon } from "lucide-react"

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

export default function RestoreVersionDialog() {
  return (
    <div className="flex w-full max-w-md items-center gap-3 border p-4">
      <div className="flex size-9 shrink-0 items-center justify-center bg-muted">
        <HistoryIcon className="size-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">Version 14</p>
        <p className="text-xs text-muted-foreground">
          Edited by Priya Nair - 2 days ago
        </p>
      </div>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="outline" size="sm" />}>
          Restore
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <HistoryIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>Restore version 14?</AlertDialogTitle>
            <AlertDialogDescription>
              The current document will be saved as a new version first, so
              nothing is lost.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Restore this version</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
