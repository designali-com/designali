"use client"

import * as React from "react"
import { GiftIcon } from "lucide-react"

import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"
import { Textarea } from "@workspace/ui/components/textarea"

export default function GiftMessageTextarea() {
  const [gift, setGift] = React.useState(true)

  return (
    <div className="flex w-full max-w-sm flex-col gap-3 border p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <GiftIcon className="size-4" />
          <Label htmlFor="gm-switch">This order is a gift</Label>
        </div>
        <Switch id="gm-switch" checked={gift} onCheckedChange={setGift} />
      </div>
      {gift && (
        <div className="grid gap-1.5">
          <Label htmlFor="gm-text" className="text-muted-foreground">
            Gift message (printed on the card)
          </Label>
          <Textarea
            id="gm-text"
            maxLength={150}
            defaultValue="Happy birthday, Sol! Enjoy the new kettle. Love, Ines"
            className="font-serif text-sm"
          />
          <p className="text-xs text-muted-foreground">
            Prices are hidden on the packing slip.
          </p>
        </div>
      )}
    </div>
  )
}
