"use client"

import * as React from "react"

import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

export default function TermsAcceptanceSheet() {
  const [open, setOpen] = React.useState(false)
  const [agreed, setAgreed] = React.useState(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="outline" />}>
        Review updated terms
      </SheetTrigger>
      <SheetContent
        side="bottom"
        showCloseButton={false}
        className="mx-auto max-w-lg"
      >
        <SheetHeader>
          <SheetTitle>We&apos;ve updated our terms</SheetTitle>
          <SheetDescription>
            Effective April 1, 2026. Please review the key changes.
          </SheetDescription>
        </SheetHeader>
        <ul className="flex list-disc flex-col gap-1 ps-8 pe-4">
          <li>Data retention for deleted projects is now 30 days.</li>
          <li>Usage-based add-ons are billed at the end of each cycle.</li>
          <li>Disputes are handled under the laws of your billing region.</li>
        </ul>
        <SheetFooter>
          <Label className="gap-2 font-normal">
            <Checkbox checked={agreed} onCheckedChange={setAgreed} />I have read
            and agree to the updated terms
          </Label>
          <Button disabled={!agreed} onClick={() => setOpen(false)}>
            Continue
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
