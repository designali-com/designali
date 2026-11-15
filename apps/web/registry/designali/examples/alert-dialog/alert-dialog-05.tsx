import { DoorOpenIcon } from "lucide-react"

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

export default function LeaveWorkspaceDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>
        <DoorOpenIcon data-icon="inline-start" />
        Leave workspace
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive">
            <DoorOpenIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Leave Northwind Studio?</AlertDialogTitle>
          <AlertDialogDescription>
            You will lose access to 12 projects and 3 shared boards. An admin
            will need to invite you again.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Stay</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            Leave workspace
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
