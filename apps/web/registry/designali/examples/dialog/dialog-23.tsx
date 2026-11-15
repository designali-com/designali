"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const sections = [
  {
    title: "1. Your account",
    body: "You are responsible for activity under your account and for keeping your credentials secure.",
  },
  {
    title: "2. Acceptable use",
    body: "Don't use the service to send spam, scrape other users, or interfere with the platform's operation.",
  },
  {
    title: "3. Data retention",
    body: "We keep project data for 30 days after deletion so you can restore it, then remove it permanently.",
  },
  {
    title: "4. Billing",
    body: "Paid plans renew automatically. You can cancel anytime and keep access until the end of the period.",
  },
  {
    title: "5. Changes",
    body: "We'll notify you by email at least 14 days before material changes to these terms take effect.",
  },
]

export default function TermsAcceptanceDialog() {
  const [agreed, setAgreed] = React.useState(false)

  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Review updated terms</DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Updated Terms of Service</DialogTitle>
          <DialogDescription>Effective December 1, 2026.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-48 border bg-muted/30 p-3">
          <div className="flex flex-col gap-3">
            {sections.map((section) => (
              <div key={section.title}>
                <p className="font-medium">{section.title}</p>
                <p className="text-muted-foreground">{section.body}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
        <Field orientation="horizontal">
          <Checkbox
            id="terms-agree"
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked === true)}
          />
          <FieldLabel htmlFor="terms-agree">
            I have read and agree to the updated terms
          </FieldLabel>
        </Field>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Remind me later
          </DialogClose>
          <DialogClose render={<Button disabled={!agreed} />}>
            Accept
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
