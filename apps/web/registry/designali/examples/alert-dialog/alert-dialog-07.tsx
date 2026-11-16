import {
  CreditCard as CreditCardIcon,
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
          <AlertDialogTitle>Cancel your Designali Pro plan?</AlertDialogTitle>
          <AlertDialogDescription>
            You&apos;ll keep Pro templates and blocks until June 30. After that
            your account moves to the Free plan.
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
