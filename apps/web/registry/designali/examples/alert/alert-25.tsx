"use client"

import * as React from "react"
import {
  Trash as TrashIcon,
} from "@designali/icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"

export default function AlertDangerZoneConfirm() {
  const [value, setValue] = React.useState("")
  const name = "designali-client-site"

  return (
    <div className="w-full max-w-sm space-y-3">
      <Alert variant="error">
        <TrashIcon />
        <AlertTitle>Delete this workspace</AlertTitle>
        <AlertDescription>
          All 42 Figma files, Next.js builds and client access will be permanently removed.
          This cannot be undone.
        </AlertDescription>
      </Alert>
      <div className="space-y-1.5">
        <Label htmlFor="confirm" className="font-normal">
          Type <span className="font-sans font-medium">{name}</span> to confirm
        </Label>
        <Input
          id="confirm"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
        />
      </div>
      <Button
        variant="destructive"
        className="w-full"
        disabled={value !== name}
      >
        Delete workspace
      </Button>
    </div>
  )
}
