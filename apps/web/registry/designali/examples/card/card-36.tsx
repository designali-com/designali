"use client"

import * as React from "react"
import {
  Link as LinkIcon,
  X as XIcon,
} from "@designali/icons"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Field, FieldLabel } from "@workspace/ui/components/field"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"

export default function InviteTeamCard() {
  const [emails, setEmails] = React.useState([
    "sam@designali.com",
    "maya@designali.com",
  ])
  const [draft, setDraft] = React.useState("")

  const add = () => {
    const value = draft.trim()
    if (value.includes("@") && !emails.includes(value))
      setEmails([...emails, value])
    setDraft("")
  }

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Invite your team</CardTitle>
        <CardDescription>
          They&apos;ll get an email with a link to join the Designali studio.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="flex flex-wrap gap-1.5 border p-2">
          {emails.map((e) => (
            <Badge key={e} variant="secondary" className="gap-1 pe-1">
              {e}
              <button
                type="button"
                aria-label={"Remove " + e}
                onClick={() => setEmails(emails.filter((x) => x !== e))}
              >
                <XIcon className="size-3" />
              </button>
            </Badge>
          ))}
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === ",") {
                e.preventDefault()
                add()
              }
            }}
            placeholder="Add email and press Enter"
            className="min-w-32 flex-1 bg-transparent text-xs outline-none placeholder:text-muted-foreground"
            aria-label="Email address"
          />
        </div>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="invite-role" className="flex-1">
            Invite as
          </FieldLabel>
          <NativeSelect id="invite-role" size="sm" defaultValue="member">
            <NativeSelectOption value="admin">Admin</NativeSelectOption>
            <NativeSelectOption value="member">Member</NativeSelectOption>
            <NativeSelectOption value="guest">Guest</NativeSelectOption>
          </NativeSelect>
        </Field>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="link" size="sm" className="px-0">
          <LinkIcon data-icon="inline-start" />
          Copy invite link
        </Button>
        <Button size="sm" disabled={emails.length === 0}>
          Send {emails.length} {emails.length === 1 ? "invite" : "invites"}
        </Button>
      </CardFooter>
    </Card>
  )
}
