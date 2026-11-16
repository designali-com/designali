import {
  Database as DatabaseIcon,
  Eraser as EraserIcon,
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

export default function ClearBuildCacheDialog() {
  return (
    <div className="flex w-full max-w-md items-center gap-3 border p-4">
      <div className="flex size-9 shrink-0 items-center justify-center bg-muted">
        <DatabaseIcon className="size-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">Build cache</p>
        <p className="text-xs text-muted-foreground">1.8 GB across 42 designali.com builds</p>
      </div>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="secondary" size="sm" />}>
          Clear
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <EraserIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>Clear build cache?</AlertDialogTitle>
            <AlertDialogDescription>
              The next deployment will rebuild from scratch and may take a few
              extra minutes.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Clear cache and redeploy</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
