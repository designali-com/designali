import {
  Banknote as BanknoteIcon,
  Send as SendIcon,
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

export default function ConfirmPayoutDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button />}>
        <BanknoteIcon data-icon="inline-start" />
        Send payout
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-primary/10 text-primary dark:text-primary">
            <BanknoteIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Send $2,480.00 to Ali Imam?</AlertDialogTitle>
          <AlertDialogDescription>
            Funds will arrive in the account ending 4421 within 1-2 business
            days.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>
            <SendIcon data-icon="inline-start" />
            Send payout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
