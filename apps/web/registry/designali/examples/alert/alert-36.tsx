"use client"

import * as React from "react"
import { PencilIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"

const initial = "Weekly product updates for the Atlas team."

export default function AlertUnsavedChanges() {
  const [saved, setSaved] = React.useState(initial)
  const [value, setValue] = React.useState(initial)
  const dirty = value !== saved

  return (
    <div className="w-full max-w-sm space-y-3">
      {dirty && (
        <Alert variant="warning">
          <PencilIcon />
          <AlertTitle>You have unsaved changes</AlertTitle>
          <AlertDescription>
            <div className="mt-1 flex gap-1.5">
              <Button size="xs" onClick={() => setSaved(value)}>
                Save
              </Button>
              <Button size="xs" variant="ghost" onClick={() => setValue(saved)}>
                Discard
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}
      <div className="space-y-1.5">
        <Label htmlFor="channel-desc">Channel description</Label>
        <Textarea
          id="channel-desc"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          rows={3}
        />
      </div>
    </div>
  )
}
