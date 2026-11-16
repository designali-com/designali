"use client"

import * as React from "react"
import {
  Construction as ConstructionIcon,
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
} from "@workspace/ui/components/alert-dialog"
import { Switch } from "@workspace/ui/components/switch"

export default function SwitchToggleConfirmation() {
  const [enabled, setEnabled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-4 border p-4">
      <div>
        <p className="text-sm font-medium">Maintenance mode</p>
        <p className="text-xs text-muted-foreground">
          {enabled ? "Visitors see a maintenance page" : "designali.com is live"}
        </p>
      </div>
      <Switch
        checked={enabled}
        onCheckedChange={(checked) =>
          checked ? setOpen(true) : setEnabled(false)
        }
        aria-label="Maintenance mode"
      />
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <ConstructionIcon />
            </AlertDialogMedia>
            <AlertDialogTitle>Turn on maintenance mode?</AlertDialogTitle>
            <AlertDialogDescription>
              Customers won&apos;t be able to browse or buy Designali templates
              until you turn it off.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setEnabled(true)
                setOpen(false)
              }}
            >
              Turn on
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
