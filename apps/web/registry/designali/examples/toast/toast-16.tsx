"use client"

import * as React from "react"
import {
  Send as SendIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function TeamInviteToast() {
  const [email, setEmail] = React.useState("")

  function invite() {
    if (!email.includes("@")) {
      notify.add({ type: "error", title: "Enter a valid email address" })
      return
    }
    notify.add({
      type: "success",
      title: "Invite sent",
      description: email + " was invited as an Editor.",
    })
    setEmail("")
  }

  return (
    <Toaster toastManager={notify}>
      <div className="flex w-full max-w-sm flex-col gap-2 border p-4">
        <p className="text-sm font-medium">Invite to Designali Studio</p>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="teammate@designali.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={invite}>
            <SendIcon data-icon="inline-start" />
            Invite
          </Button>
        </div>
      </div>
    </Toaster>
  )
}
