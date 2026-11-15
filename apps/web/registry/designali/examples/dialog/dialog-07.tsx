"use client"

import * as React from "react"
import { CheckIcon, CopyIcon, Share2Icon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@workspace/ui/components/input-group"
import {
  NativeSelect,
  NativeSelectOption,
} from "@workspace/ui/components/native-select"
import { Separator } from "@workspace/ui/components/separator"

const people = [
  { name: "Priya Raman", email: "priya@lumen.app", access: "owner" },
  { name: "Jonas Weber", email: "jonas@lumen.app", access: "edit" },
  { name: "Ada Okafor", email: "ada@lumen.app", access: "view" },
]

export default function ShareDocumentDialog() {
  const [copied, setCopied] = React.useState(false)

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <Share2Icon data-icon="inline-start" />
        Share
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share &quot;Q3 Roadmap&quot;</DialogTitle>
          <DialogDescription>
            Anyone with the link can view this document.
          </DialogDescription>
        </DialogHeader>
        <InputGroup>
          <InputGroupInput
            readOnly
            value="https://lumen.app/d/q3-roadmap"
            aria-label="Share link"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton onClick={() => setCopied(true)}>
              {copied ? <CheckIcon /> : <CopyIcon />}
              {copied ? "Copied" : "Copy"}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <Separator />
        <div className="flex flex-col gap-3">
          <p className="font-medium">People with access</p>
          {people.map((person) => (
            <div key={person.email} className="flex items-center gap-3">
              <Avatar size="sm">
                <AvatarFallback>
                  {person.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">{person.name}</p>
                <p className="truncate text-muted-foreground">{person.email}</p>
              </div>
              {person.access === "owner" ? (
                <span className="text-muted-foreground">Owner</span>
              ) : (
                <NativeSelect
                  size="sm"
                  defaultValue={person.access}
                  aria-label={"Access for " + person.name}
                >
                  <NativeSelectOption value="edit">Can edit</NativeSelectOption>
                  <NativeSelectOption value="view">Can view</NativeSelectOption>
                </NativeSelect>
              )}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
