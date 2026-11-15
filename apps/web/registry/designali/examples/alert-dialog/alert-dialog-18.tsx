import { BanIcon } from "lucide-react"

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

export default function BlockUserDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="ghost" />}>
        <BanIcon data-icon="inline-start" />
        Block @rowan.k
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive">
            <BanIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Block @rowan.k?</AlertDialogTitle>
          <AlertDialogDescription>
            They won&apos;t be able to message you or see your posts.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Block</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
