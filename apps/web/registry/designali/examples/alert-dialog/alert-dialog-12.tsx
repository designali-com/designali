import {
  ShieldCheck as ShieldCheckIcon,
  ShieldOff as ShieldOffIcon,
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

export default function DisableTwoFactorDialog() {
  return (
    <div className="flex w-full max-w-md items-center gap-3 border p-4">
      <div className="flex size-9 shrink-0 items-center justify-center bg-muted">
        <ShieldCheckIcon className="size-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">Two-factor authentication</p>
        <p className="text-xs text-muted-foreground">
          Enabled with an authenticator app
        </p>
      </div>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="destructive" size="sm" />}>
          Disable
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-primary/10 text-primary dark:text-primary">
              <ShieldOffIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>
              Turn off two-factor authentication?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Your account will be protected by your password only. We strongly
              recommend keeping 2FA on.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep 2FA</AlertDialogCancel>
            <AlertDialogAction variant="destructive">
              Turn off
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
