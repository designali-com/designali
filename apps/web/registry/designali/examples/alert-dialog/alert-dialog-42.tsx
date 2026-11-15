import { ArrowRightIcon, AtSignIcon } from "lucide-react"

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

export default function EmailChangeConfirm() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="secondary" />}>
        <AtSignIcon data-icon="inline-start" />
        Update email
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Change your sign-in email?</AlertDialogTitle>
          <AlertDialogDescription>
            We&apos;ll send a verification link to the new address. Until then,
            keep using your current one.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-2 border p-3 text-sm sm:flex-row sm:items-center">
          <span className="min-w-0 truncate text-muted-foreground line-through">
            sam.rivera@oldmail.com
          </span>
          <ArrowRightIcon className="size-4 shrink-0 rotate-90 text-muted-foreground sm:rotate-0" />
          <span className="min-w-0 truncate font-medium">
            sam@rivera.studio
          </span>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Send verification</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
