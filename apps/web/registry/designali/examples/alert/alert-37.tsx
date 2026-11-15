"use client"

import * as React from "react"
import { LightbulbIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@workspace/ui/components/alert"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import { Label } from "@workspace/ui/components/label"

export default function AlertShortcutTip() {
  const [hidden, setHidden] = React.useState(false)
  const [remember, setRemember] = React.useState(false)

  if (hidden) {
    return (
      <p className="text-xs text-muted-foreground">
        {remember ? "Tip hidden for good." : "Tip hidden for this session."}
      </p>
    )
  }

  return (
    <Alert className="max-w-md">
      <LightbulbIcon />
      <AlertTitle className="flex flex-wrap items-center gap-1">
        Tip: press
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
        to jump anywhere
      </AlertTitle>
      <AlertDescription>
        <div className="mt-1 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <Checkbox
              id="tip-remember"
              checked={remember}
              onCheckedChange={setRemember}
            />
            <Label
              htmlFor="tip-remember"
              className="font-normal text-muted-foreground"
            >
              Don&apos;t show again
            </Label>
          </div>
          <Button size="xs" variant="ghost" onClick={() => setHidden(true)}>
            Got it
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  )
}
