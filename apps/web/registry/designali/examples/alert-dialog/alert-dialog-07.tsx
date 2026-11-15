import { CreditCardIcon } from "lucide-react"

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

export default function CancelSubscriptionDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="link" />}>
        Cancel subscription
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia>
            <CreditCardIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Cancel your Pro plan?</AlertDialogTitle>
          <AlertDialogDescription>
            You&apos;ll keep Pro features until June 30. After that your
            workspace moves to the Free plan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep Pro</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            Cancel plan
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
