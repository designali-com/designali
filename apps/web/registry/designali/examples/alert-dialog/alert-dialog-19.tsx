import { GitBranchIcon, TriangleAlertIcon } from "lucide-react"

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

export default function ForcePushWarning() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>
        <GitBranchIcon data-icon="inline-start" />
        Force push
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <TriangleAlertIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Force push to main?</AlertDialogTitle>
          <AlertDialogDescription>
            This rewrites history on a shared branch. 3 teammates have commits
            that will be overwritten.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Abort</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            Force push anyway
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
