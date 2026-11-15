import { FileXIcon, PenLineIcon } from "lucide-react"

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

export default function DiscardDraftDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        <PenLineIcon data-icon="inline-start" />
        Discard draft
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia>
            <FileXIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Discard this draft?</AlertDialogTitle>
          <AlertDialogDescription>
            Your note to the design team will be lost. This can&apos;t be
            recovered.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep editing</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Discard</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
