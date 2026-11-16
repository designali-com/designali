"use client"

import * as React from "react"
import {
  UserX as UserXIcon,
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
import { Field, FieldError, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function PasswordReauthDelete() {
  const [password, setPassword] = React.useState("")
  const [error, setError] = React.useState("")

  function handleDelete() {
    if (password.length < 8) {
      setError("That password doesn't look right. Try again.")
      return
    }
    setError("")
  }

  return (
    <AlertDialog
      onOpenChange={(open) => {
        if (!open) {
          setPassword("")
          setError("")
        }
      }}
    >
      <AlertDialogTrigger render={<Button variant="destructive" />}>
        Delete account
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive">
            <UserXIcon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete your Designali account?</AlertDialogTitle>
          <AlertDialogDescription>
            Your downloads, licenses and data will be erased within 14 days. Confirm with your
            password.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Field data-invalid={Boolean(error)}>
          <FieldLabel htmlFor="reauth-password">Current password</FieldLabel>
          <Input
            id="reauth-password"
            type="password"
            value={password}
            aria-invalid={Boolean(error)}
            onChange={(event) => setPassword(event.target.value)}
          />
          {error && <FieldError>{error}</FieldError>}
        </Field>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant="destructive"
            onClick={handleDelete}
            disabled={!password}
          >
            Delete account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
