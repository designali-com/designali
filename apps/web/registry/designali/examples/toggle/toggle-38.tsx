"use client"

import * as React from "react"
import { LanguagesIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@workspace/ui/components/avatar"
import { Toggle } from "@workspace/ui/components/toggle"

export default function MessageTranslateToggle() {
  const [translated, setTranslated] = React.useState(false)

  return (
    <div className="flex w-full max-w-sm gap-3">
      <Avatar>
        <AvatarFallback>LM</AvatarFallback>
      </Avatar>
      <div className="flex min-w-0 flex-col gap-1">
        <div className="bg-muted px-3 py-2 text-sm">
          {translated
            ? "Can we move the call to Thursday morning?"
            : "On peut décaler l'appel à jeudi matin ?"}
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Louis Martin - 10:42</span>
          <Toggle
            size="sm"
            pressed={translated}
            onPressedChange={setTranslated}
            className="h-6 px-1.5 text-xs"
          >
            <LanguagesIcon />
            {translated ? "Show original" : "Translate"}
          </Toggle>
        </div>
      </div>
    </div>
  )
}
