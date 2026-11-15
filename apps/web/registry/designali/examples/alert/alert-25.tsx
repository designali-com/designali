"use client"

import * as React from "react"
import { TrashIcon } from "lucide-react"

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
  const name = "acme-marketing"

  return (
    <div className="w-full max-w-sm space-y-3">
      <Alert variant="error">
        <TrashIcon />
        <AlertTitle>Delete this workspace</AlertTitle>
        <AlertDescription>
          All 42 projects, files and member access will be permanently removed.
          This cannot be undone.
        </AlertDescription>
      </Alert>
      <div className="space-y-1.5">
        <Label htmlFor="confirm" className="font-normal">
          Type <span className="font-mono font-medium">{name}</span> to confirm
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
