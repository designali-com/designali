"use client"

import * as React from "react"
import {
  ArrowRight as ArrowRightIcon,
  PartyPopper as PartyPopperIcon,
} from "@designali/icons"

import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { Input } from "@workspace/ui/components/input"

export default function WaitlistSignupDialog() {
  const [email, setEmail] = React.useState("")
  const [joined, setJoined] = React.useState(false)
  const valid = /.+@.+[.].+/.test(email)

  return (
    <Dialog>
      <DialogTrigger render={<Button />}>
        Join the beta
        <ArrowRightIcon data-icon="inline-end" />
      </DialogTrigger>
      <DialogContent>
        {joined ? (
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-muted">
              <PartyPopperIcon className="size-6" />
            </div>
            <DialogTitle>You&apos;re #1,284 on the list</DialogTitle>
            <DialogDescription>
              We&apos;ll email {email} when your invite is ready.
            </DialogDescription>
            <DialogClose render={<Button variant="outline" />}>
              Close
            </DialogClose>
          </div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={(event) => {
              event.preventDefault()
              if (valid) setJoined(true)
            }}
          >
            <DialogHeader>
              <DialogTitle>Get early access to Designali Pro</DialogTitle>
              <DialogDescription>
                We&apos;re letting in a new group every Friday.
              </DialogDescription>
            </DialogHeader>
            <Field>
              <FieldLabel htmlFor="waitlist-email">Work email</FieldLabel>
              <Input
                id="waitlist-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Field>
            <Button type="submit" disabled={!valid}>
              Request invite
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
