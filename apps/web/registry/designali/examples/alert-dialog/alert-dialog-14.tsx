import { FolderIcon, FolderXIcon } from "lucide-react"

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

export default function DeleteFolderDialog() {
  return (
    <div className="flex w-full max-w-md items-center gap-3 border p-4">
      <div className="flex size-9 shrink-0 items-center justify-center bg-muted">
        <FolderIcon className="size-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">Brand assets</p>
        <p className="text-xs text-muted-foreground">38 files - 214 MB</p>
      </div>
      <AlertDialog>
        <AlertDialogTrigger
          render={
            <Button variant="ghost" size="icon-sm" aria-label="Delete folder" />
          }
        >
          <FolderXIcon />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <FolderXIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>
              Delete &quot;Brand assets&quot;?
            </AlertDialogTitle>
            <AlertDialogDescription>
              The folder and its 38 files will move to Trash and be permanently
              removed after 30 days.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction variant="destructive">
              Move to Trash
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
