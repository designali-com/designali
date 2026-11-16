"use client"

import * as React from "react"
import {
  ScrollText as ScrollTextIcon,
} from "@designali/icons"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

const changes = [
  "Designali templates and blocks can be used in unlimited client projects.",
  "Data for deleted designali.com accounts is kept for 30 days.",
  "Studio services are billed per project, separately from plans.",
  "You can export your full account data at any time from Settings.",
  "The full terms live at designali.com/docs/legal/terms.",
]

export default function TermsAcceptanceScroll() {
  const [agreed, setAgreed] = React.useState(false)

  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        <ScrollTextIcon data-icon="inline-start" />
        Review updated terms
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            We&apos;ve updated the Designali Terms of Service
          </AlertDialogTitle>
          <AlertDialogDescription>
            Please review the summary below. The changes take effect on May 1.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <ScrollArea className="h-32 border">
          <ol className="flex list-decimal flex-col gap-2 p-3 ps-7 text-xs text-muted-foreground">
            {changes.map((change) => (
              <li key={change}>{change}</li>
            ))}
          </ol>
        </ScrollArea>
        <Field orientation="horizontal">
          <Checkbox
            id="agree-terms"
            checked={agreed}
            onCheckedChange={(checked) => setAgreed(checked === true)}
          />
          <FieldLabel htmlFor="agree-terms" className="font-normal">
            I have read and agree to the updated terms
          </FieldLabel>
        </Field>
        <AlertDialogFooter>
          <AlertDialogCancel>Remind me later</AlertDialogCancel>
          <AlertDialogAction disabled={!agreed}>Accept</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
