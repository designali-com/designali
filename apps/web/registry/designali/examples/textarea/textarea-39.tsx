"use client"

import * as React from "react"
import { FlagIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
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
import { Textarea } from "@workspace/ui/components/textarea"

const reasons = ["Spam", "Harassment", "Misinformation", "Other"]

export default function ReportContentDialog() {
  const [reason, setReason] = React.useState("Spam")

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <FlagIcon data-icon="inline-start" />
        Report post
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Report this post</DialogTitle>
          <DialogDescription>
            Reports are anonymous. Our moderators review them within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap gap-1.5">
          {reasons.map((r) => (
            <Button
              key={r}
              size="xs"
              variant={reason === r ? "default" : "outline"}
              onClick={() => setReason(r)}
            >
              {r}
            </Button>
          ))}
        </div>
        <Textarea
          placeholder="Add details that help us understand the problem"
          aria-label="Details"
          className="min-h-24"
        />
        <DialogFooter>
          <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
          <Button variant="destructive">Submit report</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
