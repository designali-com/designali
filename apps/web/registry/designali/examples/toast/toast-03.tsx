"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function ProfileSavedToast() {
  const [name, setName] = React.useState("Maya Okafor")

  function save(event: React.FormEvent<React.ComponentRef<"form">>) {
    event.preventDefault()
    notify.add({
      type: "success",
      title: "Profile updated",
      description: "Your display name is now " + name + ".",
    })
  }

  return (
    <Toaster toastManager={notify}>
      <form
        onSubmit={save}
        className="flex w-full max-w-sm flex-col gap-4 border p-4"
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="display-name">Display name</Label>
          <Input
            id="display-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Button type="submit" className="self-end">
          Save changes
        </Button>
      </form>
    </Toaster>
  )
}
