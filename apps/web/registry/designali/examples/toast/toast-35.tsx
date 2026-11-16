"use client"

import * as React from "react"
import {
  Lock as LockIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function PasswordChangedToast() {
  function submit(event: React.FormEvent<React.ComponentRef<"form">>) {
    event.preventDefault()
    event.currentTarget.reset()
    const id = notify.add({
      type: "success",
      title: "Password changed",
      description: "You are still signed in on 2 other devices.",
      timeout: 8000,
      actionProps: {
        children: "Sign out others",
        onClick: () =>
          notify.update(id, {
            title: "Other sessions ended",
            description: "Only this device is signed in.",
            actionProps: undefined,
          }),
      },
    })
  }

  return (
    <Toaster toastManager={notify}>
      <form
        onSubmit={submit}
        className="flex w-full max-w-sm flex-col gap-3 border p-4"
      >
        <div className="flex items-center gap-2 text-sm font-medium">
          <LockIcon className="size-4" />
          Change password
        </div>
        <Input type="password" placeholder="Current password" required />
        <Input
          type="password"
          placeholder="New password"
          required
          minLength={8}
        />
        <Button type="submit">Update password</Button>
      </form>
    </Toaster>
  )
}
