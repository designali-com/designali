import { LogOutIcon, MonitorSmartphoneIcon } from "lucide-react"

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

export default function SignOutAllDevices() {
  return (
    <div className="flex w-full max-w-md items-center gap-3 border p-4">
      <div className="flex size-9 shrink-0 items-center justify-center bg-muted">
        <MonitorSmartphoneIcon className="size-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">Active sessions</p>
        <p className="text-xs text-muted-foreground">4 devices are signed in</p>
      </div>
      <AlertDialog>
        <AlertDialogTrigger render={<Button variant="outline" size="sm" />}>
          Sign out all
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia>
              <LogOutIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>Sign out of all devices?</AlertDialogTitle>
            <AlertDialogDescription>
              You&apos;ll stay signed in here, but every other browser and phone
              will need to log in again.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Sign out everywhere</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
