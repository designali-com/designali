import {
  BellRing as BellRingIcon,
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

export default function StackedFullWidthFooter() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button />}>
        Enable notifications
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className="place-items-center text-center sm:group-data-[size=default]/alert-dialog-content:place-items-center sm:group-data-[size=default]/alert-dialog-content:text-center">
          <AlertDialogMedia className="size-12 rounded-full">
            <BellRingIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Stay in the loop</AlertDialogTitle>
          <AlertDialogDescription>
            Get notified when Designali drops new blocks, templates and icon
            packs.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:flex-col-reverse sm:justify-stretch">
          <AlertDialogCancel variant="ghost" className="w-full">
            Not now
          </AlertDialogCancel>
          <AlertDialogAction className="w-full">
            Allow notifications
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
