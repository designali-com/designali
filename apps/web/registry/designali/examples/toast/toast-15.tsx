"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Toaster, createToastManager } from "@workspace/ui/components/toast"

const notify = createToastManager()

export default function FormValidationErrorToast() {
  function submit(event: React.FormEvent<React.ComponentRef<"form">>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const missing = ["company", "email"].filter(
      (key) => !String(data.get(key) ?? "").trim()
    )
    if (missing.length) {
      notify.add({
        type: "error",
        priority: "high",
        title: "Please complete the form",
        description: "Missing: " + missing.join(", "),
      })
      return
    }
    notify.add({
      type: "success",
      title: "Request sent",
      description: "Designali will reply within one business day.",
    })
  }

  return (
    <Toaster toastManager={notify}>
      <form
        onSubmit={submit}
        className="flex w-full max-w-sm flex-col gap-3 border p-4"
      >
        <p className="text-sm font-medium">Request a demo</p>
        <Input name="company" placeholder="Company name" />
        <Input name="email" type="email" placeholder="Work email" />
        <Button type="submit">Submit</Button>
      </form>
    </Toaster>
  )
}
