import { EyeIcon, LockOpenIcon } from "lucide-react"

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

export default function MakeRepositoryPublic() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        <EyeIcon data-icon="inline-start" />
        Change visibility
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <LockOpenIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Make atlas-api public?</AlertDialogTitle>
          <AlertDialogDescription>
            Anyone on the internet will be able to see this repository,
            including its full commit history.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>I understand, make public</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
