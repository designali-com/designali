import {
  FileVideoCamera as FileVideoIcon,
  CloudUpload as UploadCloudIcon,
  X as XIcon,
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
import { Progress } from "@workspace/ui/components/progress"

export default function StopUploadProgress() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center bg-muted">
          <FileVideoIcon className="size-4" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">
            designali-cgi-showreel.mp4
          </p>
          <p className="text-xs text-muted-foreground">
            1.2 GB of 1.9 GB - 2 min left
          </p>
        </div>
        <AlertDialog>
          <AlertDialogTrigger
            render={
              <Button variant="ghost" size="icon-sm" aria-label="Stop upload" />
            }
          >
            <XIcon />
          </AlertDialogTrigger>
          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogMedia>
                <UploadCloudIcon />
              </AlertDialogMedia>
              <AlertDialogTitle>Stop uploading?</AlertDialogTitle>
              <AlertDialogDescription>
                63% is uploaded. You&apos;ll need to start over.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Keep going</AlertDialogCancel>
              <AlertDialogAction variant="destructive">Stop</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <Progress value={63} />
    </div>
  )
}
