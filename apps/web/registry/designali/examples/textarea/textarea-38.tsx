"use client"

import * as React from "react"
import {
  History as HistoryIcon,
} from "@designali/icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"
import { Textarea } from "@workspace/ui/components/textarea"

export default function DraftRestoreTextarea() {
  const [restored, setRestored] = React.useState(true)
  const [value, setValue] = React.useState(
    "Hi, following up on the Designali invoice we discussed last week…"
  )

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      {restored && (
        <Alert>
          <HistoryIcon />
          <AlertTitle>Draft restored</AlertTitle>
          <AlertDescription>
            From your last session, 3 hours ago.{" "}
            <Button
              variant="link"
              size="xs"
              className="h-auto p-0"
              onClick={() => {
                setValue("")
                setRestored(false)
              }}
            >
              Discard
            </Button>
          </AlertDescription>
        </Alert>
      )}
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="Message"
        placeholder="Write a message"
      />
    </div>
  )
}
