"use client"

import * as React from "react"
import { ShieldCheckIcon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@workspace/ui/components/alert-dialog"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"
import { cn } from "@workspace/ui/lib/utils"

export default function ConfirmTurnOffTwoFactor() {
  const [enabled, setEnabled] = React.useState(true)
  const [confirmOpen, setConfirmOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm items-center gap-3 border p-4">
      <ShieldCheckIcon
        className={cn(
          "size-5 shrink-0",
          enabled ? "text-primary" : "text-muted-foreground"
        )}
      />
      <div className="flex-1">
        <Label htmlFor="two-factor">Two-factor authentication</Label>
        <p className="text-xs text-muted-foreground">
          {enabled
            ? "Authenticator app is active."
            : "Your account is less secure."}
        </p>
      </div>
      <Switch
        id="two-factor"
        checked={enabled}
        onCheckedChange={(next) =>
          next ? setEnabled(true) : setConfirmOpen(true)
        }
      />
      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Turn off two-factor?</AlertDialogTitle>
            <AlertDialogDescription>
              Anyone with your password will be able to sign in. You can turn it
              back on at any time.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep it on</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={() => {
                setEnabled(false)
                setConfirmOpen(false)
              }}
            >
              Turn off
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
