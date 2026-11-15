import { Trash2Icon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import { Button } from "@workspace/ui/components/button"

export default function ChatDeleteMessageScope() {
  return (
    <div className="flex w-full max-w-sm flex-col items-end gap-1">
      <div className="group flex items-center gap-1">
        <AlertDialog>
          <AlertDialogTrigger
            render={
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="Delete message"
                className="opacity-60 group-hover:opacity-100"
              />
            }
          >
            <Trash2Icon />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete message?</AlertDialogTitle>
              <AlertDialogDescription>
                Deleting for everyone removes it from Jonah&apos;s chat too.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant="outline">
                Delete for me
              </AlertDialogAction>
              <AlertDialogAction variant="destructive">
                Delete for everyone
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <div className="max-w-60 bg-primary px-3 py-2 text-sm text-primary-foreground">
          Sending the venue deposit now, can you double-check the date?
        </div>
      </div>
      <span className="text-[10px] text-muted-foreground">
        Delivered - 9:41 AM
      </span>
    </div>
  )
}
