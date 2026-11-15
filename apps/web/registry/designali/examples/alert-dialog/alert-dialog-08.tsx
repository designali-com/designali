import { ArchiveIcon } from "lucide-react"

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

export default function ArchiveChannelDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="secondary" />}>
        <ArchiveIcon data-icon="inline-start" />
        Archive #launch-week
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <ArchiveIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Archive this channel?</AlertDialogTitle>
          <AlertDialogDescription>
            Members can still search its history, but no one will be able to
            post new messages.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>
            <ArchiveIcon data-icon="inline-start" />
            Archive channel
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
